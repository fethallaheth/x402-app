import { paymentMiddleware } from "x402-express";

const WALLET_TO_RECEIVE_THE_PAYMENT = "0x0123456789abcdef0123456789abcdef01234567";
const network = "base-sepolia";

export const handler = async (event, context) => {
  try {
    // Create a mock request object
    const req = {
      method: event.httpMethod || 'GET',
      path: event.path || '/auth',
      query: event.queryStringParameters || {},
      headers: event.headers || {}
    };
    
    // Create a mock response object
    const res = {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: '',
      redirect: (url) => {
        return {
          statusCode: 302,
          headers: { Location: url }
        };
      },
      json: (data) => {
        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        };
      }
    };
    
    // Apply payment middleware
    const paymentResult = await paymentMiddleware(
      WALLET_TO_RECEIVE_THE_PAYMENT,
      {
        "GET /auth": {
          price: "$0.01",
          network: network
        }
      },
      {
        url: "https://facilitator.payai.network"
      }
    )(req, res);
    
    // Return the result
    return paymentResult || {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: "Payment processing initiated" })
    };
  } catch (error) {
    console.error("Error in auth function:", error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};