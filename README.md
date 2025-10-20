# Ethereum Insights

A minimal and modern blog about Ethereum blockchain technology, featuring a comprehensive guide to understanding Ethereum's architecture, smart contracts, and decentralized applications.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with responsive design
- **Comprehensive Content**: Detailed guide covering all aspects of Ethereum
- **Payment Integration**: Built with X402 payment protocol for premium content access
- **Static Site**: Fast loading with optimized performance
- **Mobile Responsive**: Works perfectly on all devices

## 📁 Project Structure

```
x402-app/
├── public/
│   ├── index.html          # Homepage with featured article
│   ├── article.html        # Main Ethereum article
│   ├── style.css          # Minimal styling
│   └── _redirects         # Netlify redirects
├── netlify.toml           # Netlify deployment configuration
├── package.json           # Dependencies and scripts
├── index.js              # Express server (for local development)
└── README.md             # This file
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd x402-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## 🌐 Deployment

### Netlify Deployment

This project is optimized for Netlify deployment:

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `public`
   - Node version: `18`

3. **Deploy** - Netlify will automatically deploy on every push

### Manual Deployment

For other platforms, you can deploy the `public` folder as a static site.

## 💳 Payment Integration

This project uses the X402 payment protocol for premium content access:

- **Payment Required**: Access to the full article requires a small payment
- **Wallet Integration**: Supports crypto wallet payments
- **Network**: Configured for Base Sepolia testnet
- **Price**: $0.001 USD equivalent

### Payment Flow

1. User clicks "Read Article" on homepage
2. Redirected to `/auth` route
3. Payment middleware processes the transaction
4. Upon successful payment, redirected to `/article`

## 🎨 Design Philosophy

The design follows minimal principles:

- **Clean Typography**: System fonts with clear hierarchy
- **Subtle Colors**: White background with blue accents
- **Minimal Shadows**: Subtle depth without visual noise
- **Responsive Grid**: Flexible layouts for all screen sizes
- **Fast Loading**: Optimized for performance

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive at 768px and above
- **Touch Friendly**: Appropriate button and link sizes
- **Readable**: Proper font sizes and line heights

## 🔧 Configuration

### Environment Variables

For production deployment, you may want to configure:

- `WALLET_TO_RECEIVE_THE_PAYMENT`: Your wallet address
- `NETWORK`: Blockchain network (base-sepolia, base-mainnet, etc.)
- `FACILITATOR_URL`: X402 facilitator endpoint

### Customization

- **Colors**: Modify CSS variables in `style.css`
- **Content**: Update HTML files in `public/`
- **Payment**: Adjust settings in `index.js`

## 📄 Content Structure

### Homepage (`index.html`)
- Hero section with statistics
- Featured article card
- Newsletter signup
- Footer with links

### Article Page (`article.html`)
- Comprehensive Ethereum guide
- Multiple sections covering:
  - What is Ethereum?
  - Key features
  - How it works
  - Ethereum 2.0
  - Real-world applications
  - Benefits and challenges
  - Future roadmap

## 🚀 Performance

- **Static Files**: Fast loading with CDN support
- **Optimized Images**: Compressed and responsive
- **Minimal CSS**: Lightweight styling
- **No JavaScript**: Pure HTML/CSS for maximum speed

## 🔒 Security

- **HTTPS**: Enforced by Netlify
- **Payment Security**: Handled by X402 protocol
- **No Sensitive Data**: No user data stored locally

## 📞 Support

If you encounter any issues:

1. Check the Netlify build logs
2. Verify your payment configuration
3. Ensure all dependencies are installed
4. Check browser console for errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📜 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Ethereum Foundation for blockchain education resources
- X402 team for payment protocol integration
- Netlify for hosting platform
- Unsplash for images

---

**Built with ❤️ for the Ethereum community**
