## About & Navbar Enhancement PRD

### 1. Overview
- Update `src/pages/about.jsx` to present a polished personal bio section.
- Layout places textual info (name, title, description) on the left and a representative image on the right.

### 2. Goals & Success Metrics
- Convey professional identity clearly via structured text.
- Improve visual appeal through balanced two-column layout.
- Responsive design: stack vertically on small screens without breaking spacing.

### 3. Functional Requirements
1. Left column:
   - Display full name prominently.
   - Show profession/title subtitle.
   - Include a descriptive paragraph about background/skills (min 2 sentences).
2. Right column:
   - Render an image (use `public/logo.jpg` placeholder for now) with rounded corners and subtle shadow.
   - Portrait framing: allow a taller aspect ratio (e.g., 2:3) so the görsel “boydan” görünür; ensure object-fit maintains clean cropping and ayak/bacak bölgeleri görünür.
   - On small screens the image must stay within container width/height (no taşma); use responsive sizing + `object-cover`/`object-center` as needed.
3. Container:
   - Centered content with max width ~1200px, generous padding, light background.
   - Enclose inside a full-height wrapper (`min-h-screen`) so the section fills the viewport and detaches from navbar.
   - Use flexbox with gap between columns; align center vertically and horizontally, with content centered within the viewport.
   - Responsive break at ~768px: columns stack (text first, image below) with centered alignment.
   - On small screens, the card should stretch close to full width (`w-full`, tight horizontal padding) to feel immersive and “ekrana yayılmış”.
4. Motion:
   - The about card should fade-in (opacity/translate) on page load for a subtle entrance animation without hindering accessibility.
   - Animation duration should be snappy (~0.6s) to feel responsive while remaining smooth.

### 4. Non-Functional Requirements
- Keep file modular and under 500 LOC.
- Use existing styling approach (inline styles or CSS modules) consistent with project.
- Accessible markup: use semantic headings, descriptive `alt` text.
- Ensure mobile-first responsiveness across the page (typography, spacing, image sizing) so the entire project feels consistent on handheld devices.

### 5. Implementation Phases
1. **Phase 1 – Layout & Content**
   - Implement flex container with two sections.
   - Add structured bio text and placeholder copy.
2. **Phase 2 – Visual Polish**
   - Add image styling (border radius, shadow).
   - Add background, expanded padding, responsive media query or inline logic, and the fade-in animation tuned to ~0.6s duration.
3. **Phase 3 – Responsiveness Verification**
   - Ensure layout stacks on small screens via CSS.
   - Manual check in dev tools (documented in README if additional steps needed).

### 6. Navbar Enhancements
1. Clean up `src/components/navbar/index.jsx` so spacing and branding feel balanced with the new hero/about section.
2. Requirements:
   - Keep navbar fixed, translucent, and blurred but ensure consistent padding and max-width (align with about section width).
   - Increase navigation typography for better readability, ensuring both desktop and mobile link text feels bold and legible.
   - Normalize logo/avatar block to avoid duplicate comments, ensure image uses optimized classes and accessible `alt`.
   - Logo/avatar should appear only on small screens (e.g., hidden `lg:` breakpoint) so large screens keep focus on links.
   - Navigation links should have clear active states, smooth hover transitions, and better spacing on both desktop and mobile.
   - Mobile menu button should be prominent and accessible (focus styles), even if functionality remains placeholder.
   - On small screens, stack logo + text + menu vertically (button and links under the brand block) for better spacing; ensure alignment and spacing remain cohesive. The textual “Menü” label is optional—icon-only trigger is acceptable if accessible (aria attributes).
   - Mobile menu should be collapsible: tapping the menu button toggles the visibility of the link list with a smooth transition combining subtle slide and rotation for a refined “azik” açılıp kapanma hissi.
   - When the user navigates to another route, the mobile menu must auto-close to avoid lingering open states.

### 7. Contact Page Requirements
- Update `src/pages/contact.jsx` so all contact content (links + map) lives inside a single cohesive card/container.
- **Contact Links:**
  - Include GitHub, LinkedIn, email, and phone.
  - Display official brand icons (SVG or emoji) next to each item for visual clarity.
  - Items must remain clickable (`mailto:`, `tel:`, external URLs) with hover states.
- **Map & Address:**
  - Same container should include the address text and embedded map (Google Maps iframe) on the right for large screens, stacking underneath on mobile.
- **Layout & Style:**
  - Use responsive flex/grid to align link list and map side-by-side on desktop (with map occupying more width), but stack vertically on small screens.
  - Add a subtle vertical divider between contact links and map on large screens.
  - Ensure the container has generous padding, rounded corners, shadows consistent with the rest of the site.
  - Emphasize large, legible typography (bigger headings, bold body text) so the section fills space comfortably on all breakpoints.
  - Keep file under 500 LOC and continue using Tailwind/utility classes.
3. Keep file under 500 LOC and adhere to same Tailwind styling approach.


