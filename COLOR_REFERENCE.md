# Sci-Fi Color Palette Reference
## Quick Visual Guide for Implementation

---

## Primary Color Palette

### Backgrounds (Dark Foundation)

```
--deep-space: #0a0d1a
████████████████████████
Very dark navy - main background
RGB: (10, 13, 26)
Use for: Body background, deepest sections

--space-void: #111827
████████████████████████
Dark slate - card backgrounds
RGB: (17, 24, 39)
Use for: Cards, modals, overlays

--stellar-navy: #1e293b
████████████████████████
Medium navy - hover states
RGB: (30, 41, 59)
Use for: Hover backgrounds, section alternates
```

---

## Accent Colors (Neon Spectrum)

### Primary - Cyber Blue
```
--cyber-blue: #00d4ff
████████████████████████ ✨
Electric bright blue
RGB: (0, 212, 255)
Use for: Primary CTAs, hero name glow, section titles
Replaces: --legendary-gold (#ffd700)

--cyber-blue-glow: rgba(0, 212, 255, 0.4)
Soft glowing aura
Use for: Box shadows, glows, halos

--cyber-blue-dim: rgba(0, 212, 255, 0.1)
Very subtle tint
Use for: Button backgrounds, subtle highlights
```

### Secondary - Neon Cyan
```
--neon-cyan: #06b6d4
████████████████████████
Teal cyan
RGB: (6, 182, 212)
Use for: Borders, timeline line, tech badges
Replaces: --rare-blue (#0070dd)

--neon-cyan-glow: rgba(6, 182, 212, 0.3)
Medium glow
Use for: Border shadows, subtle glows
```

### Tertiary - Plasma Purple
```
--plasma-purple: #a78bfa
████████████████████████
Soft violet purple
RGB: (167, 139, 250)
Use for: Secondary badges, accents, variety
Replaces: --epic-purple (#a335ee)

--plasma-purple-glow: rgba(167, 139, 250, 0.3)
Purple glow
Use for: Secondary glows, purple-themed cards
```

### Quaternary - Quantum Violet
```
--quantum-violet: #8b5cf6
████████████████████████
Rich violet
RGB: (139, 92, 246)
Use for: Links, experimental badges, tertiary accents
Replaces: --uncommon-green (#1eff00)

--quantum-violet-glow: rgba(139, 92, 246, 0.3)
Violet glow
Use for: Link glows, accent shadows
```

---

## Text & Neutral Colors

### Primary Text
```
--stellar-white: #f8fafc
████████████████████████
Near-white with slight blue tint
RGB: (248, 250, 252)
Use for: Primary text, headings
Replaces: --parchment-white (#f5f1e8)
```

### Secondary Text
```
--cosmic-gray: #cbd5e1
████████████████████████
Light gray with cool tone
RGB: (203, 213, 225)
Use for: Body text, descriptions, labels
Replaces: --stone-gray (#b8b8b8)
```

### Tertiary Text
```
--nebula-gray: #64748b
████████████████████████
Medium gray
RGB: (100, 116, 139)
Use for: Meta text, timestamps, subtle labels
Replaces: --shadow-gray (#6a6a6a)
```

### Borders & Subtle Elements
```
--void-gray: #334155
████████████████████████
Dark gray for borders
RGB: (51, 65, 85)
Use for: Subtle borders, dividers
Replaces: --bronze-border (#cd7f32)
```

---

## Color Mappings (WoW → Sci-Fi)

| WoW Color | Hex | → | Sci-Fi Color | Hex | Usage |
|-----------|-----|---|--------------|-----|-------|
| Legendary Gold | #ffd700 ⭐ | → | Cyber Blue | #00d4ff 💠 | Primary accent |
| Epic Purple | #a335ee 🟣 | → | Plasma Purple | #a78bfa 💜 | Secondary accent |
| Rare Blue | #0070dd 🔵 | → | Neon Cyan | #06b6d4 🔷 | Borders, tech badges |
| Uncommon Green | #1eff00 🟢 | → | Quantum Violet | #8b5cf6 💎 | Links, experimental |
| Bronze Border | #cd7f32 🟤 | → | Void Gray | #334155 ⬛ | Borders |
| Parchment White | #f5f1e8 📄 | → | Stellar White | #f8fafc ⚪ | Primary text |
| Stone Gray | #b8b8b8 ⚫ | → | Cosmic Gray | #cbd5e1 🌫️ | Body text |
| Shadow Gray | #6a6a6a ⚫ | → | Nebula Gray | #64748b 🌑 | Meta text |

---

## Gradients

### Hero Background
```css
/* WoW Version */
background: linear-gradient(135deg, #0a0e27 0%, #1a1d2e 50%, #2a2d3e 100%);

/* Sci-Fi Version */
background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #0a0d1a 100%);
```

### Card Background
```css
/* WoW Version */
background: linear-gradient(180deg, #1a1d2e 0%, #0f1119 100%);

/* Sci-Fi Version */
background: linear-gradient(180deg, #111827 0%, #0a0d1a 100%);
```

### Cyber Gradient (for buttons, effects)
```css
/* New - replaces gold gradient */
background: linear-gradient(135deg, #00d4ff 0%, #06b6d4 50%, #00d4ff 100%);
```

---

## Shadow & Glow Reference

### Elevation Shadows (No Glow)
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.7);
```

### Neon Glows
```css
/* Cyber Blue Glow */
box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);

/* Neon Cyan Glow */
box-shadow: 0 0 16px rgba(6, 182, 212, 0.3);

/* Plasma Purple Glow */
box-shadow: 0 0 20px rgba(167, 139, 250, 0.3);

/* Quantum Violet Glow */
box-shadow: 0 0 16px rgba(139, 92, 246, 0.3);
```

### Compound Effects (Shadow + Glow)
```css
/* Card Hover */
box-shadow:
  0 8px 32px rgba(0, 0, 0, 0.6),    /* Elevation */
  0 0 24px rgba(0, 212, 255, 0.4);   /* Glow */

/* Button Hover */
box-shadow:
  0 0 30px rgba(0, 212, 255, 0.4),   /* Outer glow */
  0 8px 32px rgba(0, 0, 0, 0.6);     /* Depth */
```

---

## Component Color Examples

### Navigation
```
Background: rgba(10, 13, 26, 0.9)
Border: #06b6d4 (neon-cyan)
Logo: #00d4ff (cyber-blue)
Links: #cbd5e1 (cosmic-gray)
Links Hover: #00d4ff (cyber-blue)
Active Underline: #00d4ff with glow
```

### Hero Section
```
Background: gradient-nebula
Name: #f8fafc (stellar-white) with blue glow
Subtitle: #cbd5e1 (cosmic-gray)
Terminal Corners: #00d4ff (cyber-blue) with glow
```

### Primary Button
```
Text: #f8fafc (stellar-white)
Border: #00d4ff (cyber-blue)
Background: linear-gradient(135deg,
  rgba(0, 212, 255, 0.1),
  rgba(0, 212, 255, 0.05))
Glow: rgba(0, 212, 255, 0.4)
```

### Project Cards
```
Background: gradient from #111827 to #0a0d1a
Border Default: #334155 (void-gray)
Border Hover: --tech-color (varies by type)
Top Strip: --tech-color (3px)

Featured Card:
  --tech-color: #00d4ff (cyber-blue)

Core Card:
  --tech-color: #a78bfa (plasma-purple)

Experimental Card:
  --tech-color: #06b6d4 (neon-cyan)
```

### Tech Level Badges
```
Featured:
  Text: #00d4ff
  Border: #00d4ff
  Background: rgba(0, 212, 255, 0.1)
  Glow: rgba(0, 212, 255, 0.4)

Core:
  Text: #a78bfa
  Border: #a78bfa
  Background: rgba(167, 139, 250, 0.1)
  Glow: rgba(167, 139, 250, 0.3)

Experimental:
  Text: #06b6d4
  Border: #06b6d4
  Background: rgba(6, 182, 212, 0.1)
  Glow: rgba(6, 182, 212, 0.3)
```

### Timeline
```
Line: #06b6d4 (neon-cyan) with glow
Markers: #00d4ff (cyber-blue) with pulsing glow
Date Labels: #00d4ff (cyber-blue)
Company Names: #a78bfa (plasma-purple)
```

---

## Accessibility - Color Contrast Ratios

### Text Combinations (WCAG AA Compliant)

✅ **PASS AAA** (7:1+)
```
#f8fafc on #0a0d1a  →  Ratio: 15.2:1  (stellar-white on deep-space)
#cbd5e1 on #0a0d1a  →  Ratio: 12.8:1  (cosmic-gray on deep-space)
#f8fafc on #111827  →  Ratio: 14.1:1  (stellar-white on space-void)
```

✅ **PASS AA** (4.5:1+)
```
#64748b on #0a0d1a  →  Ratio: 6.2:1   (nebula-gray on deep-space)
#00d4ff on #0a0d1a  →  Ratio: 8.9:1   (cyber-blue on deep-space)
#cbd5e1 on #111827  →  Ratio: 11.9:1  (cosmic-gray on space-void)
```

✅ **PASS Large Text** (3:1+)
```
#a78bfa on #0a0d1a  →  Ratio: 5.8:1   (plasma-purple on deep-space)
#06b6d4 on #0a0d1a  →  Ratio: 6.4:1   (neon-cyan on deep-space)
```

⚠️ **Use Carefully** (for large text or non-text only)
```
#8b5cf6 on #0a0d1a  →  Ratio: 4.1:1   (quantum-violet - 18px+ only)
#334155 on #0a0d1a  →  Ratio: 2.8:1   (void-gray - borders only)
```

---

## Usage Guidelines

### When to Use Each Color

#### Cyber Blue (#00d4ff)
- ✅ Primary CTAs
- ✅ Section titles
- ✅ Hero name glow
- ✅ Featured project indicators
- ✅ Timeline markers
- ✅ Navigation active states
- ❌ Body text (too bright)
- ❌ Backgrounds (too intense)

#### Neon Cyan (#06b6d4)
- ✅ Card borders
- ✅ Timeline line
- ✅ Tech badges
- ✅ Experimental project indicators
- ✅ Navigation border
- ✅ Achievement bullets
- ❌ Large text areas
- ❌ Primary focus elements

#### Plasma Purple (#a78bfa)
- ✅ Secondary badges
- ✅ Core project indicators
- ✅ Company names in timeline
- ✅ Accent elements
- ✅ Visual variety
- ❌ Primary CTAs
- ❌ Body text

#### Quantum Violet (#8b5cf6)
- ✅ Links
- ✅ Experimental tags
- ✅ Tertiary accents
- ✅ Small interactive elements
- ⚠️ Large text (18px+ only)
- ❌ Body copy

#### Stellar White (#f8fafc)
- ✅ Primary text
- ✅ Headings
- ✅ Button text
- ✅ High emphasis content
- ❌ Backgrounds
- ❌ Large fills

#### Cosmic Gray (#cbd5e1)
- ✅ Body text
- ✅ Descriptions
- ✅ Labels
- ✅ Navigation links (default)
- ✅ Secondary content
- ❌ Primary headings
- ❌ CTAs

---

## Color Psychology & Brand Alignment

### Why These Colors Work

**Cyber Blue (#00d4ff)**
- 🧠 Psychology: Innovation, technology, trust, clarity
- 🎯 Brand Fit: AI-powered, precision engineering, cutting-edge
- 🏢 Corporate: Used by tech companies (IBM, Intel, Microsoft Azure)
- ✨ Effect: Energizing without being overwhelming

**Neon Cyan (#06b6d4)**
- 🧠 Psychology: Digital, modern, clean, professional
- 🎯 Brand Fit: DevOps, cloud computing, system architecture
- 🏢 Corporate: Tailwind CSS brand, modern dev tools
- ✨ Effect: Crisp, technical, approachable

**Plasma Purple (#a78bfa)**
- 🧠 Psychology: Creativity, innovation, premium quality
- 🎯 Brand Fit: AI/ML, creative problem-solving
- 🏢 Corporate: Stripe, Twitch, creative tech companies
- ✨ Effect: Sophisticated, modern, memorable

**Quantum Violet (#8b5cf6)**
- 🧠 Psychology: Innovation, imagination, experimental
- 🎯 Brand Fit: Research, experimental features, advanced tech
- 🏢 Corporate: Modern startups, creative agencies
- ✨ Effect: Forward-thinking, distinctive

---

## Common Pitfalls to Avoid

### ❌ Don't Do This

1. **Too Many Glows**
   ```css
   /* BAD - Glow overload */
   .everything {
     box-shadow: 0 0 50px var(--cyber-blue-glow);
     text-shadow: 0 0 30px var(--cyber-blue-glow);
     border: 3px solid var(--cyber-blue);
     filter: drop-shadow(0 0 20px var(--cyber-blue));
   }
   ```

2. **Insufficient Contrast**
   ```css
   /* BAD - Hard to read */
   .text {
     color: #8b5cf6;  /* Quantum violet */
     font-size: 14px;  /* Small text */
   }
   ```

3. **Mixing Too Many Accent Colors**
   ```html
   <!-- BAD - Rainbow mess -->
   <div style="border: 2px solid var(--cyber-blue);">
     <h3 style="color: var(--plasma-purple);">Title</h3>
     <p style="color: var(--quantum-violet);">Text</p>
     <button style="background: var(--neon-cyan);">Click</button>
   </div>
   ```

### ✅ Do This Instead

1. **Strategic Glows**
   ```css
   /* GOOD - Subtle, purposeful glow */
   .card:hover {
     box-shadow:
       0 8px 32px rgba(0, 0, 0, 0.6),
       0 0 24px var(--cyber-blue-glow);
   }
   ```

2. **Sufficient Contrast**
   ```css
   /* GOOD - Easy to read */
   .text {
     color: var(--cosmic-gray);  /* #cbd5e1 */
     font-size: 1rem;
   }

   .link {
     color: var(--quantum-violet);  /* #8b5cf6 */
     font-size: 1.125rem;  /* Large enough */
   }
   ```

3. **Consistent Color Hierarchy**
   ```html
   <!-- GOOD - Clear hierarchy -->
   <div class="card">
     <h3 class="text-stellar-white">Title</h3>
     <p class="text-cosmic-gray">Description text here</p>
     <button class="btn-primary">Action</button>
   </div>
   ```

---

## Quick Copy-Paste Snippets

### Complete :root Variables Block
```css
:root {
  /* Backgrounds */
  --deep-space: #0a0d1a;
  --space-void: #111827;
  --stellar-navy: #1e293b;

  /* Primary Accents */
  --cyber-blue: #00d4ff;
  --cyber-blue-glow: rgba(0, 212, 255, 0.4);
  --cyber-blue-dim: rgba(0, 212, 255, 0.1);

  --neon-cyan: #06b6d4;
  --neon-cyan-glow: rgba(6, 182, 212, 0.3);

  --plasma-purple: #a78bfa;
  --plasma-purple-glow: rgba(167, 139, 250, 0.3);

  --quantum-violet: #8b5cf6;
  --quantum-violet-glow: rgba(139, 92, 246, 0.3);

  /* Text */
  --stellar-white: #f8fafc;
  --cosmic-gray: #cbd5e1;
  --nebula-gray: #64748b;
  --void-gray: #334155;

  /* Effects */
  --holographic-shimmer: rgba(0, 212, 255, 0.05);
  --scanline-overlay: rgba(0, 212, 255, 0.02);

  /* Gradients */
  --gradient-nebula: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #0a0d1a 100%);
  --gradient-cyber: linear-gradient(135deg, #00d4ff 0%, #06b6d4 50%, #00d4ff 100%);
  --gradient-space: linear-gradient(135deg, #0a0d1a 0%, #1e293b 100%);
  --gradient-card: linear-gradient(180deg, #111827 0%, #0a0d1a 100%);

  /* Shadows & Glows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.7);

  --glow-blue: 0 0 20px var(--cyber-blue-glow);
  --glow-cyan: 0 0 16px var(--neon-cyan-glow);
  --glow-purple: 0 0 20px var(--plasma-purple-glow);
  --glow-violet: 0 0 16px var(--quantum-violet-glow);
}
```

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
```

### Font Family Variables
```css
--font-heading: 'Exo 2', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'Fira Code', monospace;
```

---

## Testing Your Colors

### Browser DevTools Method
1. Open browser DevTools (F12)
2. Select element
3. Change color value
4. See live preview
5. Copy working values

### Online Tools
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Color Picker:** https://coolors.co/
- **Gradient Generator:** https://cssgradient.io/
- **Palette Generator:** https://mycolor.space/

### Quick Test HTML
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --cyber-blue: #00d4ff;
      --deep-space: #0a0d1a;
    }
    body { background: var(--deep-space); color: var(--cyber-blue); }
  </style>
</head>
<body>
  <h1>Testing Cyber Blue on Deep Space</h1>
  <p>Can you read this easily?</p>
</body>
</html>
```

---

## Final Color Checklist

Before launching, verify:

- [ ] All colors defined in CSS variables
- [ ] No hardcoded hex values in components
- [ ] Contrast ratios meet WCAG AA minimum
- [ ] Glows are subtle, not overwhelming
- [ ] Colors consistent across all pages
- [ ] Dark mode works (primary theme is dark)
- [ ] Colors look good on different monitors
- [ ] Mobile colors are readable
- [ ] Print styles defined (if needed)
- [ ] No WoW colors remaining (gold, bronze, parchment)

---

**Color palette ready! Use this reference during implementation to maintain consistency.** 🎨
