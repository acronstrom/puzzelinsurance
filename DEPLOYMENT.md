# Deploying Puzzel Insurance to Vercel

This guide will help you deploy your Puzzel Insurance website to Vercel.

## 🚀 Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account)
2. Click "Add New..." → "Project"
3. Import your GitHub repository: `acronstrom/puzzelinsurance`
4. Vercel will auto-detect the Vite framework
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

**Your site will be available at:** `https://puzzelinsurance.vercel.app` (or custom domain)

### Option 2: Deploy via CLI

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Navigate to your project:**
   ```bash
   cd "/Users/andreascronstrom/Visual Studio Code/PuzzelInsurance"
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time)
   - What's your project's name? **puzzelinsurance**
   - In which directory is your code located? **./** 
   - Want to modify settings? **N**

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## 📋 Configuration Details

Your project is already configured with:

- ✅ **vercel.json** - Routing configuration for SPA
- ✅ **Build command**: `npm run build`
- ✅ **Output directory**: `dist`
- ✅ **Framework**: Vite

## 🔄 Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the `main` branch
- Create preview deployments for pull requests
- Provide unique URLs for each deployment

## 🌐 Custom Domain

To add a custom domain:
1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your domain and follow DNS setup instructions

## 📊 Environment Variables

If you need environment variables:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add variables for different environments (Production, Preview, Development)

## ⚡ Performance Features

Vercel automatically provides:
- 🚀 Global CDN
- 📦 Automatic HTTPS
- 🔄 Instant cache invalidation
- 📈 Web Analytics
- 🎯 Edge Functions support

## 🔧 Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test `npm run build` locally first

### 404 Errors on Routes
- The `vercel.json` config handles this with SPA rewrites
- All routes will correctly serve `index.html`

### Slow Initial Load
- Vercel automatically optimizes assets
- Consider code splitting for larger apps
- Enable compression (already configured)

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

**Need help?** Contact the development team or check Vercel's documentation.

