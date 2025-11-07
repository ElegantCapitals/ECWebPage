# Elegant Capitals Website

A modern, responsive React frontend website for Elegant Capitals (PVT) LTD, a business and financial consulting firm.

## Features

- **Modern Design**: Professional and minimalist design with navy blue, white, and gold color scheme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark Mode**: Optional dark mode toggle with persistent theme preference
- **Smooth Animations**: Subtle animations and transitions throughout the site
- **Interactive Components**: Contact form, smooth scrolling navigation, and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Sections

- **Hero**: Company tagline and call-to-action
- **About**: Company history, mission, and core values
- **Services**: Business Strategy, Financial Advisory, Operations Optimization, Risk Management, Leadership Development, and Performance Analytics
- **Team**: Meet the team with member profiles and expertise
- **Contact**: Contact form and company information
- **Footer**: Social media links and additional navigation

## Technology Stack

- **React 18**: Modern React with functional components and hooks
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern JavaScript**: ES6+ features and best practices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or extract the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with dark mode toggle
│   ├── Hero.js            # Hero section with animations
│   ├── About.js           # About section with company info
│   ├── Services.js        # Services showcase
│   ├── Team.js            # Team member profiles
│   ├── Contact.js         # Contact form and information
│   └── Footer.js          # Footer with links and social media
├── App.js                 # Main application component
├── index.js               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

- **Navy Blue**: Primary brand color (#102a43 to #f0f4f8)
- **Gold**: Accent color (#f59e0b to #fffbeb)
- **Gray**: Neutral colors for text and backgrounds

### Content

Update the content in each component file:

- **Company Information**: Modify `About.js` and `Hero.js`
- **Services**: Update the services array in `Services.js`
- **Team Members**: Edit the team array in `Team.js`
- **Contact Information**: Update contact details in `Contact.js`

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes
- Custom animations are defined in `tailwind.config.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Smooth scrolling and transitions
- Responsive images

## License

This project is created for Elegant Capitals (PVT) LTD. All rights reserved.

## Support

For technical support or questions about this website, please contact the development team.
