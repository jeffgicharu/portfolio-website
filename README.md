# Jeff Gicharu - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases my professional work, skills, and experience as a Full Stack Web Developer.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: System-aware dark mode with manual toggle option
- **Smooth Animations**: Page transitions and micro-interactions using Framer Motion
- **Contact Form**: Integrated email functionality using EmailJS
- **SEO Optimized**: Meta tags and OpenGraph data for better search engine visibility
- **Performance Optimized**: Fast loading times and optimal performance scores
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Icons**: Custom SVG icons
- **Deployment**: [Your deployment platform]

## 🏗️ Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   ├── Experience.tsx    # Experience section
│   ├── Navbar.tsx        # Navigation bar
│   ├── Projects.tsx      # Projects section
│   ├── Skills.tsx        # Skills section
│   ├── ScrollToTop.tsx   # Scroll to top button
│   └── ThemeToggle.tsx   # Dark mode toggle
├── context/              # React context
│   └── ThemeContext.tsx  # Dark mode context
└── public/              # Static assets
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Add your EmailJS credentials to `.env.local`

### Customization

- Update `app/layout.tsx` with your SEO metadata
- Modify components in the `components` directory to update content
- Adjust theme colors in `tailwind.config.js`
- Update images in the `public` directory

## 🌐 Deployment

The site can be deployed to any platform that supports Next.js applications. Some recommended platforms:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Digital Ocean App Platform

## 📱 Progressive Web App (PWA)

This website can be installed as a PWA on supported devices, providing a native app-like experience.

## 🎨 Color Scheme

- Primary: Blue (#2563eb)
- Background (Light): White (#ffffff)
- Background (Dark): Gray (#111827)
- Text (Light): Gray (#111827)
- Text (Dark): White (#ffffff)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](your-issues-url).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Jeff Gicharu - [Your Email]
LinkedIn: [Your LinkedIn Profile]
GitHub: [Your GitHub Profile]

---

Built with ❤️ by Jeff Gicharu
