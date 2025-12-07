🌐 My Portfolio Website

A modern and responsive portfolio website built using Vanilla TypeScript and Vite, featuring a clean gradient-based UI, smooth animations, and optimized performance.

✨ Features

      🎨 Modern Gradient UI with floating animated background orbs

      📱 Fully Responsive design for desktop, tablet, and mobile
      
      ⚡ Fast Performance powered by Vite
      
      🧩 Vanilla TypeScript Components without frameworks
      
      📬 EmailJS Contact Form with email integration
      
      🎞️ Smooth CSS Animations and transitions
      
      🌙 Dark Mode Optimized
      
      ♿ Accessibility-friendly semantic HTML
      
      🚀 Production-Ready with optimized styles, clamp(), CSS variables, and minified builds
      
      🛠️ Tech Stack

Category	                Tools

Language	              TypeScript
Build Tool             	  Vite 6.3.5
Styling	                  CSS3, Custom Properties
Email Service	          EmailJS
Linting	                  ESLint
Fonts	                  Google Fonts – Inter


📁 Project Structure
src/
├── Component/
│   ├── About.ts
│   ├── App.ts
│   ├── ContactForm.ts
│   ├── ContactHeader.ts
│   ├── ContactInfo.ts
│   ├── ContactMethod.ts
│   ├── ContactSection.ts
│   ├── Experience.ts
│   ├── Hero.ts
│   ├── Navbar.ts
│   ├── Projects.ts
│   ├── Skills.ts
│   └── SocialSection.ts
│
├── Style/
│   ├── Root.css
│   ├── Navbar.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Experience.css
│   ├── Project.css
│   ├── ContactForm.css
│   ├── ContactHeader.css
│   ├── ContactInfo.css
│   ├── ContactMethod.css
│   ├── ContactSection.css
│   └── SocialSection.css
│
├── assets/
│   ├── TVR_LOGO.png
│   ├── varatharajan.jpg
│   └── react.svg
│
├── main.ts
├── types.ts
├── vite-env.d.ts
└── index.css

🚀 Getting Started

Prerequisites

    Node.js v16+
    
    npm or yarn

Installation
1️⃣ Clone the Repository
git clone https://github.com/Varatharajan1808/My_Portfolio.git
cd My_Portfolio

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev


➡️ Visit: http://localhost:5173

🏗️ Production Build
Create Production Build
npm run build

Preview Build
npm run preview

🔧 Configuration
EmailJS Setup

In ContactForm.ts, add your EmailJS credentials:

    Service ID

    Template ID

    Public Key

🎨 Customization
CSS Variables (Root.css)

Change global theme colors here:

    :root {
      --primary-color: #6cefde;
      --secondary-color: #4C83FF;
      --accent-color: #a06bff;
      /* more variables... */
    }

Adding New Sections

Create a new component in:

src/Component/YourComponent.ts


Add styles in:

src/Style/YourComponent.css


Import & use in App.ts.

📋 Available Scripts
Command	                       Description
npm run dev	           Start development server with HMR
npm run build	       Create optimized production build
npm run preview	       Preview the production build
npm run lint           Run ESLint

🧩 Portfolio Sections

    Navbar – Responsive scroll navigation with logo

    Hero – Gradient intro with animated background

    About – Professional summary

    Skills – Technical skillset

    Experience – Work history timeline

    Projects – Showcasing completed projects

    Contact Form – EmailJS-powered messaging

    Social Links – Connect on various platforms

📧 Contact Form (EmailJS)

The contact form sends messages directly to your email via EmailJS.
Fast, reliable, and requires no backend.

📱 Responsive Design Techniques

    CSS clamp()

    CSS variables

    Mobile-first layout

    Reduced motion optimizations

    Fluid typography

🎬 Animations

    Floating background gradient orbs

    Smooth scrolling

    Hover transitions

    Component fade/slide animations

🌍 Browser Support

    Chrome (latest)

    Edge (latest)

    Firefox (latest)

    Safari (latest)

    Mobile browsers

📄 License

      This project is open-source under the MIT License.

👨‍💻 Author

Varatharajan
GitHub: @Varatharajan1808

⭐ Support the Project

If you like this project, please give it a star ⭐ on GitHub!