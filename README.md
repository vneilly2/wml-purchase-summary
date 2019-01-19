# wml-purchase-summary

Walmart Labs Coding Exercise

The goal of this exercise is to build a “Purchase Summary” user interface (gif attached and linked here) using React.

You have the option to build this in React or React Native. You have time until 5pm tomorrow for your submission.

Key UI elements:
The “Pickup savings” tooltip
The “See Item details” expander
The “Apply Promo code” expander
The user should be able to enter a promo code “DISCOUNT” and on applying it, see a 10% discount reflect in the purchase summary. Use Redux for this.

**Please refrain from using existing react components out there to help building this (bootstrap etc.). For the pricing data, you can hard code it to an object/json and read from it**.
If using React web - build your UI on CodeSandbox: https://codesandbox.io/s/new and share the URL when ready
Feel free to use your own workflow too if easier and upload your project files to a GitHub repo along with instructions for loading it up and testing.

Reusability of component is a key factor to consider. You’ll be evaluated based on code correctness and quality.
You can reproduce this interface by going to walmart.com and adding this chair to Cart and going to Checkout page. You don’t have to go through with the order to see this UI.
If you choose “Pickup” option in Checkout, you’ll see the “Pickup Savings” tooltip on the right as well.
For the “See Item details” item image - feel free to use any placeholder image.
Clicking on “See Item Details” toggles open/close all the items’ details (not individually)

Bonus Points
If the UI is responsive and works fine across different resolutions (mobile/desktop - scaling by % of page width). You can ignore this if using React Native.
If there are unit tests for components with interactions.
