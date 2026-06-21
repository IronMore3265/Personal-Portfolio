---
name: Precision & Pulse
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5f5b'
  on-secondary: '#ffffff'
  secondary-container: '#e3e3de'
  on-secondary-container: '#646561'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b151c'
  on-tertiary-container: '#9d7b84'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c7c7c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#e4bcc6'
  on-tertiary-fixed: '#2b151c'
  on-tertiary-fixed-variant: '#5b3f47'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 160px
---

## Brand & Style

This design system is engineered for a technical portfolio that balances data-driven rigor with creative sophistication. The brand personality is **authoritative, analytical, and modern**, aiming to evoke a sense of high-level engineering competence through an editorial lens.

The visual style is a hybrid of **Minimalism** and **High-Contrast Boldness**. It utilizes vast amounts of "white space" (rendered in soft cream) to allow complex data and engineering concepts to breathe. The system leverages high-contrast dark blocks to signify transitions and depth, while subtle decorative elements like dot grids and thin diagonal strokes add a layer of technical craftsmanship without cluttering the interface. A soft, ephemeral gradient glow provides a humanistic, "pulsing" counterpoint to the rigid, structured layout.

## Colors

The palette is rooted in an editorial foundation. The primary surface is a light off-white/cream, which reduces the harshness of pure white while maintaining a premium feel. 

- **Primary (Deep Black):** Used for headlines, high-impact background blocks, and primary actions.
- **Secondary (Cream):** The base canvas for the entire experience.
- **Accent (Multicolor Gradient):** A soft blend of pink, yellow, and blue. This is not used for functional elements like buttons but as a "background pulse" behind hero content or as a subtle hover state glow.
- **Functional Neutrals:** Used for secondary text, thin borders, and decorative technical accents (dots/lines).

## Typography

The typography strategy emphasizes hierarchy and clean geometric form. **Montserrat** is used for display and headline roles, providing a bold, authoritative, and modern presence that reinforces the professional nature of the brand.

For body copy, **Inter** provides a highly legible, neutral, and professional sans-serif foundation. Its clean letterforms ensure clarity for long-form technical descriptions while allowing the more distinct headline and label fonts to stand out. **Geist** is used as a label font for metadata, numbers, and technical annotations, offering a clean, modern aesthetic for micro-copy. Headlines should utilize tight letter-spacing to appear as cohesive "blocks" of text.

## Layout & Spacing

The design system employs a **12-column fixed-width grid** for desktop (max-width 1440px) and a **4-column fluid grid** for mobile. 

- **The Rhythm:** Spacing follows a strict 8px base unit. Section gaps are intentionally large (160px) to create an editorial "gallery" feel.
- **Contrast Blocks:** High-contrast layout transitions occur by swapping the background from Cream to Deep Black. These blocks should span the full viewport width to break the vertical flow.
- **Technical Accents:** Dotted grid overlays should be placed in the margins of the layout, never interfering with the legibility of the content but acting as "anchors" for the eye.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **structural depth**. 

- **Tonal Layers:** Depth is created through color blocking. A black card on a cream background provides "instant" elevation without the need for blurs.
- **Low-Contrast Outlines:** Where separation is needed between similar tones, use a 1px solid border (#E0E0E0).
- **The "Pulse" Glow:** The only soft element in the system is the multicolor gradient blob. This sits at the lowest Z-index (below content, above the background) with a heavy Gaussian blur (100px+) to create an atmospheric, non-structural depth.

## Shapes

To reinforce the engineering and analytical theme, the system uses **Sharp (0px)** roundedness for almost all structural elements. Cards, buttons, and image containers should have crisp, 90-degree corners to evoke a sense of precision and "blueprint" accuracy. 

Circular elements are reserved exclusively for icons or "status" indicators to provide a functional contrast against the rigid rectangular grid.

## Components

- **Buttons:** Primary buttons are solid black rectangles with white Montserrat Bold text. Secondary buttons are outlined with a 1px stroke. Hover states involve a slight horizontal shift or the appearance of a minimalist arrow (→).
- **Project Cards:** Large, sharp-edged containers. The image should occupy the top 60%, with a high-contrast text area below using Inter for the description.
- **Experience Rows:** Numbered timeline rows using `label-mono` (Geist) for dates. Each row is separated by a thin 1px horizontal line that spans the container width.
- **Data Accents:** Use thin diagonal lines (45 degrees) and 4x4 dotted grids to fill empty spaces in the layout or to "box in" specific technical metrics.
- **Inputs:** Simple bottom-border only (border-bottom: 1px solid), using `label-mono` for placeholders to maintain the technical feel.