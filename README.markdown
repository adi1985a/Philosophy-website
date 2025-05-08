# Philosophia Blog

## Overview
Philosophia Blog is a responsive HTML website dedicated to philosophy, featuring articles inspired by famous philosophers like Nietzsche, Plato, and Watts. It includes a navigation menu, author highlights, latest posts, and a contact section. Built with custom CSS, Fontello icons, and Google Fonts for a clean, modern design.

## Features
- **Responsive Navigation**: Menu with links to Home, First Time, Why Philosophy, About, and Contact pages.
- **Author Highlights**: Displays images and names of philosophers (e.g., Kant, Emerson) with clickable links.
- **Latest Posts**: Showcases recent articles with images and summaries, updated on Tuesdays and Fridays.
- **Contact Section**: Offers email contact for discussions or partnerships.
- **Social Media**: Links to Facebook, YouTube, Twitter, and Google+ (placeholders).
- **SEO**: Meta tags for description and theme color to enhance visibility.
- **Styling**: Uses `main.css`, Fontello icons (`fontello.css`), and Open Sans font.

## Requirements
- Web browser (e.g., Chrome, Firefox, Safari)
- Internet connection for external resources:
  - Google Fonts (`Open Sans`)
- Local assets:
  - `main.css`: Main stylesheet
  - `css/fontello.css`: Fontello icon styles
  - `js/main.js`: JavaScript for interactivity
  - `img/`: Images for authors and posts (e.g., `alan-watts.jpg`, `nietzsche.jpg`)

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Ensure the required assets are in place:
   - `main.css`: Stylesheet for layout and design.
   - `css/fontello.css`: Fontello icon styles.
   - `js/main.js`: JavaScript for interactivity (assumed).
   - `img/`: Images for authors and posts.
3. Host the site on a web server (e.g., Apache, Nginx) or open `index.html` directly:
   ```bash
   python -m http.server 8000
   ```
4. Access the site at `http://localhost:8000`.

## Usage
1. Open the website in a browser to view the homepage.
2. **Interface**:
   - **Navigation**: Click links to explore Home, Why Philosophy, About, or Contact pages.
   - **Author Highlights**: View images and names of featured philosophers (links are placeholders).
   - **Latest Posts**: Read summaries of recent articles with images.
   - **Contact**: Click the "Establish Cooperation" button to contact the author (placeholder).
   - **Social Media**: Access social media links (placeholders).
3. **Actions**:
   - Browse new posts, announced on Tuesdays and Fridays.
   - Use the contact section to reach out via email (requires backend setup).
   - Follow social media links for updates (requires real URLs).

## File Structure
- `index.html`: Homepage with navigation, author highlights, posts, and footer.
- `main.css`: Custom styles for layout and design.
- `css/fontello.css`: Fontello icon styles for social media.
- `js/main.js`: JavaScript for interactivity (assumed).
- `img/`: Images for authors and posts (e.g., `alan-watts.jpg`, `platon.jpg`).
- `README.md`: This file, providing project documentation.

## Notes
- The site uses Polish (`lang="pl"`) with some English content for accessibility.
- The `js/main.js` file is assumed to handle interactivity (e.g., navigation or animations).
- Social media and contact links are placeholders; replace with real URLs or add backend functionality.
- Ensure images in `img/` match the referenced filenames to avoid broken links.
- The site is static; dynamic features (e.g., contact form, post updates) require a backend.
- Preloading (`main.css`, `fontello.css`) improves performance but assumes correct paths.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, open an issue on GitHub or contact the repository owner.