# Olme Marin Portfolio

Professional developer portfolio built as a responsive static website. It presents experience, services, technical stack, selected projects, and contact channels through a modern UI with animations, bilingual content, and an interactive portfolio carousel.

## Overview

This portfolio is designed for a Software Engineer and Full Stack Developer with experience in backend, frontend, and mobile development. The site focuses on clarity, performance, and a polished presentation of professional work.

## Features

- Responsive single-page layout.
- Hero slider with animated content.
- Bilingual support for English and Spanish.
- Interactive portfolio carousel with drag support.
- Portfolio project modal with role, overview, and stack details.
- Smooth scrolling and section animations using GSAP.
- Mobile navigation menu.
- Contact cards for email, WhatsApp, and LinkedIn.
- Static architecture with no build step required.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- GSAP
- ScrollTrigger
- Font Awesome
- Google Fonts

## Project Structure

```text
.
├── index.html
├── assets
│   ├── css
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js
│   │   ├── main.js
│   │   └── i18n.js
│   ├── lang
│   │   ├── en.json
│   │   └── es.json
│   └── images
│       ├── logos_portfolio
│       └── ...
└── README.md
```

## Getting Started

Because the site loads translation files with `fetch`, run it through a local server instead of opening `index.html` directly from the filesystem.

Using Python:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Using MAMP:

```text
http://localhost/my_portfolio
```

## Content Management

Most visible copy is managed through the translation files:

- `assets/lang/en.json`
- `assets/lang/es.json`

Update these files to change navigation labels, hero text, service descriptions, portfolio project details, contact copy, and footer text.

Portfolio items are defined in `index.html` using `data-title-key`, `data-job-key`, `data-description-key`, and `data-stack-job-key`. These keys map to the translation JSON files.

## Main JavaScript Responsibilities

`assets/js/main.js` handles:

- Preloader behavior.
- Custom cursor.
- Hero slider.
- Scroll animations.
- Mobile menu.
- Portfolio modal.
- Portfolio carousel buttons and drag interaction.

`assets/js/i18n.js` handles:

- Loading language JSON files.
- Updating elements with `data-i18n`.
- Persisting the selected language in `localStorage`.
- Auto-detecting browser language.

## Customization

To customize the portfolio:

1. Replace images in `assets/images`.
2. Update project data in `assets/lang/en.json` and `assets/lang/es.json`.
3. Edit portfolio items in `index.html`.
4. Adjust visual styles in `assets/css/style.css`.
5. Add responsive overrides in `assets/css/responsive.css`.

## Deployment

This project can be deployed on any static hosting provider, including:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Traditional shared hosting

No build command is required.

## Author

**Olme Marin**  
Software Engineer & Full Stack Developer

LinkedIn: [olme-marin-sanchez-5640bb57](https://linkedin.com/in/olme-marin-sanchez-5640bb57)

## License

This project is intended as a personal portfolio. Add a license file if you plan to make it open source.
