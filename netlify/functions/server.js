const WALLET_TO_RECEIVE_THE_PAYMENT = "0x0123456789abcdef0123456789abcdef01234567";
const network = "base-sepolia";

export const handler = async (event, context) => {
    const { httpMethod, path, headers } = event;
    
    try {
        // Handle /auth route with payment
        if (path === '/auth' && httpMethod === 'GET') {
            // Return payment page HTML
            const paymentPageHTML = `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Payment Required - Ethereum Insights</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1 class="title">Ethereum Insights</h1>
            <p class="subtitle">Payment Required</p>
        </header>
        <main class="blog-container">
            <div class="card">
                <div class="content">
                    <h2>Access Required</h2>
                    <p>To read the full Ethereum article, please complete the payment process.</p>
                    <div class="payment-info">
                        <h3>Payment Details</h3>
                        <ul>
                            <li><strong>Amount:</strong> $0.001 USD</li>
                            <li><strong>Network:</strong> Base Sepolia</li>
                            <li><strong>Content:</strong> Full Ethereum Article Access</li>
                        </ul>
                    </div>
                    <div class="payment-actions">
                        <button class="button primary" onclick="initiatePayment()">Pay with Crypto Wallet</button>
                        <button class="button" onclick="window.location.href='/'">Back to Home</button>
                    </div>
                    <div id="payment-status" style="display: none; margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 8px;">
                        <p>Processing payment...</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <script>
        async function initiatePayment() {
            const statusDiv = document.getElementById('payment-status');
            statusDiv.style.display = 'block';
            statusDiv.innerHTML = '<p>Initiating payment process...</p>';

            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                statusDiv.innerHTML = '<p style="color: green;">Payment successful! Redirecting to article...</p>';
                setTimeout(() => {
                    window.location.href = '/article';
                }, 1500);
            } catch (error) {
                statusDiv.innerHTML = '<p style="color: red;">Payment failed. Please try again.</p>';
            }
        }
    </script>
</body>
</html>`;

            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'text/html',
                },
                body: paymentPageHTML
            };
        }

        // Handle /article route
        if (path === '/article' && httpMethod === 'GET') {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'text/html',
                    'Location': '/article.html'
                },
                body: ''
            };
        }

        // Default redirect to index
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html',
                'Location': '/index.html'
            },
            body: ''
        };

    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};