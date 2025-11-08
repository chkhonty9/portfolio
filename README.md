# Nouhaila Chkhonty &mdash; Portfolio

Animated single-page portfolio featuring a cinematic hero, glowing project cards, scrolling marquee, and intersection-based reveals to showcase Nouhaila Chkhonty's microservices and DevOps expertise.

## Project Structure

- `index.html` &mdash; semantic markup for every section plus the IntersectionObserver logic that powers reveal animations and nav state.
- `styles.css` &mdash; theming tokens, animated gradients, floating orbs, marquee motion, and responsive layout rules.

## Preview Locally

Open `index.html` in any browser or start a lightweight static server:

```powershell
powershell -Command "Start-Process http://localhost:8000"; python -m http.server 8000
```

Stop the server with <kbd>Ctrl</kbd>+<kbd>C</kbd>.

## Customization Tips

- **Look and feel**: Edit the CSS variables at the top of `styles.css` to retheme colors, radii, and shadows. Adjust keyframes at the bottom for marquee or orb speed.
- **Sections**: Wrap new blocks with `data-reveal` to automatically animate them on scroll. The observer is initialized in `index.html`.
- **Projects**: Duplicate a `.project-card` and change the tag, heading, bullets, and footer link to highlight more work (for example, hackathons or OSS).
- **Contact info**: Keep hero and contact section details in sync so leads see consistent channels.

## Deployment

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, etc.):

1. Push the repository to your remote.
2. Connect the host to the repo root; no build step is required.
3. Add a custom domain or use the default host URL and publish.

Enjoy sharing the refreshed animated portfolio! 
