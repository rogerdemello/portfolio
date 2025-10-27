# Roger Richard Demello - Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring advanced animations, particle effects, and micro-interactions.

🌐 **Live Demo**: [https://rogerdemello.vercel.app/](https://rogerdemello.vercel.app/)

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek dark design with gradient accents
- 📱 **Fully Responsive** - Perfect on all devices with mobile navigation
- ⚡ **Fast & Optimized** - Built with Next.js 14 for optimal performance
- 🎯 **Smooth Animations** - Fade-in effects and smooth scroll behavior
- ✨ **Particle Background** - Interactive canvas-based particle system
- 🎭 **Micro-Interactions** - Ripple effects, hover animations, 3D tilts
- 🔄 **Typing Animation** - Dynamic role cycling in hero section
- 📄 **Resume Dropdown** - View or download resume options
- ⬆️ **Back to Top Button** - Smooth scroll navigation
- � **SEO Optimized** - Enhanced meta tags for better discoverability
- �💼 **Professional Sections**:
  - Hero with typing animation
  - Education background
  - Technical skills with interactive cards
  - Featured projects showcase
  - Professional metrics & stats
  - Training & certifications
  - Competitive coding profiles
  - Contact form with FormSubmit integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rogerdemello/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, roles, and bio
   - Modify social media links
   - Change typing animation roles

2. **Education** (`components/Education.tsx`):
   - Add your educational background
   - Update CGPA and dates

3. **Skills** (`components/Skills.tsx`):
   - Update skill categories and technologies
   - Add/remove programming languages

4. **Projects** (`components/Projects.tsx`):
   - Add your projects with descriptions
   - Include GitHub and demo links
   - Upload project screenshots

5. **Training & Certifications** (`components/Training.tsx`):
   - Add certifications and training courses
   - Update competitive coding profiles

6. **Contact** (`components/Contact.tsx`):
   - Update FormSubmit email endpoint
   - Modify contact information

### Styling

The project uses Tailwind CSS for styling. Customize:
- Colors in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Micro-interactions in `app/micro-interactions.css`

## 🎭 Interactive Features

### Particle Background
- 100 animated particles with mouse interaction
- Particles avoid cursor on hover
- Connected lines between nearby particles
- Canvas-based rendering for smooth performance

### Micro-Interactions
- **Ripple Effects**: Click buttons to see water ripple animations
- **Magnetic Hover**: Elements lift and respond to hover
- **3D Tilt**: Cards tilt in 3D perspective
- **Icon Animations**: Icons rotate and scale on hover
- **Glow Pulse**: Key elements have pulsing glow effects
- **Gradient Shift**: Animated gradient backgrounds

### Typing Animation
- Cycles through roles: Software Developer → C++ Enthusiast → ML Engineer → AWS Certified Cloud Practitioner
- Smooth typing and deleting effect
- Cursor blink animation

### Mobile Navigation
- Responsive hamburger menu
- Slide-in sidebar on mobile
- Smooth scroll to sections
- Social links in mobile menu

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

This portfolio is deployed on Vercel. You can deploy your own:

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

Alternative deployment options:
- Netlify
- AWS Amplify
- GitHub Pages (requires static export)

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Custom CSS animations + Canvas API
- **Forms**: FormSubmit.co
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📧 Contact Form

The contact form uses [FormSubmit.co](https://formsubmit.co/) for email delivery. To set up:

1. Update the email endpoint in `components/Contact.tsx`
2. First submission requires email verification
3. Subsequent submissions go directly to inbox

## 🎯 Performance

- ✅ Optimized images and assets
- ✅ Code splitting with Next.js
- ✅ SEO-friendly with meta tags
- ✅ Fast loading times
- ✅ Responsive design
- ✅ Accessible (ARIA labels)

## 📄 Resume

Update your resume:
1. Replace `public/Resume.pdf` with your resume
2. The button offers View or Download options
3. Opens in new tab for viewing

## 🌟 Key Highlights

- **Interactive Portfolio**: Engaging animations and micro-interactions
- **Professional Design**: Clean, modern dark theme
- **Mobile-First**: Perfect experience on all devices
- **SEO Optimized**: Enhanced discoverability
- **Fast Performance**: Optimized for speed
- **Easy to Customize**: Well-structured and documented code

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Connect

- **GitHub**: [github.com/rogerdemello](https://github.com/rogerdemello)
- **LinkedIn**: [linkedin.com/in/rogerdemello](https://linkedin.com/in/rogerdemello)
- **LeetCode**: [leetcode.com/u/rogerdemello](https://leetcode.com/u/rogerdemello/)
- **Email**: rogerdemello289@gmail.com

---

**Made with ❤️ by Roger Richard Demello**

5. **Training & Certifications** (`components/Training.tsx`):
   - Add your certifications and training courses

### Styling

The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `app/globals.css`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js app can be deployed to:
- Vercel (recommended)
- Netlify
- AWS
- Any platform supporting Node.js

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## License

MIT License - feel free to use this template for your own portfolio!
