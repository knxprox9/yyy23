import React from 'react';
import styled from 'styled-components';
import StandaloneProductCard from './StandaloneProductCard';

const StandaloneDemo = () => {
  return (
    <DemoWrapper>
      <div className="demo-container">
        <div className="demo-header">
          <h1>🎨 Standalone Card Module Demo</h1>
          <p>Independent, embeddable card component with full functionality</p>
        </div>
        
        <div className="demo-section">
          <h2>Default Configuration</h2>
          <div className="card-wrapper">
            <StandaloneProductCard />
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Custom Sizing Examples</h2>
          <div className="size-examples">
            <div className="size-item">
              <h3>Compact (200px)</h3>
              <StandaloneProductCard width="200px" />
            </div>
            <div className="size-item">
              <h3>Standard (240px)</h3>
              <StandaloneProductCard width="240px" />
            </div>
            <div className="size-item">
              <h3>Large (300px)</h3>
              <StandaloneProductCard width="300px" />
            </div>
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Customization Options</h2>
          <div className="custom-examples">
            <div className="custom-item">
              <h3>Without Video Background</h3>
              <StandaloneProductCard 
                showVideo={false}
                backgroundColor="#f8f9fa"
              />
            </div>
            <div className="custom-item">
              <h3>Without Promo Items</h3>
              <StandaloneProductCard 
                showPromoItems={false}
                backgroundColor="#fff"
                borderRadius="2rem"
              />
            </div>
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Responsive Behavior</h2>
          <div className="responsive-demo">
            <p>Resize your browser window to see responsive behavior in action!</p>
            <div className="responsive-container">
              <StandaloneProductCard width="100%" />
            </div>
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Multiple Cards Layout</h2>
          <div className="multiple-cards">
            <StandaloneProductCard width="240px" />
            <StandaloneProductCard 
              width="240px" 
              cardTitle="بطائق مميزة"
              cardSubtitle="مجموعة بطائق رقمية حصرية"
              rating="(15,423)"
            />
            <StandaloneProductCard 
              width="240px"
              backgroundColor="#f1f5f9"
              showVideo={false}
            />
          </div>
        </div>
        
        <div className="usage-info">
          <h2>Usage Instructions</h2>
          <div className="code-block">
            <pre>{`import StandaloneProductCard from './StandaloneProductCard';

// Basic usage
<StandaloneProductCard />

// With customization
<StandaloneProductCard 
  width="280px"
  backgroundColor="#f8f9fa"
  borderRadius="1.5rem"
  showVideo={false}
  cardTitle="Custom Title"
  cardSubtitle="Custom Subtitle"
  rating="(Custom Rating)"
/>`}</pre>
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

  .size-examples {
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

  .custom-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    justify-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .custom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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

  .multiple-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 40px;
    justify-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .usage-info {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    margin-top: 60px;
    
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
`;

export default StandaloneDemo;