import React from 'react';
import styled from 'styled-components';

const CardShowcase = () => {
  const brands = [
    { id: 'visa', name: 'Visa', content: 'VISA' },
    { id: 'mastercard', name: 'Mastercard', content: 'circles' },
    { id: 'googleplay', name: 'Google Play', content: '▶' },
    { id: 'roblox', name: 'Roblox', content: 'R' },
    { id: 'playstation', name: 'PlayStation', content: '◐◒◑◓' },
    { id: 'amazon', name: 'Amazon', content: 'amazon' },
    { id: 'itunes', name: 'iTunes', content: '♪' },
    { id: 'shein', name: 'Shein', content: 'SHEIN' },
    { id: 'steam', name: 'Steam', content: '◉' },
    { id: 'fortnite', name: 'Fortnite', content: 'F' },
    { id: 'razer', name: 'Razer Gold', content: '⧨' },
    { id: 'flower', name: 'Flower', content: '❀' }
  ];

  return (
    <StyledWrapper>
      <div className="showcase-container">
        <h2>Premium Card Designs Showcase</h2>
        <div className="cards-grid">
          {brands.map(brand => (
            <div key={brand.id} className="showcase-item">
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
              <div className="card-label">{brand.name}</div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .showcase-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

  h2 {
    margin-bottom: 40px;
    font-size: 2.5rem;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
    max-width: 1200px;
    width: 100%;
  }

  .showcase-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .card-label {
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
  }

  /* Premium Card Base Style */
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
  }

  .card-circles .circle {
    width: 16px !important;
    height: 16px !important;
    border-radius: 50% !important;
    opacity: 0.9 !important;
  }

  .card-circles .circle.red {
    background: #eb001b !important;
    z-index: 2 !important;
  }

  .card-circles .circle.yellow {
    background: #ff5f00 !important;
    margin-left: -8px !important;
    z-index: 1 !important;
  }

  /* Hover Effects */
  .premium-card:hover {
    transform: translateY(-4px) scale(1.1) !important;
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.3),
      0 6px 20px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
  }
`;

export default CardShowcase;