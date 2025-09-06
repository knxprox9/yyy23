# Embeddable Product Card

A fully responsive, standalone product card component that can be embedded into any website seamlessly. Features Arabic RTL support, premium payment card designs, and extensive customization options.

## Features

- 🌍 **Universal Compatibility**: Works in any React application or can be adapted for vanilla JS
- 📱 **Fully Responsive**: Perfect rendering on mobile, tablet, and desktop
- 🎨 **Highly Customizable**: Extensive props for theming and behavior
- 🔧 **Self-Contained**: No external dependencies beyond React and styled-components
- 🌐 **RTL Support**: Built-in Arabic language and RTL layout support
- ♿ **Accessible**: ARIA labels and keyboard navigation
- ⚡ **Performance Optimized**: Lightweight with smooth animations
- 💳 **Premium Card Designs**: Authentic brand gradients and styling

## Installation

```bash
# Copy the EmbeddableProductCard folder to your components directory
cp -r EmbeddableProductCard ./src/components/

# Install peer dependencies if not already installed
npm install react styled-components
```

## Basic Usage

```jsx
import { EmbeddableProductCard } from './components/EmbeddableProductCard';

function App() {
  return (
    <div>
      <EmbeddableProductCard />
    </div>
  );
}
```

## Advanced Usage

```jsx
import { EmbeddableProductCard } from './components/EmbeddableProductCard';

function App() {
  const handlePaymentMethodClick = (method) => {
    console.log('Payment method selected:', method);
    // Handle payment method selection
  };

  return (
    <EmbeddableProductCard
      // Size and appearance
      width="300px"
      theme="dark"
      backgroundColor="#1f2937"
      borderRadius="2rem"
      shadow="strong"
      
      // Content customization
      cardTitle="Premium Digital Cards"
      cardSubtitle="Instant delivery worldwide"
      rating="(50,234)"
      language="en"
      
      // Feature toggles
      showVideo={false}
      showPromoItems={true}
      showFavoriteButton={true}
      showToggleButton={true}
      
      // Event handlers
      onPaymentMethodClick={handlePaymentMethodClick}
      
      // Custom styling
      className="my-custom-card"
      style={{ margin: '20px auto' }}
    />
  );
}
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | string | `'240px'` | Card width (supports px, %, vw, etc.) |
| `height` | string | `'auto'` | Card height (auto-calculated by default) |
| `backgroundColor` | string | `'white'` | Card background color |
| `borderRadius` | string | `'1rem'` | Card border radius |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme variant |
| `language` | `'ar' \| 'en'` | `'ar'` | Language and text direction |
| `shadow` | `'none' \| 'subtle' \| 'default' \| 'strong'` | `'default'` | Shadow intensity |
| `showVideo` | boolean | `true` | Show background video animation |
| `showPromoItems` | boolean | `true` | Show promotional badges |
| `showFavoriteButton` | boolean | `true` | Show favorite heart button |
| `showToggleButton` | boolean | `true` | Show mini overlay toggle |
| `cardTitle` | string | Arabic default | Main card title |
| `cardSubtitle` | string | Arabic default | Card subtitle/description |
| `rating` | string | `'(29,062)'` | Rating display text |
| `customPaymentMethods` | array | null | Custom payment method list |
| `onPaymentMethodClick` | function | null | Payment method click handler |
| `className` | string | `''` | Additional CSS classes |
| `style` | object | `{}` | Inline styles |

## Custom Payment Methods

```jsx
const customMethods = [
  { 
    id: 'custom-card', 
    name: 'Custom Card', 
    content: 'CC', 
    type: 'text' 
  },
  { 
    id: 'crypto', 
    name: 'Cryptocurrency', 
    content: '₿', 
    type: 'symbol' 
  }
];

<EmbeddableProductCard 
  customPaymentMethods={customMethods}
  onPaymentMethodClick={(method) => {
    console.log('Selected:', method.name);
  }}
/>
```

## Responsive Behavior

The card automatically adapts to different screen sizes:

- **Desktop**: Full size with all features
- **Tablet (≤768px)**: Slightly smaller with maintained proportions
- **Mobile (≤480px)**: Compact size with optimized spacing

## Themes

### Light Theme (default)
- White background
- Dark text
- Standard shadows

### Dark Theme
- Dark gray background (`#1f2937`)
- Light text
- Enhanced contrast

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with modern CSS support

## Performance Notes

- Uses CSS-in-JS with styled-components for optimal performance
- Animations use GPU acceleration via `transform` properties
- Video background includes fallback for better compatibility
- Implements `isolation: isolate` for proper embedding context

## Accessibility

- ARIA labels for screen readers
- Keyboard navigation support
- High contrast ratios in both themes
- Semantic HTML structure
- Focus management for overlay interactions

## Integration Examples

### Next.js
```jsx
import dynamic from 'next/dynamic';

const EmbeddableProductCard = dynamic(
  () => import('./components/EmbeddableProductCard'),
  { ssr: false }
);
```

### Gatsby
```jsx
import { EmbeddableProductCard } from './components/EmbeddableProductCard';

// Use in component with client-side check
const isClient = typeof window !== 'undefined';

return (
  <div>
    {isClient && <EmbeddableProductCard />}
  </div>
);
```

### Vanilla HTML/JS
The component can be compiled to vanilla JavaScript using tools like Babel and bundled for use in non-React environments.

## Customization Examples

### Minimal Card
```jsx
<EmbeddableProductCard
  showVideo={false}
  showPromoItems={false}
  showFavoriteButton={false}
  showToggleButton={false}
  shadow="subtle"
  borderRadius="2rem"
/>
```

### Large Feature Card
```jsx
<EmbeddableProductCard
  width="400px"
  shadow="strong"
  theme="dark"
  cardTitle="Premium Gaming Cards"
  cardSubtitle="Access all your favorite games instantly"
  rating="(125,403)"
/>
```

### Compact Mobile Card
```jsx
<EmbeddableProductCard
  width="200px"
  showVideo={false}
  backgroundColor="#f8f9fa"
  borderRadius="1.5rem"
/>
```

## License

This component is part of the digital cards platform and follows the project's licensing terms.

## Support

For issues, feature requests, or customization help, please refer to the main project documentation or contact the development team.