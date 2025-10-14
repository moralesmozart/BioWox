# GoDaddy Domain Setup Guide for BioWox

## Step 1: Domain Purchase on GoDaddy

### 1.1 Choose Your Domain
**Recommended domains for BioWox:**
- `biowox.com.br` (Brazilian market focus)
- `biowox.com` (International)
- `biowoxlab.com.br` (Alternative)
- `biowox.com.br` (Most professional)

### 1.2 Purchase Process
1. **Go to**: [godaddy.com](https://godaddy.com)
2. **Search for your domain** (e.g., `biowox.com.br`)
3. **Check availability** and pricing
4. **Add to cart** and proceed to checkout
5. **Choose registration period** (1-2 years recommended)
6. **Complete purchase**

### 1.3 Important Notes
- ✅ **Don't buy hosting** - you're using GitHub Pages
- ✅ **Don't buy email** - you can set up later if needed
- ✅ **Don't buy SSL** - GitHub Pages provides it free
- ⚠️ **Only buy the domain registration**

## Step 2: GoDaddy DNS Configuration

### 2.1 Access DNS Management
1. **Login to GoDaddy**
2. **Go to**: My Products → Domains
3. **Click**: Manage next to your domain
4. **Go to**: DNS tab

### 2.2 Configure DNS Records

#### Option A: Using www subdomain (Recommended)
**Add these records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | moralesmozart.github.io | 1 Hour |
| A | @ | 185.199.108.153 | 1 Hour |
| A | @ | 185.199.109.153 | 1 Hour |
| A | @ | 185.199.110.153 | 1 Hour |
| A | @ | 185.199.111.153 | 1 Hour |

#### Option B: Using root domain only
**Add these records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 1 Hour |
| A | @ | 185.199.109.153 | 1 Hour |
| A | @ | 185.199.110.153 | 1 Hour |
| A | @ | 185.199.111.153 | 1 Hour |

### 2.3 Remove Default Records
**Delete these if they exist:**
- Any existing A records pointing to GoDaddy servers
- Any existing CNAME records
- Any existing MX records (unless you need email)

## Step 3: GitHub Pages Configuration

### 3.1 Enable Custom Domain
1. **Go to**: `https://github.com/moralesmozart/BioWox/settings/pages`
2. **In Custom domain section**:
   - Enter your domain (e.g., `www.biowox.com.br`)
   - Click **Save**
3. **Check**: "Enforce HTTPS" (will be available after DNS propagates)

### 3.2 Create CNAME File
**Create file**: `CNAME` in repository root
```
www.biowox.com.br
```
or
```
biowox.com.br
```

## Step 4: Update Application Configuration

### 4.1 Update Metadata
**File**: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.biowox.com.br/'), // Update this
  title: 'BioWox - Microbiologia Avançada | O futuro da microbiologia já chegou',
  description: '🧬 Laboratório de microbiologia avançada com tecnologia de ponta. Automação, precisão e velocidade em cada análise. O futuro da microbiologia já chegou!',
  // ... rest of metadata
};
```

### 4.2 Update OpenGraph URLs
**Update all OpenGraph and Twitter card URLs** to use the new domain.

## Step 5: DNS Propagation and Testing

### 5.1 Wait for Propagation
- **Time**: 24-48 hours for full propagation
- **Check**: Use `nslookup` or online DNS checkers

### 5.2 Test Commands
```bash
# Check DNS resolution
nslookup www.biowox.com.br

# Check if domain points to GitHub Pages
dig www.biowox.com.br CNAME
```

### 5.3 Test Website
- ✅ `http://www.biowox.com.br` loads
- ✅ `https://www.biowox.com.br` loads (after SSL)
- ✅ All pages work correctly
- ✅ Contact form works
- ✅ Version switching works

## Step 6: SSL Certificate

### 6.1 Enable HTTPS
1. **Wait for DNS propagation** (24-48 hours)
2. **Go to**: GitHub Pages settings
3. **Check**: "Enforce HTTPS"
4. **Wait**: SSL certificate provisioning (up to 24 hours)

### 6.2 Verify SSL
- Test `https://www.biowox.com.br`
- Check for green lock icon in browser
- Verify no mixed content warnings

## Step 7: Final Configuration

### 7.1 Redirects (Optional)
**Set up redirects in GoDaddy:**
- `biowox.com.br` → `www.biowox.com.br` (or vice versa)

### 7.2 Email Setup (Optional)
**If you want email:**
- Set up Google Workspace or similar
- Configure MX records in GoDaddy

## Step 8: Go Live Checklist

- [ ] Domain purchased and configured
- [ ] DNS records added in GoDaddy
- [ ] GitHub Pages custom domain set
- [ ] CNAME file created
- [ ] Application metadata updated
- [ ] DNS propagation complete
- [ ] SSL certificate active
- [ ] Website loads correctly
- [ ] Contact form works
- [ ] All versions work
- [ ] Mobile responsive
- [ ] Page speed acceptable

## Troubleshooting

### Common Issues:
1. **Domain not resolving**: Check DNS records, wait for propagation
2. **HTTPS not working**: Wait for SSL certificate, check GitHub Pages settings
3. **Mixed content warnings**: Update all internal links to HTTPS
4. **Caching issues**: Clear browser cache, use incognito mode

### GoDaddy Support:
- **Phone**: 1-480-505-8877
- **Chat**: Available 24/7 on GoDaddy website
- **Help Center**: help.godaddy.com

## Cost Breakdown

| Item | Cost | Notes |
|------|------|-------|
| Domain (.com.br) | ~$15-25/year | Varies by domain |
| Domain (.com) | ~$12-20/year | Varies by domain |
| GitHub Pages | Free | Already using |
| SSL Certificate | Free | Provided by GitHub |

## Next Steps After Domain Setup

1. **Google Search Console**: Add new domain
2. **Google Analytics**: Update property
3. **Social Media**: Update all profiles
4. **Business Listings**: Update Google My Business
5. **Email Signatures**: Update with new domain

---

**Ready to proceed?** Let me know which domain you're purchasing and I'll help you implement the configuration step by step!
