---
name: Matheus Tecchio
description: Restrained developer portfolio
colors:
  canvas: "#101013"
  surface: "#17161c"
  text: "#efedf1"
  muted: "#a09ba8"
  accent: "#c4acf1"
  border: "#302d36"
  button-bg: "#292136"
  button-border: "#59456e"
  button-text: "#e1d1fb"
  button-hover: "#362946"
  status-bg: "#251e30"
  tag-text: "#b5adbf"
typography:
  display:
    fontFamily: "'JetBrains Mono Variable', monospace"
    fontSize: "clamp(36px, 4.25vw, 60px)"
    fontWeight: 500
    lineHeight: 1.23
    letterSpacing: "-.04em"
  headline:
    fontFamily: "'JetBrains Mono Variable', monospace"
    fontSize: "30px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-.04em"
  body:
    fontFamily: "'JetBrains Mono Variable', monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "'JetBrains Mono Variable', monospace"
    fontSize: "12px"
    fontWeight: 400
rounded:
  tag: "3px"
  button: "5px"
  cover: "7px"
  source-note: "8px"
spacing:
  link-gap: "24px"
  grid-gap: "32px"
  detail-gap: "64px"
components:
  button:
    backgroundColor: "{colors.button-bg}"
    textColor: "{colors.button-text}"
    rounded: "{rounded.button}"
    padding: "13px 18px"
  button-hover:
    backgroundColor: "{colors.button-hover}"
    textColor: "{colors.text}"
  source-note:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.source-note}"
  tag:
    textColor: "{colors.tag-text}"
    rounded: "{rounded.tag}"
    padding: "3px 8px"
  status:
    backgroundColor: "{colors.status-bg}"
    textColor: "{colors.accent}"
    rounded: "{rounded.tag}"
    padding: "3px 8px"
---

# Design System: Matheus Tecchio

## Overview

**Creative North Star: "Restrained developer portfolio"**

A restrained developer portfolio with a dark canvas, lavender accents and JetBrains Mono throughout. The user-selected Sunny Patel reference informs the quiet navigation and generous separation; typography, real code and project evidence carry the personality.

**Key Characteristics:**
- Monospace typography at every scale.
- Flat charcoal surfaces with fine borders.
- Lavender emphasis and native links.
- Authored typographic project covers.

## Colors

A violet-tinted neutral foundation supports one lavender accent. The frontmatter records reusable colors extracted from `src/styles/global.css`; it does not introduce a new palette.

### Primary

- **Lavender ink** (`accent`): emphasized headline fragments, project links, navigation marker and keyboard focus.
- **Quiet violet** (`button-bg`, `button-border`, `button-text`, `button-hover`, `status-bg`): compact actions and status labels.

### Neutral

- **Charcoal canvas** (`canvas`): page background.
- **Violet charcoal** (`surface`): source excerpt and mobile dropdown.
- **Warm white** (`text`): headings and primary text.
- **Soft gray violet** (`muted`, `tag-text`): descriptive text and compact metadata.
- **Dark seam** (`border`): fine dividers and container outlines.

## Typography

JetBrains Mono Variable is self-hosted and used throughout, with a monospace fallback. Medium headings contrast with regular descriptive copy; tight heading tracking keeps large monospace text cohesive.

The frontmatter display is the desktop home heading. The projects introduction uses a larger responsive display (`clamp(40px, 5vw, 68px)`). Section headings use the headline role. Project titles range from (19px) previews to (25px) detail headings. Descriptive project copy uses (12px) with spacious line-height (1.95); metadata ranges from (9px) to (11px). Home introduction measure is (58ch), and projects introduction measure is (64ch).

At widths below (1000px), the home heading is (42px). Below (700px), it uses `clamp(29px, 7.8vw, 48px)`, body text becomes (13px), section headings become (25px), and the projects introduction stays (42px).

## Layout

A centered container caps at (1120px), with total horizontal subtraction of (96px), then (64px) below (1000px), then (40px) below (700px). Wide desktop gaps and section padding separate content rather than wrapping every group in a panel.

Home uses an asymmetric two-column hero, a two-column featured grid and split about and closing sections. Projects uses two-column visual and description rows. These become single-column stacks below (700px). Preserve the short home previews and detailed project route as route composition, rather than requiring every future surface to copy either layout.

## Elevation & Depth

The interface has no box shadows. Tonal surfaces and single-pixel borders establish depth. Project artwork uses its own muted background inks; these are artwork-specific colors, not additional interface themes. There are no gradients or glows.

## Shapes

Corners are gently curved: source excerpt, project covers, buttons and small labels use the extracted radius roles. Dividers are straight and thin. Technology tags use compact outlined rectangles; status labels use a filled violet background. Do not convert these labels into rounded pills.

## Components

### Buttons and links

Primary link-buttons use a fine violet border, compact label and arrow, with the frontmatter button padding. Hover lightens the surface and border; activation scales to (.98). On mobile, padding becomes (12px 14px). Text links remain native anchors. Project Source and Docs links use lavender, then warm white and underline on hover.

Keyboard focus uses a lavender outline (2px), offset (6px), with a small corner radius (2px). The skip link becomes visible on focus.

### Navigation

The desktop header is quiet, with muted labels and a lavender dot on the current route. Below (700px), native details/summary exposes a menu. The menu is an anchored dropdown overlay inside the relatively positioned header, placed at (68px) from its top with a surface fill, border and curved corners. It does not expand document flow. The plus rotates on open; the summary has a minimum height of (44px).

### Tags and status

Technology tags are static, fine-bordered labels with the tag tokens. Status labels are static violet fills. They are metadata, not controls, and have no invented hover or selected states.

### Source excerpt

A bordered surface with a small header, scrollable monospace code block and footer link. It rests slightly lower on desktop and returns to normal alignment in the mobile stack. Syntax colors remain specific to the excerpt.

### Project covers

Authored typographic artwork carries distinct Gentum, Safe Code and Ticket Report Generator identities. Covers use an aspect ratio of (1.5), becoming (1.55) on mobile, with a restrained border change on linked-cover hover. The real Safe Code demonstration is separate media, with a still image for reduced-motion visitors.

Hero entrance motion is a single short opacity and vertical arrival, enabled only when reduced motion is not requested. Reduced motion disables transitions, animations and smooth scrolling.

On viewports at least (1280px) wide, a decorative lavender character rain fills only the outer gutters, leaving (24px) clear beside the centered content. Canvas masks fade the characters at the top, bottom and horizontal edges. This requested fade is an exception to the no-gradient rule for surfaces. A nearby pointer gently brightens and shifts the glyphs without changing the standard cursor or intercepting input. The effect runs at up to (30fps), pauses while the tab is hidden, and is absent on smaller screens and for reduced-motion visitors.

## Do's and Don'ts

### Do:
- **Do** retain JetBrains Mono and the standard cursor.
- **Do** use lavender for meaningful emphasis and interactive links.
- **Do** keep keyboard focus visible and respect reduced motion.
- **Do** preserve the distinct editorial project covers.

### Don't:
- **Don't** introduce gradients, glow or decorative shadows.
- **Don't** turn project covers into invented product screenshots.
- **Don't** replace the selected visual world with a new identity.
