const CART_KEY = 'craftTrailsCart';
const INVENTORY_KEY = 'craftTrailsInventory';
const PRODUCTS = [
{id:'10034',name:'Lion Brand Wool-Ease',price:8.99,image:'yarn.jpg',stock:5},
{id:'10035',name:'Cozy Cotton Yarn',price:7.49,image:'cotton-yarn.jpg',stock:5},
{id:'10036',name:'Colorful Embroidery Thread',price:5.99,image:'thread.jpg',stock:5},
{id:'20334',name:'Susan Bates Soft Ergonomic Crochet Hook Set',price:18.99,image:'hooks.jpg',stock:5},
{id:'20335',name:'Bamboo Knitting Needle Set',price:16.99,image:'needles.jpg',stock:5},
{id:'30001',name:'Earthtone Acrylic Paint Set',price:14.99,image:'paint.jpg',stock:5},
{id:'30002',name:'Watercolor Starter Set',price:12.99,image:'watercolor.jpg',stock:5},
{id:'40001',name:'Natural Cotton Fabric',price:11.99,image:'fabric.jpg',stock:5},
{id:'40002',name:'Floral Print Fabric Bundle',price:15.99,image:'floral-fabric.jpg',stock:5},
{id:'50001',name:'Artist Sketchbook',price:9.99,image:'sketchbook.jpg',stock:5},
{id:'50002',name:'Mixed Media Sketchbook',price:13.49,image:'mixed-sketchbook.jpg',stock:5}
];
function getCart(){return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c))}
function getInventory(){let i=JSON.parse(localStorage.getItem(INVENTORY_KEY)||'null');if(!i){i={};PRODUCTS.forEach(p=>i[p.id]=p.stock);saveInventory(i)}return i}
function saveInventory(i){localStorage.setItem(INVENTORY_KEY,JSON.stringify(i))}
function feedback(msg){let e=document.getElementById('cart-feedback');if(!e){e=document.createElement('div');e.id='cart-feedback';e.className='cart-feedback';document.body.appendChild(e)}e.textContent=msg;e.classList.add('show');clearTimeout(window.feedbackTimer);window.feedbackTimer=setTimeout(()=>e.classList.remove('show'),2000)}
function addToCart(id){let p=PRODUCTS.find(x=>x.id===id),i=getInventory(),c=getCart();if(!p)return;if((i[id]||0)<=0){feedback('Out of Stock');return}let x=c.find(x=>x.id===id);if(x)x.quantity++;else c.push({id:p.id,name:p.name,price:p.price,image:p.image,quantity:1});i[id]--;saveInventory(i);saveCart(c);feedback(p.name+' added to your cart.');if(typeof renderProducts==='function')renderProducts();if(typeof renderCart==='function')renderCart()}
function removeFromCart(id){let c=getCart(),x=c.find(x=>x.id===id);if(!x)return;let i=getInventory();i[id]=(i[id]||0)+x.quantity;c=c.filter(x=>x.id!==id);saveInventory(i);saveCart(c);feedback(x.name+' removed.');renderCart&&renderCart();renderProducts&&renderProducts()}
function changeQuantity(id,q){q=Math.max(0,parseInt(q)||0);let c=getCart(),x=c.find(x=>x.id===id),i=getInventory();if(!x)return;let d=q-x.quantity;if(d>0){if((i[id]||0)<d){feedback('Not enough stock available.');renderCart();return}i[id]-=d}else i[id]+=Math.abs(d);if(q===0){c=c.filter(x=>x.id!==id);feedback(x.name+' removed.')}else{x.quantity=q;feedback('Quantity updated.')}saveInventory(i);saveCart(c);renderCart&&renderCart();renderProducts&&renderProducts()}
function clearCart(){let c=getCart(),i=getInventory();c.forEach(x=>i[x.id]=(i[x.id]||0)+x.quantity);saveInventory(i);localStorage.removeItem(CART_KEY);feedback('Your cart has been cleared.');renderCart&&renderCart();renderProducts&&renderProducts()}
function cartTotal(){return getCart().reduce((s,x)=>s+x.price*x.quantity,0)}
