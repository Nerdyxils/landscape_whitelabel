# 🌿 GreenScape Landscaping Website

A professional, modern, single-page demo website for a landscaping company. This is a **white-label portfolio project** designed to showcase what a $500 website could look like for prospective clients.

## ✨ Features

- **One-page layout** with smooth scrolling navigation
- **Fully responsive** design for all devices
- **Modern UI/UX** with clean, professional aesthetics
- **Interactive elements** including testimonials carousel and portfolio filters
- **Contact form** with validation and submission handling
- **Fade-in animations** on scroll for enhanced user experience
- **Professional color scheme** using green, white, and gray tones
- **Poppins typography** for modern, readable text

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom CSS with CSS variables and animations
- **Responsive Design** - Mobile-first approach
- **Intersection Observer API** - For scroll animations

## 📱 Sections

1. **Header** - Navigation with mobile menu
2. **Hero** - Full-screen landing with call-to-action
3. **Services** - Three main service offerings
4. **Portfolio** - Before/after project showcase with filters
5. **Testimonials** - Client feedback carousel
6. **Contact** - Contact form and company information
7. **Footer** - Links, social media, and company details

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Quick Start

1. **Clone or download** the project files
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🎨 Customization Guide

### Company Information

Update the following files to customize for your client:

- **Company Name**: Update in `Header.jsx`, `Hero.jsx`, and `Footer.jsx`
- **Contact Details**: Modify in `Contact.jsx` and `Footer.jsx`
- **Services**: Customize in `Services.jsx`
- **Portfolio**: Replace images and project details in `Portfolio.jsx`
- **Testimonials**: Update client information in `Testimonials.jsx`

### Colors & Branding

The color scheme is defined in CSS variables in `src/index.css`:

```css
:root {
  --primary-green: #22c55e;
  --primary-green-dark: #16a34a;
  --secondary-green: #dcfce7;
  --accent-green: #15803d;
  /* ... other colors */
}
```

### Images

Replace placeholder images with actual project photos:
- Hero background image in `Hero.jsx`
- Portfolio before/after images in `Portfolio.jsx`
- Client testimonial photos in `Testimonials.jsx`

### Content

All text content is easily editable in the component files. Look for:
- Headlines and descriptions
- Service descriptions
- Company information
- Contact details

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Development

### Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Services.jsx    # Services showcase
│   ├── Portfolio.jsx   # Portfolio gallery
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer section
├── App.jsx             # Main app component
├── main.jsx            # Entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add corresponding CSS file
3. Import and add to `App.jsx`
4. Update navigation in `Header.jsx`

### Styling

- Use CSS variables for consistent theming
- Follow the existing component structure
- Maintain responsive design principles
- Use the established animation patterns

## 🚀 Deployment

### Static Hosting (Recommended)
- Netlify
- Vercel
- GitHub Pages
- AWS S3

### Traditional Hosting
- Upload the `dist` folder contents to your web server
- Ensure proper MIME types are set
- Configure URL rewriting for single-page app routing

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a portfolio project, but suggestions for improvements are welcome:
- Bug fixes
- Performance optimizations
- Accessibility improvements
- New features

## 📄 License

This project is created for portfolio demonstration purposes. Feel free to use and modify for your landscaping business clients.

## 💡 Tips for Clients

- **Content**: Provide high-quality images of your work
- **Services**: List your specific offerings and pricing
- **Testimonials**: Include real client feedback with photos
- **Contact**: Ensure all contact information is current
- **SEO**: Add meta descriptions and keywords for your area

## 🆘 Support

For questions about customization or deployment:
1. Check the customization guide above
2. Review the component structure
3. Ensure all dependencies are installed
4. Check browser console for errors

---

**Built with ❤️ for the landscaping industry**
