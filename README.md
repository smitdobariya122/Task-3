# Reusable Button & Card Components

A React project demonstrating reusable UI components built with functional components and props.

## Features

### Button Component
- **Variants**: `primary`, `secondary`, `outline`, `danger`
- **Sizes**: `small`, `medium`, `large`
- **Props**: `variant`, `size`, `disabled`, `type`, `onClick`, `children`, `className`
- Fully customizable and accessible

### Card Component
- **Props**: `title`, `subtitle`, `footer`, `children`, `hoverable`, `shadow`, `className`
- Flexible layout with optional header and footer sections
- Hover effects and shadow customization
- Perfect for displaying content in a structured format

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

```bash
npm run build
```

## Component Usage Examples

### Button Component

```jsx
import Button from './components/Button';

// Basic usage
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// Different variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="danger">Delete</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

### Card Component

```jsx
import Card from './components/Card';
import Button from './components/Button';

// Basic card
<Card title="Card Title" subtitle="Card Subtitle">
  <p>Card content goes here</p>
</Card>

// Card with footer
<Card
  title="Card Title"
  footer={<Button>Action</Button>}
>
  <p>Content with footer</p>
</Card>

// Hoverable card
<Card title="Hoverable" hoverable={true}>
  <p>Hover over me!</p>
</Card>

// Card without shadow
<Card title="Flat Design" shadow={false}>
  <p>No shadow card</p>
</Card>
```

## Project Structure

```
Task-3/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Card.jsx
│   │   └── Card.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 18
- Vite
- CSS3 (for styling)

## Browser Compatibility

This application is fully compatible with:

- ✅ **Google Chrome** (latest 2 versions)
- ✅ **Mozilla Firefox** (latest 2 versions)
- ✅ **Safari** (latest 2 versions)
- ✅ **Microsoft Edge** (latest 2 versions)
- ✅ **Opera** (latest version)
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

### Cross-Browser Features

- CSS vendor prefixes for maximum compatibility
- Flexbox with fallbacks for older browsers
- CSS Grid with flexbox fallback
- Smooth transitions and animations
- Proper error handling and boundaries
- Accessibility features (ARIA attributes, focus management)

### Browser Support Details

- **Modern browsers**: Full feature support
- **Older browsers**: Graceful degradation with fallbacks
- **Mobile devices**: Responsive design with touch-friendly interactions
- **Accessibility**: WCAG compliant with proper focus management

## Key Concepts Demonstrated

- ✅ Functional Components
- ✅ Props and Prop Types
- ✅ Reusable UI Components
- ✅ Component Composition
- ✅ CSS Styling with Cross-Browser Compatibility
- ✅ Responsive Design
- ✅ Error Handling and Validation
- ✅ Accessibility Features