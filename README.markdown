# 🧠📜 Philosophia Blog: Exploring Wisdom & Ideas
_A modern, responsive HTML/CSS/JS blog dedicated to philosophy, featuring articles inspired by famous thinkers, author highlights, and social media integration._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Open%20Sans-4285F4.svg?logo=googlefonts)](https://fonts.google.com/specimen/Open+Sans)
[![Fontello](https://img.shields.io/badge/Icons-Fontello-1F77B4.svg)]() <!-- Fontello icon badge -->

## 📋 Table of Contents
1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Screenshots](#screenshots)
4. [Technical Stack & Requirements](#technical-stack--requirements)
5. [Local Setup & Viewing](#local-setup--viewing)
6. [Website Usage & Navigation](#website-usage--navigation)
7. [File Structure](#file-structure)
8. [Notes & Considerations](#notes--considerations)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

## 🧠 Overview

**Philosophia Blog** is a responsive, visually appealing website for sharing and exploring philosophical ideas. The site features articles inspired by renowned philosophers such as Nietzsche, Plato, Alan Watts, and more. The homepage includes a navigation menu, author highlights, a list of the latest blog posts, and a contact section. The design is clean and modern, using custom CSS, Fontello icons, and the "Open Sans" Google Font. The site is fully in English.

<br><br>
<p align="center">
  <img src="screenshots/1.gif" width="85%">
</p>


## ✨ Key Features

* 🧭 **Responsive Navigation Menu**: Top navigation bar with links to Home, First Time Here?, Why Philosophy?, About Author, and Contact. Fully responsive for all devices.
* 👨‍🏫 **Author/Philosopher Highlights**: Showcases influential philosophers (e.g., Kant, Emerson, Nietzsche, Plato, Watts) with images and names. Clickable (currently placeholder) links for more info.
* 📰 **Latest Posts Section**: Displays the three most recent articles, each with an image, title, and summary. New posts are announced on Tuesdays and Fridays.
* 📧 **Contact Section**: Allows users to contact the author for discussion, suggestions, or business cooperation.
* 📱 **Social Media Integration**: Fontello icons for Facebook, YouTube, Twitter, and Google+ (placeholder).
* 🎨 **Modern Styling & Typography**: Custom CSS (`main.css`), Fontello icons, and "Open Sans" font for a clean, readable look.
* ⚡ **Interactivity**: Smooth scrolling for anchor links, lazy loading of images, and expandable text sections (see [js/main.js](js/main.js)).
* 🔍 **SEO & Meta**: Essential meta tags for viewport, description, and theme color.

## 🖼️ Screenshots

_Sample views of the homepage, navigation, author highlights, latest posts, and contact section._

<p align="center">
  <img src="sreenshots/1.jpg" width="250"/>
  <img src="sreenshots/2.jpg" width="250"/>
  <img src="sreenshots/3.jpg" width="250"/>
  <img src="sreenshots/4.jpg" width="250"/>
  <img src="sreenshots/5.jpg" width="250"/>
  <img src="sreenshots/6.jpg" width="250"/>
</p>

## 🛠️ Technical Stack & Requirements

**Core Technologies:**
- **HTML5** for structure
- **CSS3** (`main.css`, `css/fontello.css`) for styling
- **JavaScript (ES6+)** (`js/main.js`) for interactivity
- **Google Fonts** (Open Sans)
- **Fontello** (icon font)

**Requirements:**
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection for Google Fonts
- All assets (CSS, JS, images, Fontello fonts) in correct locations

## ⚙️ Local Setup & Viewing

1. **Clone or Download the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. **Check Asset Placement:**
   - `main.css` in root
   - `css/fontello.css` and `css/font/` with font files
   - `js/main.js` in `js/`
   - `img/` with all images (authors, posts, etc.)
3. **Open in Browser or Host Locally:**
   - Open `index.html` directly in your browser
   - Or run a local server (recommended):
     ```bash
     python -m http.server 8000
     ```
     Then visit [http://localhost:8000](http://localhost:8000)

## 🖱️ Website Usage & Navigation

- **Navigation Menu:** Use the top menu to access all main sections.
- **Author Highlights:** Click on philosopher images for more info (links are placeholders).
- **Latest Posts:** Browse summaries of recent articles with images.
- **Contact:** Use the "Establish Cooperation" button to reach out (currently a placeholder).
- **Social Media:** Fontello icons for Facebook, YouTube, Twitter, and Google+ (no real links yet).
- **Interactivity:**
  - Smooth scroll for anchor links
  - Lazy loading of images (improves performance)
  - Expandable text sections ("Read More/Less")

## 🗂️ File Structure

```
Philosophy_website_HTML/
├── index.html
├── main.css
├── css/
│   ├── fontello.css
│   └── font/
│       ├── fontello.eot/svg/ttf/woff
├── js/
│   └── main.js
├── img/
│   ├── alan-watts.jpg, nietzsche.jpg, platon.jpg, etc.
├── sreenshots/
│   ├── 1.jpg, 2.jpg, ...
└── README.markdown
```

## 💡 Notes & Considerations

- The site is fully in English.
- All social media links are placeholders (icons only, no URLs).
- Fontello icons used: `icon-facebook`, `icon-youtube`, `icon-twitter`, `icon-gplus`.
- Images for authors and posts are in `img/` (e.g., `alan-watts.jpg`, `nietzsche.jpg`).
- `js/main.js` provides smooth scrolling, lazy loading, and expandable sections.
- The site is static (no backend, no dynamic comments or contact form).
- Google Fonts required for "Open Sans".
- For best results, use a local server for testing.

## 🤝 Contributing

Contributions are welcome! Ideas for new articles, improved interactivity, or design tweaks are appreciated.
1. Fork the repo
2. Create a new branch
3. Make your changes
4. Commit and push
5. Open a Pull Request

## 📃 License

This project is licensed under the **MIT License**. See the LICENSE file for details.

## 📧 Contact

Project by **Adrian Lesniak**. For questions or feedback, open an issue or contact the repository owner.


> _Sharing philosophical wisdom and ideas for curious minds._
