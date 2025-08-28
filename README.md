#  Portfolio Website

A modern, responsive personal portfolio website built with Next.js 15, React 19, and Tailwind CSS. Features smooth animations, interactive components, and a clean design to showcase your skills and projects.

##  Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Contact Form**: Integrated contact form with EmailJS
- **Performance Optimized**: Built with Next.js for optimal performance

## Technologies Used

### Frontend
- **Next.js 15** - React framework for production
- **React 19** - Latest React version with new features
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS 4** - Utility-first CSS framework

### Animation & UI
- **Framer Motion** - Production-ready motion library
- **React Hot Toast** - Toast notifications
- **CLSX** - Conditional className utility

### Development Tools
- **ESLint** - Code linting and formatting
- **Git** - Version control


## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
2. 
3. **Install dependencies**
   ```bash
   npm install
   
   ```

4. **Run the development server**
   ```bash
   npm run dev
   
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files to customize your portfolio:

- **Hero Section**: Modify `src/app/component/Sections/Hero.tsx`
- **About Section**: Edit `src/app/component/Sections/About.tsx`
- **Skills**: Update `src/app/component/Sections/Skills.tsx`
- **Projects**: Add your projects in `src/lib/projects.ts`
- **Contact**: Configure contact form in `src/app/component/Sections/Contact.tsx`

### Styling
- **Colors**: Modify Tailwind CSS classes or update `tailwind.config.js`
- **Layout**: Adjust spacing and layout in component files
- **Animations**: Customize Framer Motion animations

### Images and Assets
- Replace images in `public/icons/` with your own
- Add project screenshots to `public/projects/`
- Update favicon and other public assets

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
# EmailJS Configuration (if using contact form)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

### Tailwind CSS
The project uses Tailwind CSS 4 with PostCSS. Configuration can be found in:
- `tailwind.config.js`
- `postcss.config.mjs`
---

designed and built with ♥️ & ☕