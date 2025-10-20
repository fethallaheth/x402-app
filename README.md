
# x402-app

**x402-app** is an experimental project built to explore and understand how the **HTTP 402 (Payment Required)** status could work as a payment mechanism on the web — especially when combined with crypto-based APIs or micropayments.

---

##  Author

[ChaosSR](https://x.com/0xlinguin) — Blockchain developer & security researcher

---

##  Concept

The HTTP status **`402 Payment Required`** is a reserved response code in the HTTP standard, originally intended to support digital payments or micropayment systems.  
Although not officially implemented on the web yet, some protocols (like **x402**) reimagine it as a way to request payment before granting access to an API or service.

In this concept:

1. A client sends an API request.
2. The server replies with **HTTP 402**, signaling that payment is required.
3. The response includes payment details (address, amount, currency, or a signed payment request).
4. Once the payment is made and verified, the client retries the request and receives the actual content.

This project demonstrates that flow in a simplified way.




##  How It Works

1. **Request:** The user (or frontend) sends a request to an endpoint.  
2. **Payment Required:** The server replies with `402 Payment Required` and includes metadata about the payment:

```json
   {
     "code": 402,
     "message": "Payment Required",
     "payment": {
       "currency": "USDC",
       "amount": "0.01",
       "address": "0x...",
       "reason": "Access to premium content"
     }
   }
```

3. **Payment Process:**
   The frontend displays this information and simulates a payment confirmation.

4. **Access Granted:**
   Once payment is marked as complete, the app fetches and displays the actual protected data.

---

##  Running Locally

```bash
# Clone the repository
git clone https://github.com/fethallaheth/x402-app.git

# Navigate to project folder
cd x402-app

# Install dependencies
npm install

# Start the development server
npm run dev


Then open [http://localhost:3000](http://localhost:3000) in your browser.

```
---

##  Contributing

Contributions are welcome!

If you’d like to help improve this project:
1. Fork the repository  
2. Create a new branch for your changes  
3. Commit and push your work  
4. Open a pull request  

Feel free to open an issue to suggest ideas or report bugs.

