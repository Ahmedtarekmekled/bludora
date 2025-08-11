#!/bin/bash

# Bludora Website Deployment Script
echo "🚀 Starting Bludora website deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🔨 Building for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Built files are in the 'dist' directory"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Vercel: vercel --prod"
    echo "2. Netlify: netlify deploy --prod --dir=dist"
    echo "3. Static hosting: Upload 'dist' folder contents"
    echo ""
    echo "🎉 Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi
