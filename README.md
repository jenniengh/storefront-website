# Craft Trails - Handmade & Craft Supplies Storefront
A website project created for my SDC260 course

## Website Purpose
This website is being developed as a project for my product development course. Its purpose is to provide users with an organized and easy-to-use website that presents the project's planned content and features.

## Key Features & Functionality
### 1 - Storefront & Browsing
  - **Dynamic Product Catalog:** Displays items for crocheting, knitting, sewing, painting, and sketching with real-time stock availability.
  - **Detailed Product View:** Focuses on individual product specifications, including unique product IDs and item descriptions.
  - **Responsive Navigation:** Header navigation bar across all pages with active page indicators.
### 2 - Cart & Inventory Management
  - **Persistent Storage:** Shopping cart items and state persist across browser sessions and refreshes via browser localStorage.
  - **Real-time Inventory Tracking:** Inventory automatically decrements when products are added to the cart and restored when items are removed or cleared.
  - **Stock Protection:** "Add to Cart" buttons dynamically update to "Out of Stock" state with visual tooltips when stock hits zero.
  - **Quantity Controls:** Adjust item quantities directly within the cart or clear the entire cart in one action.
### 3 - Order Checkout & Discounts
  - **Coupon System:** Supports promotional codes with instant discount calculation.
  - **Form Validation:** Client-side validation for contact, shipping, and payment information (phone format, ZIP code, card number format, MM/YY expiration, CVV).
  - **Order Processing:** Generates a unique order identifier upon successful checkout and transfers cart items into a completed order record.
### 4 - Order Confirmation
  - **Receipt Generation:** Displays the customer's completed order details, including order number, line items, quantities, and final billed amount.
### 5 - Customer Contact
  - **Inquiry Form:** Interactive contact form with real-time field validation for email formatting and required message content.
