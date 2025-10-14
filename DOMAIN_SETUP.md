# Domain Configuration Guide for BioWox

## Overview
This guide outlines the steps to configure a custom domain for your BioWox landing page, which is currently hosted on GitHub Pages at `https://moralesmozart.github.io/BioWox/`.

## Prerequisites
- [ ] Custom domain purchased (e.g., `biowox.com.br` or `biowox.com`)
- [ ] Access to domain registrar (where you bought the domain)
- [ ] GitHub repository access

## Step 1: Domain Registrar Configuration

### Option A: Using a Subdomain (Recommended)
If you want to use a subdomain like `www.biowox.com.br`:

1. **Access your domain registrar** (GoDaddy, Namecheap, etc.)
2. **Add CNAME record**:
   - Type: `CNAME`
   - Name: `www`
   - Value: `moralesmozart.github.io`
   - TTL: `3600` (or default)

### Option B: Using Apex Domain
If you want to use the root domain like `biowox.com.br`:

1. **Add A records** (GitHub Pages IPs):
   - Type: `A`
   - Name: `@` (or leave blank)
   - Value: `185.199.108.153`
   - TTL: `3600`
   
   - Type: `A`
   - Name: `@` (or leave blank)
   - Value: `185.199.109.153`
   - TTL: `3600`
   
   - Type: `A`
   - Name: `@` (or leave blank)
   - Value: `185.199.110.153`
   - TTL: `3600`
   
   - Type: `A`
   - Name: `@` (or leave blank)
   - Value: `185.199.111.153`
   - TTL: `3600`

2. **Add CNAME for www** (optional but recommended):
   - Type: `CNAME`
   - Name: `www`
   - Value: `moralesmozart.github.io`
   - TTL: `3600`

## Step 2: GitHub Pages Configuration

### 2.1 Enable Custom Domain
1. Go to your GitHub repository: `https://github.com/moralesmozart/BioWox`
2. Navigate to **Settings** → **Pages**
3. In the **Custom domain** section:
   - Enter your domain (e.g., `www.biowox.com.br` or `biowox.com.br`)
   - Check **Enforce HTTPS** (recommended)

### 2.2 Create CNAME File
Create a file named `CNAME` in the repository root with your domain:

```
www.biowox.com.br
```
or
```
biowox.com.br
```

## Step 3: DNS Propagation and Testing

### 3.1 Wait for DNS Propagation
- DNS changes can take 24-48 hours to fully propagate
- Use tools like `nslookup` or online DNS checkers to verify

### 3.2 Test Domain Access
- Test both `http://` and `https://` versions
- Verify all pages load correctly
- Test the contact form functionality

## Step 4: SSL Certificate
- GitHub Pages automatically provides SSL certificates for custom domains
- Enable **Enforce HTTPS** in GitHub Pages settings
- Wait for certificate provisioning (can take up to 24 hours)

## Step 5: Update Application Configuration

### 5.1 Update Metadata
Update `app/layout.tsx` with the new domain:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.biowox.com.br/'), // Update this
  // ... rest of metadata
};
```

### 5.2 Update OpenGraph URLs
Update all OpenGraph and Twitter card URLs to use the new domain.

## Step 6: SEO and Redirects

### 6.1 Set up Redirects
Consider setting up redirects from:
- `biowox.com.br` → `www.biowox.com.br` (or vice versa)
- Old GitHub Pages URL → New domain

### 6.2 Update Sitemap
Update any sitemap references to use the new domain.

## Step 7: Testing Checklist

- [ ] Domain resolves correctly
- [ ] HTTPS certificate is active
- [ ] All pages load without errors
- [ ] Contact form works correctly
- [ ] Version switching works
- [ ] Google Forms integration works
- [ ] Mobile responsiveness maintained
- [ ] Page speed is acceptable

## Step 8: Go Live

### 8.1 Final Verification
- Test all functionality on the new domain
- Verify Google Analytics (if used)
- Check search engine indexing

### 8.2 Announcement
- Update any existing links to point to the new domain
- Notify users of the domain change
- Update business cards, marketing materials, etc.

## Troubleshooting

### Common Issues:
1. **DNS not propagating**: Wait longer or check DNS settings
2. **HTTPS not working**: Ensure "Enforce HTTPS" is enabled in GitHub Pages
3. **Mixed content warnings**: Update all internal links to use HTTPS
4. **Caching issues**: Clear browser cache or use incognito mode

### Useful Commands:
```bash
# Check DNS resolution
nslookup www.biowox.com.br

# Check if domain points to GitHub Pages
dig www.biowox.com.br CNAME
```

## Next Steps After Domain Setup

1. **Google Search Console**: Add the new domain
2. **Google Analytics**: Update property settings
3. **Social Media**: Update all social media profiles
4. **Email Signatures**: Update with new domain
5. **Business Listings**: Update Google My Business, etc.

## Important Notes

- ⚠️ **Do not make these changes until you're ready to go live**
- 🔒 **Always test thoroughly before announcing the new domain**
- 📱 **Ensure mobile compatibility is maintained**
- 🚀 **Consider setting up monitoring for the new domain**

---

**Ready to proceed?** Let me know which domain you want to use and I'll help you implement the configuration step by step!
