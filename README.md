# Jeff Gicharu - Full Stack Developer Portfolio

![Portfolio Screenshot](/public/screenshot.png)  <!-- Optional: Add a screenshot of your portfolio -->

## Description

This is the source code for my personal portfolio website, showcasing my skills, projects, and experience as a Full Stack Web Developer. The site is built with modern web technologies, focusing on performance, responsiveness, and a clean user interface.

## Technologies Used

This project is built using the following technologies:

*   **Framework:** [Next.js](https://nextjs.org/) (v15 / App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Theme:** [next-themes](https://github.com/pacocoursey/next-themes) (for dark/light mode)
*   **Contact Form:** [EmailJS](https://www.emailjs.com/) (for sending emails directly from the frontend)
*   **Deployment:** [Vercel](https://vercel.com/)

## Features

*   **Responsive Design:** Adapts seamlessly to various screen sizes (desktop, tablet, mobile).
*   **Dark/Light Mode:** System preference detection and manual toggle.
*   **Component-Based Architecture:** Built with reusable React components.
*   **Smooth Animations:** Subtle animations using Framer Motion for an enhanced user experience.
*   **Dynamic OG Image Generation:** Uses `@vercel/og` for generating Open Graph images on the fly.
*   **Contact Form:** Functional contact form integrated with EmailJS.
*   **SEO Optimized:** Includes basic metadata and Open Graph tags for better search engine visibility.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jeffgicharu/portfolio-website.git
    cd portfolio-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables. See the `.env.example` file (if available) or the section below for required variables.

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Environment Variables

The following environment variables are required for certain features (like the contact form) to work correctly. Create a `.env.local` file in the project root:

```plaintext
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
# VERCEL_URL is automatically set by Vercel during deployment for OG image generation.
# For local OG image testing, you might need to set it manually or adjust the fallback in app/layout.tsx.
```

**Important:** Never commit your `.env.local` file or expose your secret keys publicly.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). Simply connect your GitHub repository to Vercel and configure the environment variables in the Vercel project settings.

## License

[MIT](/LICENSE) <!-- Optional: Add a LICENSE file -->

---

Feel free to connect with me!
[LinkedIn](https://www.linkedin.com/in/jeff-gicharu-0924a4217/) | [GitHub](https://github.com/jeffgicharu)
