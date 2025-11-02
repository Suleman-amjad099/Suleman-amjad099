# Daily Choice - Ecommerce Website

A modern, responsive ecommerce website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Custom Logo Design**: Professional "Daily Choice" logo with shopping bag icon and checkmark
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI Components**:
  - Sticky navigation header with mobile menu
  - Hero section with call-to-action buttons
  - Product cards with hover effects
  - Category browsing
  - Newsletter subscription
  - Comprehensive footer
- **Product Features**:
  - Product ratings and reviews
  - Sale badges (Sale, Hot, New)
  - Add to cart functionality
  - Wishlist button
  - Price comparison (original vs sale price)
- **User Experience**:
  - Smooth animations and transitions
  - Interactive hover effects
  - Clean, modern design
  - Easy navigation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd daily-choice-ecommerce
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
daily-choice-ecommerce/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Logo.tsx            # Custom Daily Choice logo
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links
│   └── ProductCard.tsx     # Reusable product card
└── public/                 # Static assets
```

## Components

### Logo Component
Custom SVG logo featuring:
- Shopping bag icon with checkmark
- "Daily Choice" brand name
- "Your Daily Essentials" tagline
- Blue color scheme

### Header Component
- Responsive navigation menu
- Mobile hamburger menu
- Search, user account, and cart icons
- Sticky positioning

### Product Card Component
- Product image placeholder (emoji)
- Star ratings
- Price display with sale pricing
- Add to cart button
- Wishlist functionality
- Hover animations

### Footer Component
- Brand information
- Social media links
- Quick links
- Customer service links
- Copyright information

## Customization

### Colors
The primary color scheme uses blue (`blue-600`). To change:
- Update Tailwind classes in components
- Modify the color values in `tailwind.config.ts`

### Products
Edit the `featuredProducts` array in `app/page.tsx` to add/modify products:
```typescript
{
  name: "Product Name",
  price: 99.99,
  originalPrice: 149.99,  // Optional
  rating: 4.5,
  reviews: 234,
  image: "🎧",  // Emoji or image URL
  badge: "Sale",  // Optional: "Sale", "Hot", "New"
}
```

### Categories
Edit the `categories` array in `app/page.tsx` to modify categories.

## License

This project is open source and available for personal and commercial use.

## Support

For questions or support, please contact the Daily Choice team.

---

Built with ❤️ using Next.js and Tailwind CSS
