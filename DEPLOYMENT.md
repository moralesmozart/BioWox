# 🚀 Deployment Instructions - GitHub Pages

## ✅ Security Check Completed
- ✅ No sensitive information exposed
- ✅ No API keys or secrets in code
- ✅ Generic contact information only
- ✅ Secure form validation implemented

## 📋 GitHub Pages Setup

### 1. Enable GitHub Pages
1. Go to your repository: https://github.com/moralesmozart/BioWox
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Automatic Deployment
The GitHub Actions workflow will automatically:
- ✅ Build the Next.js project
- ✅ Run linting tests
- ✅ Deploy to GitHub Pages
- ✅ Update on every push to `main` branch

### 3. Access Your Site
Once deployed, your site will be available at:
**https://moralesmozart.github.io/BioWox/**

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## 📁 Project Structure

```
biowox-landing/
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                    # Utilities and security
├── types/                  # TypeScript definitions
├── .github/workflows/      # GitHub Actions
├── public/                 # Static assets
└── README.md              # Project documentation
```

## 🛡️ Security Features

- **Form Validation**: Zod schemas for all inputs
- **Input Sanitization**: XSS protection
- **Rate Limiting**: Spam prevention
- **Security Headers**: CSRF, XSS protection
- **No Sensitive Data**: All contact info is generic

## 🎨 Features

- **Molecular Logo**: Animated rotating design
- **17+ Medical Icons**: Floating animations
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Glassmorphism effects
- **Performance**: Optimized for speed
- **SEO Ready**: Meta tags and structured data

## 📞 Contact Information (Generic)

- **WhatsApp**: +55 11 99999-9999
- **Email**: contato@biowox.com.br
- **Address**: São Paulo, SP, Brasil

---

**BioWox** - O futuro da microbiologia já chegou.
