# Abdul Hadi - Professional Portfolio Website

A modern, fully-featured portfolio website built with HTML5, CSS3, and JavaScript featuring stunning Anime.js animations and smooth scrolling experiences.

## ✨ Features

### 🎬 Animations
- **Camera Lens Opening** - Impressive hero animation on page load
- **Scroll Animations** - Elements fade and slide in as you scroll
- **Smooth Transitions** - Professional easing functions throughout
- **Interactive Effects** - Hover effects and dynamic interactions
- **Progress Bars** - Animated skill progress indicators

### 📱 Responsive Design
- Fully responsive on mobile, tablet, and desktop
- Mobile-first approach
- Hamburger menu for mobile navigation
- Touch-friendly interactions

### 🎨 Sections
1. **Hero Section** - Eye-catching landing with camera lens animation
2. **Navigation Bar** - Fixed navbar with smooth scrolling
3. **About Section** - Personal bio and statistics
4. **Projects Section** - Showcase of completed projects with tags
5. **Skills Section** - Technical skills with animated progress bars
6. **Contact Section** - Contact form and social links
7. **Footer** - Simple footer with credits

### 🔧 Functionality
- Smooth scroll navigation
- Active nav link tracking
- Form validation and submission
- Mobile menu toggle
- Scroll-triggered animations
- Progress bar animations

## 📋 Files

```
animation-web/
├── index.html       # Main HTML file
├── style.css        # Complete styling
├── script.js        # All JavaScript functionality
├── package.json     # Project metadata
└── README.md        # This file
```

## 🚀 Quick Start

### 1. Open in Browser
Simply open `index.html` in your web browser to view the website.

### 2. Local Server (Optional)
For better compatibility, run a local server:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

### 3. Live Server (VS Code)
1. Install Live Server extension
2. Right-click `index.html` and select "Open with Live Server"

## 🎯 Customization

### Change Your Name/Title
Edit `index.html` and update:
```html
<h1 class="hero-title">Your Name Here</h1>
<p class="hero-subtitle">Your Title Here</p>
```

### Change Colors
Edit `style.css` and modify the CSS variables:
```css
:root {
    --primary-color: #667eea;      /* Main color */
    --secondary-color: #764ba2;    /* Secondary color */
    --accent-color: #f093fb;       /* Accent color */
}
```

### Modify Projects
Edit the `.project-card` elements in `index.html`:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-code"></i>
    </div>
    <h3>Project Title</h3>
    <p>Project description</p>
</div>
```

### Update Skills
Modify the skill bars in `index.html`:
```html
<div class="skill-bar">
    <span class="skill-name">Skill Name</span>
    <div class="progress-bar">
        <div class="progress" style="width: 85%"></div>
    </div>
</div>
```

### Update Contact Info
Find the `.contact-item` sections and update with your info:
```html
<p><a href="mailto:your@email.com">your@email.com</a></p>
<p><a href="tel:+923000000000">+92 300 000 0000</a></p>
```

## 🎬 Animation Details

### Hero Animation Timeline
1. **0-800ms** - Camera lens blades rotate outward
2. **800-1400ms** - Lens fades away
3. **1200-2000ms** - Content fades in
4. **1600-2200ms** - Text slides up
5. **2000-2600ms** - Buttons appear

### Scroll Animations
- Elements fade in with a smooth slide-up effect
- Triggered when scrolling into view
- Staggered delays for multiple elements
- Uses Intersection Observer API

## 📦 Dependencies

- **Anime.js** - Animation library (loaded from CDN)
- **Font Awesome** - Icon library (loaded from CDN)
- **No build tools required** - Pure vanilla JavaScript

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ 60+  |
| Firefox | ✅ 55+  |
| Safari  | ✅ 12+  |
| Edge    | ✅ 79+  |
| IE      | ❌ Not supported |

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons
- Mobile navigation menu
- Optimized font sizes
- Faster animations on mobile

## 🔍 SEO Basics

To improve SEO, update in `index.html`:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your portfolio description">
```

## 💡 Tips & Tricks

1. **Performance**: Minimize CPU usage by reducing simultaneous animations
2. **Loading**: Preload images for faster load times
3. **Mobile**: Test on actual devices, not just browser emulation
4. **Accessibility**: Add alt text to images and semantic HTML
5. **Analytics**: Add Google Analytics for tracking

## 🛠️ Classes & Functions

### JavaScript Classes

- **CameraLensAnimation** - Manages hero animation
- **ScrollAnimations** - Handles scroll-triggered animations
- **NavbarController** - Controls navigation behavior
- **ContactFormHandler** - Manages form submissions
- **SkillProgressBars** - Animates progress bars
- **ProjectCardEffects** - Hover effects for projects
- **SmoothScroll** - Smooth scrolling behavior

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

## 👨‍💻 Made With

- HTML5
- CSS3
- JavaScript (ES6+)
- Anime.js
- Font Awesome Icons

## 🤝 Contributing

Feel free to fork, modify, and improve this portfolio template!

## 📞 Contact

For questions or suggestions, feel free to reach out!

---

**Built with ❤️ using modern web technologies**

Made with Anime.js for smooth animations ✨
