import express from 'express';
import path from "path";
import {paymentMiddleware} from "x402-express";

const app = express();

app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.json());

const WALLET_TO_RECEIVE_THE_PAYMENT = "0x0123456789abcdef0123456789abcdef01234567";
const network = "base-sepolia";


// Payment Middleware
app.use(paymentMiddleware(
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
));

// create a new express application 
// create two routes 

/// / - root route 
app.get('/', (req, res) => {
   res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

/// /article - article route 
app.get('/article', (req, res) => {
   res.sendFile(path.join(process.cwd(), "public", "article.html"));
});

app.get('/auth', (req, res) => {
    res.redirect("/article")
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});