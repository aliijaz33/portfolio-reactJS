# Portfolio Website - Modern React + TypeScript + Tailwind CSS

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases professional skills, projects, resume, and contact information with a modern design and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Interactive Components**:
  - Responsive navigation with mobile menu
  - Animated skill progress bars
  - Project cards with GitHub stats
  - Functional contact form
  - Resume image gallery
- **Performance Optimized**: Fast loading with optimized assets and code splitting
- **TypeScript**: Full type safety for better developer experience
- **Tailwind CSS**: Utility-first styling with custom configuration

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── resume/              # Resume images (auto-detected)
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with introduction
│   │   ├── About.tsx       # About me & resume display
│   │   ├── Skills.tsx      # Skills & technologies
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Contact.tsx     # Contact form & info
│   │   └── Footer.tsx      # Site footer
│   ├── App.tsx             # Main application component
│   ├── App.css             # Global styles
│   ├── index.tsx           # Entry point
│   └── index.css           # Tailwind directives & custom styles
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies & scripts
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling framework
- **Lucide React** - Icon library
- **React Icons** - Additional icons
- **Create React App** - Build toolchain

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🎨 Customization

### Personal Information

Update the following files with your personal details:

- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - Experience, education, personal info
- `src/components/Skills.tsx` - Skills, proficiency levels
- `src/components/Projects.tsx` - Project details, GitHub links
- `src/components/Contact.tsx` - Contact information, social links

### Styling

- Modify `tailwind.config.js` for theme customization (colors, fonts, etc.)
- Update `src/index.css` for global styles and custom utilities

### Resume Images

Place your resume screenshots in the `public/resume/` directory. The About component automatically displays images with filenames:

- `Screenshot 2026-04-26 at 2.55.45 PM.png`
- `Screenshot 2026-04-26 at 2.56.05 PM.png`

Update the image paths in `src/components/About.tsx` if using different filenames.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (flex column layouts, hidden navigation menu)
- **Tablet**: 768px - 1024px (grid adjustments)
- **Desktop**: > 1024px (full navigation, multi-column layouts)

## 🧩 Component Architecture

### Header Component

- Responsive navigation with mobile menu toggle
- Social media links
- Download resume button

### Hero Component

- Personal introduction with animated elements
- Quick stats display
- Call-to-action buttons

### About Component

- Personal information card
- Work experience timeline
- Education & certifications
- Resume image gallery

### Skills Component

- Categorized skill progress bars
- Tools & technologies tags
- Methodology cards

### Projects Component

- Project cards with GitHub statistics
- Technology tags
- Live demo and source code links
- GitHub stats dashboard

### Contact Component

- Functional contact form with validation
- Contact information cards
- Social media links

### Footer Component

- Site navigation links
- Social media icons
- Copyright information

## 🔧 Configuration Files

### Tailwind Configuration (`tailwind.config.js`)

- Custom color palette with primary/secondary colors
- Extended animations and keyframes
- Custom font families
- Responsive breakpoints

### PostCSS Configuration (`postcss.config.js`)

- Tailwind CSS plugin
- Autoprefixer for cross-browser compatibility

## 📊 Performance Optimizations

- **Code Splitting**: React.lazy() for component-based splitting
- **Image Optimization**: Properly sized resume images
- **CSS Purge**: Tailwind's purge option removes unused styles
- **Bundle Analysis**: Available via `npm run build -- --stats`

## 🐛 Troubleshooting

### Common Issues

1. **TypeScript Errors**
   - Run `npx tsc --noEmit` to check for type errors
   - Ensure all dependencies are properly installed

2. **Tailwind Styles Not Applying**
   - Restart the development server after configuration changes
   - Check that `index.css` includes Tailwind directives

3. **Images Not Loading**
   - Verify image paths in the `public` directory
   - Check console for 404 errors

4. **Icons Not Displaying**
   - Ensure `lucide-react` and `react-icons` are installed
   - Check icon import names

## 📈 Future Enhancements

Potential improvements for the portfolio:

- [ ] Dark/light mode toggle
- [ ] Multi-language support (i18n)
- [ ] Blog integration
- [ ] Project filtering by category
- [ ] Analytics integration
- [ ] PWA capabilities
- [ ] SEO optimization
- [ ] Performance monitoring

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev) and [React Icons](https://react-icons.github.io/react-icons/)
- Design inspiration from modern portfolio templates
- Built with [Create React App](https://create-react-app.dev/)

## 📞 Support

For questions or issues, please open an issue in the repository or contact via the portfolio's contact form.

---

**Happy Coding!** 🚀
