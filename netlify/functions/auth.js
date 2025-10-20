import { paymentMiddleware } from "x402-express";
import path from "path";

const WALLET_TO_RECEIVE_THE_PAYMENT = "0x0123456789abcdef0123456789abcdef01234567";
const network = "base-sepolia";

const handler = paymentMiddleware(
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
);

export { handler as handler };