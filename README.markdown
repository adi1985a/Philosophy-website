# 🧠📜 Philosophia Blog: Exploring Wisdom & Ideas 🇵🇱
_A responsive HTML-based blog website dedicated to philosophy, featuring articles inspired by famous thinkers, author highlights, and social media integration, presented primarily in Polish._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Open%20Sans-4285F4.svg?logo=googlefonts)](https://fonts.google.com/specimen/Open+Sans)
[![Fontello](https://img.shields.io/badge/Icons-Fontello-1F77B4.svg)]() <!-- Generic icon badge for Fontello -->

## 📋 Table of Contents
1.  [Overview](#-overview)
2.  [Key Features](#-key-features)
3.  [Screenshots (Conceptual)](#-screenshots-conceptual)
4.  [Technical Stack & Requirements](#-technical-stack--requirements)
5.  [Local Setup & Viewing](#️-local-setup--viewing)
6.  [Website Usage & Navigation](#️-website-usage--navigation)
7.  [File Structure](#-file-structure)
8.  [Important Notes & Considerations](#-important-notes--considerations)
9.  [Contributing](#-contributing)
10. [License](#-license)
11. [Contact](#-contact)

## 📄 Overview

**Philosophia Blog** is a responsive HTML-based website designed as a platform for sharing and exploring philosophical ideas. The site features articles inspired by renowned philosophers such as Nietzsche, Plato, and Alan Watts. Key sections include a main navigation menu, highlights of influential authors/philosophers, a list of the latest blog posts, and a contact area. The visual design is clean and modern, achieved through custom CSS (`main.css`), Fontello icons for social media links, and the "Open Sans" Google Font for typography. While the HTML `lang` attribute is set to "pl" (Polish), some content elements might be mixed or placeholder. The site includes `js/main.js` for potential interactivity.

## ✨ Key Features

*   🧭 **Responsive Navigation Menu**:
    *   A top navigation bar with links to key sections: "Strona Główna" (Home), "Pierwszy raz na stronie?" (First Time Here?), "Dlaczego filozofia?" (Why Philosophy?), "O nas" (About Us), and "Kontakt" (Contact).
    *   Designed to be responsive for various screen sizes.
*   👨‍🏫 **Author/Philosopher Highlights**:
    *   A section dedicated to showcasing influential philosophers (e.g., Kant, Emerson, Nietzsche, Plato, Watts).
    *   Displays images and names of these thinkers, with clickable links (currently placeholders) intended to lead to more information or related articles.
*   📰 **Latest Posts Section**:
    *   Presents a curated list of recent blog articles.
    *   Each post preview typically includes an image, a title, and a brief summary or excerpt.
    *   Mentions that new posts are updated on Tuesdays and Fridays, suggesting a content schedule.
*   📧 **Contact Section**:
    *   Provides a way for users to get in touch, likely for discussions, collaborations, or inquiries, featuring an "Nawiąż współpracę" (Establish Cooperation) button or link.
*   📱 **Social Media Integration**:
    *   Includes links to social media profiles: Facebook, YouTube, Twitter, and Google+ (note: Google+ is defunct, link should be updated or removed).
    *   Uses Fontello icons for visually distinct social media links.
*   🔍 **SEO & Meta Information**:
    *   Includes essential meta tags for viewport configuration, a site description, and a theme color to enhance search engine visibility and browser integration.
*   🎨 **Custom Styling & Typography**:
    *   Styled with a dedicated stylesheet (`main.css`).
    *   Utilizes Fontello icons (`css/fontello.css` and associated font files).
    *   Employs the "Open Sans" Google Font for consistent and readable typography.
*   🇵🇱 **Polish Language Focus**: The primary language for UI text and content is Polish (`lang="pl"`).

## 🖼️ Screenshots (Conceptual)

**Coming soon!**

_This section would ideally show screenshots of: the Philosophia Blog homepage, the navigation menu, the author highlights section, examples of latest post previews, the contact section, and social media links._

## 🛠️ Technical Stack & Requirements

### Core Technologies:
*   **Structure**: HTML5
*   **Styling**: CSS3 (`main.css`, `css/fontello.css`)
*   **Interactivity (Potential)**: JavaScript (ES6+) (`js/main.js`)
*   **Fonts**: Google Fonts (Open Sans)
*   **Icons**: Fontello (icon font)

### Requirements:
*   **Web Browser**: Any modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
*   **Internet Connection**: Required to load Google Fonts (Open Sans). Fontello icons also rely on linked font files.
*   **Local Assets**: All specified CSS, JavaScript, image, and Fontello font files must be present in the correct locations relative to `index.html`.
    *   `main.css` (root directory or linked path)
    *   `css/fontello.css` (in `css/` subfolder)
    *   Fontello font files (e.g., `.eot`, `.svg`, `.ttf`, `.woff`, `.woff2`) must be in the `css/font/` (or similar, as configured by Fontello) directory relative to `fontello.css`.
    *   `js/main.js` (in `js/` subfolder)
    *   `img/` directory containing all images for authors and posts (e.g., `alan-watts.jpg`, `nietzsche.jpg`, `platon.jpg`).

## ⚙️ Local Setup & Viewing

1.  **Clone or Download the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
    *(Replace `<repository-url>` and `<repository-directory>` with your specific details, or simply download the files into a local folder).*

2.  **Ensure Asset Placement**:
    *   Verify that `main.css` is correctly linked in `index.html`.
    *   Confirm that the `css/` subfolder exists and contains `fontello.css` and its associated font files (e.g., in `css/font/`).
    *   Ensure the `js/` subfolder exists and contains `main.js`.
    *   Make sure the `img/` subfolder exists and contains all author and post images (e.g., `alan-watts.jpg`). Check that image paths in the HTML are correct.

3.  **Open in Browser or Host Locally**:
    *   **Directly in Browser**: You can usually open `index.html` directly in your web browser (File > Open File).
    *   **Using a Simple HTTP Server (Recommended for consistent behavior, especially if `js/main.js` involves fetching local resources or has complex pathing)**:
        If you have Python installed, navigate to the project's root directory in your terminal and run:
        ```bash
        python -m http.server 8000
        ```
        Then, open your web browser and go to `http://localhost:8000`.
    *   Alternatively, use any other local web server solution (e.g., Live Server extension in VS Code).

## 💡 Website Usage & Navigation

1.  Open `index.html` in your web browser (ensure an internet connection for Google Fonts).
2.  **Interface**:
    *   **Navigation Menu**: Click links like "Strona Główna," "Dlaczego filozofia?," "O nas," or "Kontakt" to navigate to different (potentially placeholder or section-linked) parts of the site.
    *   **Author Highlights**: View images and names of featured philosophers. Clicking these is intended to lead to more information (links are currently placeholders).
    *   **Latest Posts**: Read summaries of recent articles, each with an image. These are static examples; new posts are announced as appearing on Tuesdays and Fridays.
    *   **Contact Section**: Find information for contacting the author, including an "Nawiąż współpracę" (Establish Cooperation) button (likely a `mailto:` link or placeholder for a contact form).
    *   **Social Media Links**: Click icons to visit (placeholder) Facebook, YouTube, Twitter, and Google+ profiles.
3.  **Actions**:
    *   Browse the statically presented "latest posts."
    *   Attempt to use the contact section (functionality depends on whether it's a simple `mailto:` link or a placeholder for a form requiring backend setup).
    *   Try the social media links (will lead to placeholder URLs unless updated).
    *   Any further interactivity (e.g., dynamic content loading, animations beyond CSS) would depend on the implementation within `js/main.js`.

## 🗂️ File Structure

The project is expected to have the following basic file structure:

*   `index.html`: The main HTML file for the homepage, containing all sections.
*   `main.css`: The primary custom CSS file for styling.
*   `css/` (subfolder):
    *   `fontello.css`: CSS styles for Fontello icons.
    *   `font/` (sub-subfolder, or similar): Contains Fontello font files.
*   `js/` (subfolder):
    *   `main.js`: JavaScript file for any client-side interactivity.
*   `img/` (subfolder): Contains all images used for authors, posts, and potentially other site elements.
*   `README.md`: This documentation file.

## 📝 Important Notes & Considerations

*   **Language**: The site's primary content and UI text are in Polish (`lang="pl"`). The description mentions some English content for accessibility, which might refer to code comments or alternative text.
*   **`js/main.js` Functionality**: The specific interactive features provided by `js/main.js` (e.g., for navigation, animations, or dynamic content loading for author/post links) are assumed but not detailed. This file needs to be implemented for such features.
*   **Placeholder Links**: Many links (author highlights, "Read more" for posts, social media, contact button if not a `mailto:`) are currently placeholders and would need to be updated with actual URLs or linked to implemented JavaScript functionality/backend processing.
*   **Image Paths**: Correct paths to all images in the `img/` folder are crucial.
*   **Fontello Setup**: Proper integration of Fontello requires `fontello.css` and all its associated font files to be correctly placed and linked.
*   **Static Nature**: This is a static HTML/CSS/JS website. Dynamic features like user comments, a working contact form that sends emails, or automatic updates of "Latest Posts" would require a backend system (e.g., a CMS, or a static site generator with a content pipeline).
*   **Google Fonts Dependency**: Relies on an internet connection for "Open Sans." Consider local fallbacks.
*   **Preloading**: The note about preloading `main.css` and `fontello.css` is good for performance, but ensure the paths used in the `<link rel="preload">` tags are correct.

## 🤝 Contributing

Contributions to **Philosophia Blog** are highly encouraged! If you have ideas for:

*   Writing actual philosophical articles for the "Latest Posts" section.
*   Implementing the placeholder pages or dynamic content loading for author/post details.
*   Developing the `js/main.js` for enhanced interactivity.
*   Improving CSS styling, responsiveness, or adding animations.
*   Updating or correcting social media links (especially the defunct Google+).
*   Setting up a simple backend for the contact form.

1.  Fork the repository.
2.  Create a new branch for your feature or content (`git checkout -b feature/NewArticleNietzsche` or `content/ImplementAboutPage`).
3.  Make your changes (HTML, CSS, JS, text content).
4.  Commit your changes (`git commit -m 'Content: Add new article on Nietzsche'`).
5.  Push to the branch (`git push origin content/ImplementAboutPage`).
6.  Open a Pull Request.

## 📃 License

This project is licensed under the **MIT License**.
(If you have a `LICENSE` file in your repository, refer to it: `See the LICENSE file for details.`)

## 📧 Contact

Project developed by **Adrian Lesniak**.
For questions, feedback, or to discuss contributions, please open an issue on the GitHub repository or contact the repository owner.

---
✨ _Dzielenie się mądrością i ideami filozoficznymi dla ciekawych umysłów._
_(Sharing philosophical wisdom and ideas for curious minds.)_
