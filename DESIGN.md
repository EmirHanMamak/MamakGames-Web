# Design System Strategy: Kinetic Energy & Immersive Depth

## 1. Overview & Creative North Star: "The Pulse of Play"
This design system is engineered to capture the raw, electric momentum of a premier game studio. We are moving away from the static, "flat" web and toward a cinematic, immersive interface that feels alive.

**Creative North Star: Kinetic Energy**
The interface should never feel truly still. Through the use of vibrant, "living" reds, high-contrast cyan accents, and deep, charcoal foundations, we create a sense of infinite depth. We break the "template" look by utilizing intentional asymmetry—placing oversized display type against tight, functional UI elements—and layering surfaces like stacked lenses. The goal is to make the user feel as though they are interacting with a high-end gaming HUD, not a corporate website.

---

## 2. Colors & Surface Philosophy
The palette is dominated by a "living" red that pulses against a dark, charcoal abyss. We leverage a high-contrast relationship between deep darks and neon highlights to guide the eye.

### Color Tokens
*   **Primary (`#FF1F1F` / `primary_dim`):** The heartbeat. Use for critical actions and brand moments.
*   **Secondary (`#FF4D4D` / `secondary`):** The glow. Used for hover states and supporting brand elements.
*   **Tertiary/Accent (`#00F0FF` / `tertiary_container`):** The "Energy Pop." Use sparingly for "New" tags, active progress bars, or "Online" status indicators.
*   **Neutral Backgrounds (`#0E0E0E` / `surface`):** A sophisticated, deep charcoal that provides more warmth and depth than pure black.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts or subtle tonal transitions.
*   *Implementation:* Instead of a border, place a `surface_container_low` card on a `surface` background. The subtle 2-4% shift in lightness is all the eye needs to perceive a boundary.

### Glass & Gradient Soul
To avoid a "flat" feel, use **Glassmorphism** for floating elements (e.g., navigation bars or tooltips).
*   **Recipe:** `surface_variant` at 60% opacity + `backdrop-blur: 20px`.
*   **Signature Textures:** Apply a linear gradient from `primary` to `primary_container` (at a 135° angle) on main CTAs to give them a tactile, "light-emitting" quality.

---

## 3. Typography: Editorial Impact
We use **Plus Jakarta Sans** (the evolution of Poppins' geometry) to maintain a modern, friendly, yet professional editorial feel. The scale is extreme, creating a hierarchy that feels like a game title screen.

*   **Display (Lg/Md):** Use for hero headers. Kerning should be tightened by -2% to give a "compacted" professional look.
*   **Headline (Lg/Md):** These are your "Feature" titles. Use `headline-lg` for section headers, ensuring they have ample breathing room above and below.
*   **Body (Lg/Md):** Used for descriptions. Always ensure a high-contrast `on_surface` (White) to ensure readability against the charcoal backgrounds.
*   **Labels:** Use `label-md` for metadata (e.g., "v1.0.4" or "Multiplayer"). These should often be uppercase with +5% letter spacing to feel like technical HUD data.

---

## 4. Elevation & Depth: Tonal Layering
We do not use structural lines. We use physics.

*   **The Layering Principle:** Stacking surfaces creates hierarchy.
    *   *Base:* `surface` (The floor)
    *   *Section:* `surface_container_low` (The raised platform)
    *   *Card:* `surface_container_high` (The interactive object)
*   **Ambient Shadows:** For floating modals, use an extra-diffused shadow.
    *   *Value:* `0px 24px 48px rgba(0, 0, 0, 0.5)`. The shadow should feel like a soft occlusion, not a harsh drop-shadow.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **15% opacity**. It should be a hint of a line, never a statement.

---

## 5. Components

### Buttons: The Power Source
*   **Primary:** High-energy `primary` background. Use `ROUND_EIGHT` (1rem) corner radius. On hover, apply a `secondary` glow (box-shadow: 0 0 15px #FF4D4D).
*   **Secondary:** Ghost style. No fill, `outline_variant` border (20% opacity), with `primary` text.
*   **Tertiary:** Text-only with a cyan (`tertiary`) underline that expands on hover.

### Cards & Lists: The No-Divider Rule
*   **Cards:** Forbid divider lines. Use `surface_container_highest` for the header area and `surface_container` for the body to create a natural visual break.
*   **Lists:** Separate items with vertical white space (use the `md` 1.5rem spacing) rather than lines.

### Chips: HUD Indicators
*   **Status Chips:** Use `tertiary_container` (Cyan) for active states. The text should be `on_tertiary_fixed` for maximum legibility.
*   **Corner Radius:** Always `full` (pill-shaped) to contrast against the more structured `ROUND_EIGHT` of the cards.

### Input Fields: Immersive Focus
*   **Default:** `surface_container_highest` background, no border.
*   **Focus:** Transition the background to `surface_bright` and add a 1px `primary` (Red) bottom border only. This mimics a "loading" or "inputting" state in a game engine.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use intentional asymmetry. Place a large `display-lg` headline on the left with a small `body-md` description offset to the right.
*   **DO** use the cyan (`tertiary`) accent for "interactive hints" (e.g., a small glowing dot next to a notification).
*   **DO** embrace the dark. Ensure the charcoal `surface` remains the dominant color to let the "Living Red" truly pop.

### Don’t:
*   **DON'T** use pure #000000 black. It kills the depth. Use the `surface` charcoal tokens.
*   **DON'T** use 100% opaque borders. They create "visual noise" that breaks the immersive feel.
*   **DON'T** crowd the UI. High-energy design requires "air" (negative space) to prevent it from becoming chaotic. Follow the `xl` (3rem) spacing for major section breaks.