import React from 'react';
import styled from 'styled-components';

/**
 * Showcase Component for Payment Card Designs
 * Displays all premium card designs in a grid layout
 */
const ProductCardShowcase = () => {
  const brands = [
    { id: 'visa', name: 'Visa', content: 'VISA', description: 'Global payment leader' },
    { id: 'mastercard', name: 'Mastercard', content: 'circles', description: 'Worldwide acceptance' },
    { id: 'googleplay', name: 'Google Play', content: '▶', description: 'Apps, games & more' },
    { id: 'roblox', name: 'Roblox', content: 'R', description: 'Gaming platform' },
    { id: 'playstation', name: 'PlayStation', content: '◐◒◑◓', description: 'Gaming console' },
    { id: 'amazon', name: 'Amazon', content: 'amazon', description: 'Online marketplace' },
    { id: 'itunes', name: 'iTunes', content: '♪', description: 'Music & media' },
    { id: 'shein', name: 'Shein', content: 'SHEIN', description: 'Fashion retailer' },
    { id: 'steam', name: 'Steam', content: '◉', description: 'PC gaming platform' },
    { id: 'fortnite', name: 'Fortnite', content: 'F', description: 'Battle royale game' },
    { id: 'razer', name: 'Razer Gold', content: '⧨', description: 'Gaming currency' },
    { id: 'flower', name: 'Flower', content: '❀', description: 'Gift cards' }
  ];

  return (
    <ShowcaseWrapper>
      <div className="showcase-container">
        <div className="showcase-header">
          <h1>💳 Premium Payment Card Designs</h1>
          <p>Beautiful, professional card designs with authentic brand gradients and styling</p>
        </div>
        
        <div className="cards-grid">
          {brands.map(brand => (
            <div key={brand.id} className="showcase-item">
              <div className="card-preview">
                <div className={`premium-card ${brand.id}`}>
                  {brand.content === 'circles' ? (
                    <div className="card-circles">
                      <div className="circle red"></div>
                      <div className="circle yellow"></div>
                    </div>
                  ) : (
                    <div className="card-brand">{brand.content}</div>
                  )}
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-name">{brand.name}</h3>
                <p className="card-description">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="design-features">
          <h2>Design Features</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎨</div>
              <h3>Brand-Authentic Gradients</h3>
              <p>Each card uses official brand colors and authentic gradient patterns</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✨</div>
              <h3>Premium Visual Effects</h3>
              <p>Subtle shadows, insets, and highlights create a premium 3D appearance</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>Responsive Scaling</h3>
              <p>Cards maintain perfect proportions across all screen sizes</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Smooth Interactions</h3>
              <p>Hover and active states with smooth transitions and animations</p>
            </div>
          </div>
        </div>

        <div className="technical-specs">
          <h2>Technical Specifications</h2>
          <div className="specs-grid">
            <div className="spec">
              <strong>Default Size:</strong> 38×24px
            </div>
            <div className="spec">
              <strong>Border Radius:</strong> 6px
            </div>
            <div className="spec">
              <strong>Font Weight:</strong> 700 (Bold)
            </div>
            <div className="spec">
              <strong>Box Shadow:</strong> Multi-layer depth
            </div>
            <div className="spec">
              <strong>Transitions:</strong> 0.3s cubic-bezier
            </div>
            <div className="spec">
              <strong>Hover Scale:</strong> 1.08x with -2px Y
            </div>
          </div>
        </div>
      </div>
    </ShowcaseWrapper>
  );
};

const ShowcaseWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

  .showcase-container {
    max-width: 1200px;
    margin: 0 auto;
    color: white;
  }

  .showcase-header {
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

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    margin-bottom: 80px;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 20px;
    }
  }

  .showcase-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
    
    @media (max-width: 768px) {
      padding: 20px 15px;
    }
  }

  .card-preview {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }

  .card-info {
    .card-name {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: #ffd426;
    }
    
    .card-description {
      font-size: 0.9rem;
      opacity: 0.8;
      line-height: 1.4;
    }
  }

  .design-features {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 60px;
    
    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 40px;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .feature {
    text-align: center;
    
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 15px;
      color: #ffd426;
    }
    
    p {
      opacity: 0.9;
      line-height: 1.6;
    }
  }

  .technical-specs {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 40px;
    
    h2 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 30px;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
  }

  .specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .spec {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 0.9rem;
    
    strong {
      color: #ffd426;
    }
  }

  /* Premium Card Styles */
  .premium-card {
    width: 80px !important;
    height: 50px !important;
    border-radius: 8px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    cursor: pointer !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    letter-spacing: 0.5px !important;
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.2),
      0 2px 6px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    overflow: hidden !important;

    &:hover {
      transform: translateY(-4px) scale(1.1) !important;
      box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.3),
        0 6px 20px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
    }
  }

  /* Brand-specific gradients */
  .premium-card.visa {
    background: linear-gradient(135deg, #1a1f71 0%, #4757a9 50%, #1a1f71 100%) !important;
    color: #ffffff !important;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
  }

  .premium-card.mastercard {
    background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%) !important;
    color: #ffffff !important;
  }

  .premium-card.googleplay {
    background: linear-gradient(135deg, #34a853 0%, #4caf50 50%, #2e7d32 100%) !important;
    color: #ffffff !important;
    font-size: 18px !important;
  }

  .premium-card.roblox {
    background: linear-gradient(135deg, #e74c3c 0%, #c0392b 50%, #a93226 100%) !important;
    color: #ffffff !important;
    font-size: 18px !important;
    font-weight: 900 !important;
  }

  .premium-card.playstation {
    background: linear-gradient(135deg, #003791 0%, #0050c7 50%, #003791 100%) !important;
    color: #ffffff !important;
    font-size: 14px !important;
  }

  .premium-card.amazon {
    background: linear-gradient(135deg, #ff9900 0%, #ffb84d 50%, #e68a00 100%) !important;
    color: #000000 !important;
    font-weight: 900 !important;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) !important;
  }

  .premium-card.itunes {
    background: linear-gradient(135deg, #fa2d48 0%, #ff5470 50%, #e91e40 100%) !important;
    color: #ffffff !important;
    font-size: 20px !important;
  }

  .premium-card.shein {
    background: linear-gradient(135deg, #000000 0%, #2c2c2c 50%, #000000 100%) !important;
    color: #ffffff !important;
    font-size: 10px !important;
    font-weight: 900 !important;
  }

  .premium-card.steam {
    background: linear-gradient(135deg, #1b2838 0%, #2a475e 50%, #1b2838 100%) !important;
    color: #66c0f4 !important;
    font-size: 20px !important;
  }

  .premium-card.fortnite {
    background: linear-gradient(135deg, #6a5acd 0%, #8a7dda 50%, #5a4fcf 100%) !important;
    color: #ffffff !important;
    font-size: 18px !important;
    font-weight: 900 !important;
  }

  .premium-card.razer {
    background: linear-gradient(135deg, #00ff00 0%, #44ff44 50%, #00cc00 100%) !important;
    color: #000000 !important;
    font-size: 18px !important;
    font-weight: 900 !important;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) !important;
  }

  .premium-card.flower {
    background: linear-gradient(135deg, #ff69b4 0%, #ff99cc 50%, #ff1493 100%) !important;
    color: #ffffff !important;
    font-size: 20px !important;
  }

  /* Mastercard Circles */
  .card-circles {
    display: flex !important;
    align-items: center !important;
    gap: -2px !important;
    
    .circle {
      width: 16px !important;
      height: 16px !important;
      border-radius: 50% !important;
      opacity: 0.9 !important;
      
      &.red {
        background: #eb001b !important;
        z-index: 2 !important;
      }

      &.yellow {
        background: #ff5f00 !important;
        margin-left: -8px !important;
        z-index: 1 !important;
      }
    }
  }
`;

export default ProductCardShowcase;