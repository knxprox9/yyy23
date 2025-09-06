import React from 'react';
import styled from 'styled-components';
import EmbeddableProductCard from './EmbeddableProductCard';

/**
 * Demo Component for the Embeddable Product Card
 * Showcases various configurations and use cases
 */
const ProductCardDemo = () => {
  const handlePaymentMethodClick = (method) => {
    console.log('Payment method selected:', method);
    alert(`Selected: ${method.name}`);
  };

  return (
    <DemoWrapper>
      <div className="demo-container">
        <div className="demo-header">
          <h1>🎨 Embeddable Product Card Demo</h1>
          <p>Fully responsive, standalone card component ready for any website</p>
        </div>
        
        <div className="demo-section">
          <h2>Default Configuration</h2>
          <div className="card-wrapper">
            <EmbeddableProductCard 
              onPaymentMethodClick={handlePaymentMethodClick}
            />
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Size Variations</h2>
          <div className="size-grid">
            <div className="size-item">
              <h3>Compact (200px)</h3>
              <EmbeddableProductCard 
                width="200px" 
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
            <div className="size-item">
              <h3>Standard (240px)</h3>
              <EmbeddableProductCard 
                width="240px" 
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
            <div className="size-item">
              <h3>Large (300px)</h3>
              <EmbeddableProductCard 
                width="300px" 
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Theme Variations</h2>
          <div className="theme-grid">
            <div className="theme-item">
              <h3>Light Theme</h3>
              <EmbeddableProductCard 
                theme="light"
                width="240px"
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
            <div className="theme-item">
              <h3>Dark Theme</h3>
              <EmbeddableProductCard 
                theme="dark"
                width="240px"
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Customization Options</h2>
          <div className="custom-grid">
            <div className="custom-item">
              <h3>No Video Background</h3>
              <EmbeddableProductCard 
                showVideo={false}
                backgroundColor="#f8f9fa"
                width="240px"
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
            <div className="custom-item">
              <h3>Minimal Version</h3>
              <EmbeddableProductCard 
                showPromoItems={false}
                showFavoriteButton={false}
                showToggleButton={false}
                backgroundColor="#fff"
                borderRadius="2rem"
                shadow="subtle"
                width="240px"
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
            <div className="custom-item">
              <h3>Custom Content</h3>
              <EmbeddableProductCard 
                cardTitle="Premium Digital Cards"
                cardSubtitle="Instant delivery worldwide"
                rating="(50,234)"
                width="240px"
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
            <div className="custom-item">
              <h3>Strong Shadow</h3>
              <EmbeddableProductCard 
                shadow="strong"
                width="240px"
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Responsive Behavior</h2>
          <div className="responsive-demo">
            <p>Resize your browser window to see responsive behavior in action!</p>
            <div className="responsive-container">
              <EmbeddableProductCard 
                width="100%" 
                onPaymentMethodClick={handlePaymentMethodClick}
              />
            </div>
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Grid Layout Example</h2>
          <div className="grid-layout">
            <EmbeddableProductCard 
              width="240px" 
              cardTitle="Gaming Cards"
              cardSubtitle="For all your favorite games"
              rating="(12,543)"
              onPaymentMethodClick={handlePaymentMethodClick}
            />
            <EmbeddableProductCard 
              width="240px"
              theme="dark"
              cardTitle="Shopping Cards"
              cardSubtitle="Shop from top brands"
              rating="(34,221)"
              onPaymentMethodClick={handlePaymentMethodClick}
            />
            <EmbeddableProductCard 
              width="240px"
              backgroundColor="#f1f5f9"
              cardTitle="Entertainment"
              cardSubtitle="Movies, music & more"
              rating="(8,976)"
              onPaymentMethodClick={handlePaymentMethodClick}
            />
          </div>
        </div>
        
        <div className="usage-section">
          <h2>Implementation Example</h2>
          <div className="code-block">
            <pre>{`import { EmbeddableProductCard } from './EmbeddableProductCard';

// Basic usage
<EmbeddableProductCard />

// With customization
<EmbeddableProductCard 
  width="280px"
  theme="dark"
  backgroundColor="#1f2937"
  borderRadius="1.5rem"
  showVideo={false}
  cardTitle="Custom Title"
  cardSubtitle="Custom Subtitle"
  rating="(Custom Rating)"
  onPaymentMethodClick={(method) => {
    console.log('Selected:', method);
  }}
  shadow="strong"
  className="my-custom-class"
  style={{ margin: '20px' }}
/>`}</pre>
          </div>
        </div>

        <div className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>📱 Fully Responsive</h3>
              <p>Adapts perfectly to mobile, tablet, and desktop screens</p>
            </div>
            <div className="feature-item">
              <h3>🎨 Highly Customizable</h3>
              <p>Theme, colors, content, and behavior can all be customized</p>
            </div>
            <div className="feature-item">
              <h3>🔧 Self-Contained</h3>
              <p>No external dependencies, works anywhere</p>
            </div>
            <div className="feature-item">
              <h3>🌍 RTL Support</h3>
              <p>Built-in support for Arabic and other RTL languages</p>
            </div>
            <div className="feature-item">
              <h3>⚡ Performance Optimized</h3>
              <p>Lightweight, smooth animations, and optimized rendering</p>
            </div>
            <div className="feature-item">
              <h3>🔒 Accessible</h3>
              <p>ARIA labels, keyboard navigation, and screen reader support</p>
            </div>
          </div>
        </div>
      </div>
    </DemoWrapper>
  );
};

const DemoWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

  .demo-container {
    max-width: 1400px;
    margin: 0 auto;
    color: white;
  }

  .demo-header {
    text-align: center;
    margin-bottom: 60px;
    
    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  .demo-section {
    margin-bottom: 80px;
    
    h2 {
      font-size: 2rem;
      margin-bottom: 30px;
      text-align: center;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 15px;
      text-align: center;
      opacity: 0.9;
    }
  }

  .card-wrapper {
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }

  .size-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    justify-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .size-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .theme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    justify-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .theme-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .custom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
    justify-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }

  .custom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .responsive-demo {
    text-align: center;
    
    p {
      font-size: 1.1rem;
      margin-bottom: 30px;
      opacity: 0.9;
    }
  }

  .responsive-container {
    max-width: 500px;
    margin: 0 auto;
  }

  .grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
    justify-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }

  .usage-section {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 60px;
    
    h2 {
      margin-bottom: 30px;
      text-align: center;
    }
  }

  .code-block {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    padding: 20px;
    overflow-x: auto;
    
    pre {
      color: #e2e8f0;
      font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 0;
      white-space: pre;
      
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }

  .features-section {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 40px;
    
    h2 {
      margin-bottom: 40px;
      text-align: center;
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }

  .feature-item {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 15px;
      color: #ffd426;
    }
    
    p {
      opacity: 0.9;
      line-height: 1.6;
    }
  }
`;

export default ProductCardDemo;