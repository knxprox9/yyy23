import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiTruck, FiShield, FiGift, FiX, FiCreditCard } from 'react-icons/fi';
import ToggleButton from './ToggleButton';

const ProductCard = () => {
  const [miniOpen, setMiniOpen] = useState(false);

  useEffect(() => {
    try { console.log('ProductCard: miniOpen', miniOpen); } catch {}
  }, [miniOpen]);

  return (
    <StyledWrapper data-open={miniOpen}>
      <div className="card">
        {/* Full-screen dim background when mini overlay is open */}
        {miniOpen && <div className="screen-dim" onClick={() => setMiniOpen(false)} aria-hidden="true" />}

        {/* Floating mini page overlay (same size as the card) */}
        {miniOpen && (
          <div className="mini-overlay" role="dialog" aria-modal="true" aria-label="صفحة مصغرة">
            <button className="close-btn" onClick={() => setMiniOpen(false)} aria-label="إغلاق">
              <FiX size={16} />
            </button>
            <div className="mini-content">
              {/* نفس أزرار/أيقونات الدفع الموجودة في الكرت الأصلي بنفس التصميم والحجم + الأزرار المطلوبة دون تكرار */}
              <div className="mini-payments">
                <ul className="colors-container">
                  <li className="payment-card visa" aria-label="Visa">
                    <div className="card-icon premium-card visa">
                      <div className="card-brand">VISA</div>
                    </div>
                    <div className="label-text">Visa</div>
                  </li>
                  <li className="payment-card mastercard" aria-label="Mastercard">
                    <div className="card-icon premium-card mastercard">
                      <div className="card-circles">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                      </div>
                    </div>
                    <div className="label-text">Mastercard</div>
                  </li>
                  <li className="payment-card googleplay" aria-label="Google Play">
                    <div className="card-icon premium-card googleplay">
                      <div className="card-logo">▶</div>
                    </div>
                    <div className="label-text">Google Play</div>
                  </li>
                  <li className="payment-card roblox" aria-label="Roblox">
                    <div className="card-icon premium-card roblox">
                      <div className="card-brand">R</div>
                    </div>
                    <div className="label-text">Roblox</div>
                  </li>
                  <li className="payment-card playstation" aria-label="PlayStation">
                    <div className="card-icon premium-card playstation">
                      <div className="card-logo">◐◒◑◓</div>
                    </div>
                    <div className="label-text">PlayStation</div>
                  </li>
                  <li className="payment-card amazon" aria-label="Amazon">
                    <div className="card-icon premium-card amazon">
                      <div className="card-brand">amazon</div>
                    </div>
                    <div className="label-text">Amazon</div>
                  </li>
                  <li className="payment-card itunes" aria-label="iTunes">
                    <div className="card-icon premium-card itunes">
                      <div className="card-logo">♪</div>
                    </div>
                    <div className="label-text">iTunes</div>
                  </li>
                  <li className="payment-card shein" aria-label="Shein">
                    <div className="card-icon premium-card shein">
                      <div className="card-brand">SHEIN</div>
                    </div>
                    <div className="label-text">Shein</div>
                  </li>
                  <li className="payment-card steam" aria-label="Steam">
                    <div className="card-icon premium-card steam">
                      <div className="card-logo">◉</div>
                    </div>
                    <div className="label-text">Steam</div>
                  </li>
                  <li className="payment-card fortnite" aria-label="Fortnite">
                    <div className="card-icon premium-card fortnite">
                      <div className="card-brand">F</div>
                    </div>
                    <div className="label-text">Fortnite</div>
                  </li>
                  <li className="payment-card razer" aria-label="Razer Gold">
                    <div className="card-icon premium-card razer">
                      <div className="card-logo">⧨</div>
                    </div>
                    <div className="label-text">Razer Gold</div>
                  </li>
                  <li className="payment-card flower" aria-label="Flower">
                    <div className="card-icon premium-card flower">
                      <div className="card-logo">❀</div>
                    </div>
                    <div className="label-text">Flower</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="image-container">
          {/* Online status indicator (green dot) */}
          <span className={`status-dot online`} aria-label={'online'} />
          <div className="toggle-wrapper" title="فتح الصفحة المصغرة">
            <ToggleButton active={miniOpen} onClick={() => setMiniOpen(true)} />
          </div>
          <svg viewBox="0 0 1921 1081" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="svg enhanced-background" aria-hidden="true">
            <defs>
              <radialGradient gradientUnits="objectBoundingBox" gradientTransform="translate(0.219) scale(0.563 1)" r="1.204" cy="0.5" cx="0.5" id="enhanced-gradient">
                <stop stopColor="#ffffff" offset={0} />
                <stop stopColor="#f8fafc" offset={0.3} />
                <stop stopColor="#e2e8f0" offset={0.7} />
                <stop stopColor="#cbd5e0" offset={1} />
              </radialGradient>
              
              {/* نقاط منقطة */}
              <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="rgba(255,255,255,0.4)" />
                <circle cx="15" cy="15" r="1" fill="rgba(0,0,0,0.1)" />
              </pattern>
              
              {/* خطوط موجية */}
              <pattern id="waves-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0,20 Q10,10 20,20 T40,20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                <path d="M0,20 Q10,30 20,20 T40,20" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            
            <g transform="translate(-121.5 -92.5)" id="hoodie">
              {/* الخلفية الأساسية */}
              <rect fill="url(#enhanced-gradient)" strokeWidth={1} strokeMiterlimit={10} stroke="#fff" transform="translate(122 93)" height={1080} width={1920} data-name="Rectangle 83" id="Rectangle_83" />
              
              {/* طبقة النقاط */}
              <rect fill="url(#dots-pattern)" transform="translate(122 93)" height={1080} width={1920} opacity="0.6" />
              
              {/* طبقة الموجات */}
              <rect fill="url(#waves-pattern)" transform="translate(122 93)" height={1080} width={1920} opacity="0.4" />
              
              {/* البريق المتحرك */}
              <rect fill="url(#shine-gradient)" strokeWidth={0} transform="translate(122 93)" height={1080} width={200} opacity="0.7">
                <animateTransform 
                  attributeName="transform" 
                  type="translate" 
                  values="22 93; 922 93; 1722 93" 
                  dur="4s" 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="opacity" 
                  values="0;0.7;0" 
                  dur="4s" 
                  repeatCount="indefinite" 
                />
              </rect>
              
              <linearGradient id="shine-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </g>
          </svg>
          {/* Animated credit cards stack image */}
          <div className="animated-cards-stack">
            <img src="/assets/credit-cards-stack.png" alt="Credit Cards Stack" />
          </div>
        </div>
        <label className="favorite">
          <input defaultChecked type="checkbox" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </label>
        <div className="content">
          <div className="brand">بطائق إلكترونية مسبقة الدفع</div>
          <div className="product-name">بطاقة دفع رقمية جاهزة للاستخدام الفوري</div>
          <div className="loading-indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="color-size-container">
            <div className="colors">
              <ul className="colors-container">
                <li className="payment-card visa" aria-label="Visa">
                  <div className="card-icon premium-card visa">
                    <div className="card-brand">VISA</div>
                  </div>
                </li>
                <li className="payment-card mastercard" aria-label="Mastercard">
                  <div className="card-icon premium-card mastercard">
                    <div className="card-circles">
                      <div className="circle red"></div>
                      <div className="circle yellow"></div>
                    </div>
                  </div>
                </li>
                <li className="payment-card googleplay" aria-label="Google Play">
                  <div className="card-icon premium-card googleplay">
                    <div className="card-logo">▶</div>
                  </div>
                </li>
                <li className="payment-card roblox" aria-label="Roblox">
                  <div className="card-icon premium-card roblox">
                    <div className="card-brand">R</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="service-info-bar">
            <div className="service-header">
              <div className="service-level">
                <span className="level-icon">⭐</span>
                <span className="level-text">بطاقات رقمية</span>
              </div>
              <div className="service-duration">
                <span className="duration-icon">🚀</span>
                <span className="duration-text">تفعيل فوري</span>
              </div>
            </div>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '95%'}}></div>
              </div>
              <span className="progress-percentage">95%</span>
            </div>
            <div className="service-stats">
              <div className="stat-item">
                <span className="stat-icon">🎯</span>
                <span className="stat-text">تم بيع +250 بطاقة</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">💎</span>
                <span className="stat-text">ثقة +800 عميل</span>
              </div>
            </div>
            <div className="service-features">
              <div className="feature-item">
                <FiTruck className="feature-icon" />
                <span className="feature-text">إرسال فوري</span>
              </div>
              <div className="feature-item">
                <FiShield className="feature-icon" />
                <span className="feature-text">أمان مضمون</span>
              </div>
              <div className="feature-item">
                <FiGift className="feature-icon" />
                <span className="feature-text">عروض حصرية</span>
              </div>
            </div>
          </div>
          <div className="divider" aria-hidden="true" />

          {/* شريط الثقة */}
          <div className="trust-bar">
            <div className="trust-item">
              <div className="trust-rating">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span className="rating-text">4.9</span>
              </div>
            </div>
            <div className="trust-separator">|</div>
            <div className="trust-item">
              <span className="trust-icon">🛡️</span>
              <span className="trust-text">آمن 100%</span>
            </div>
            <div className="trust-separator">|</div>
            <div className="trust-item">
              <span className="trust-icon">✅</span>
              <span className="trust-text">موثق</span>
            </div>
          </div>

          {/* المساحة الفارغة حيث كانت الأيقونات */}
          <div className="empty-space"></div>

        </div>

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --accent-color: #ffd426;
    position: relative;
    width: 260px; /* زيادة العرض من 240px إلى 260px */
    background: white;
    border-radius: 1.2rem; /* زيادة الانحناء قليلاً */
    padding: 0.4rem; /* زيادة الحشو قليلاً */
    padding-bottom: 0.8rem; /* تقليل المسافة من الأسفل لإزالة الفراغ */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 50px 30px -20px, 
                rgba(0, 0, 0, 0.1) 0px 20px 25px -15px; /* ظل مزدوج للعمق */
    transition: all 0.5s ease-in-out;
    direction: rtl;
    overflow: visible; /* allow elements (e.g., close button) to sit outside card bounds */
    z-index: 10;
  }

  /* Screen dim background behind mini overlay */
  .screen-dim { position: fixed; inset: 0; background: rgba(17,24,39,0.6); backdrop-filter: blur(0.5px); z-index: 9998; pointer-events: auto; }
  [data-open="false"] .screen-dim { display: none; }

  /* Mini overlay that matches the card bounds */
  .mini-overlay { position: absolute; inset: 0; background: transparent; border-radius: inherit; z-index: 10000; display: flex; flex-direction: column; box-shadow: none; animation: fadeIn 200ms ease-out; }

  .mini-overlay .close-btn { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); background: #111827; color: #fff; border: none; border-radius: 999px; width: 26px; height: 26px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0.95; z-index: 30; box-shadow: 0 6px 12px rgba(0,0,0,0.25); }

  .mini-content { 
    padding: 0.75rem 0.75rem 1rem 0.75rem; 
    padding-top: 2.2rem; 
    color: #2d3748; /* لون أغمق للوضوح */
    height: 100%; 
    font-family: 'Tajawal', 'IBM Plex Sans Arabic', 'Cairo', sans-serif;
  }

  .mini-payments { display:flex; justify-content:center; }
  .mini-overlay .colors-container { margin-top: 0; }

  /* Same button style but as grid inside overlay */
  .mini-overlay .colors-container { list-style-type: none; display: grid; grid-template-columns: repeat(4, 50px); gap: 10px 10px; justify-content: center; justify-items: center; align-items: start; font-size: 0.5rem; margin: 0; padding: 0; width: 100%; max-width: 240px; }

  .mini-overlay .payment-card { position: relative; cursor: pointer; transition: transform 0.2s ease; width: 56px; display: flex; flex-direction: column; align-items: center; gap: 0.15rem; }
  .mini-overlay .payment-card:hover { transform: scale(1.05); }
  .mini-overlay .payment-card .label-text { 
    font-size: 0.55rem; /* حجم أكبر قليلاً للوضوح */
    color: #4a5568; /* لون أغمق للتباين */
    font-family: 'Tajawal', 'IBM Plex Sans Arabic', 'Cairo', sans-serif;
    font-weight: 600; /* وزن أقوى */
    line-height: 1.3; 
    text-align: center; 
  }
  .mini-overlay .payment-card .card-icon.real-icon { 
    width: 50px !important; 
    height: 32px !important; 
    display: inline-flex !important; 
    align-items: center !important; 
    justify-content: center !important; 
    background: transparent !important; 
    padding: 3px !important; 
    border-radius: 6px !important; 
    overflow: visible !important;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1) !important;
    border: none !important;
    transition: all 0.2s ease-in-out !important;
  }
  .mini-overlay .payment-card .card-icon.real-icon svg,
  .mini-overlay .payment-card .card-icon.real-icon img { width: 26px; height: 26px; transform: scale(1.0); transform-origin: center; }

  .card .image-container { 
    position: relative; 
    width: 100%; 
    height: 140px; /* زيادة الارتفاع من 130px */
    border-radius: 0.8rem; 
    border-top-left-radius: 4.5rem; /* زيادة الانحناء */
    margin-bottom: 1.3rem; /* زيادة المسافة السفلية */
    overflow: visible; 
  }
  .card .image-container .icon-image { filter: drop-shadow(0 0 0 rgba(0,0,0,0)); mix-blend-mode: normal; opacity: 0.95; }
  .card .image-container .icon-engrave { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 120px; height: 120px; pointer-events: none; }
  .card .image-container .icon-engrave .icon { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
  .card .image-container .icon-engrave .icon.base { color: rgba(120,120,120,0.22); filter: blur(0.3px); }
  .card .image-container .icon-engrave .icon.light { color: rgba(255,255,255,0.55); mix-blend-mode: screen; transform: translate(-50%, calc(-50% - 1px)); }
  .card .image-container .icon-engrave .icon.dark { color: rgba(0,0,0,0.15); mix-blend-mode: multiply; filter: blur(0.2px); transform: translate(calc(-50% + 1px), calc(-50% + 1px)); }


  .card .image-container .status-dot { 
    position: absolute; 
    top: 8px; 
    left: 10px; 
    width: 10px; /* زيادة الحجم */
    height: 10px; 
    border-radius: 50%; 
    box-shadow: 0 0 0 3px #ffffff, 0 2px 4px rgba(0,0,0,0.15); /* ظل أوضح */
  }
  .card .image-container .status-dot.online { background: #22c55e; }
  .card .image-container .status-dot.offline { background: #9ca3af; }

  .card .image-container .animated-cards-stack {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: cards-entrance 1.2s ease-out forwards;
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.25));
  }

  .card .image-container .animated-cards-stack img {
    width: 100px;
    height: auto;
    max-width: 100px;
    border-radius: 8px;
  }

  @keyframes cards-entrance {
    0% { 
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0;
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.8;
    }
    100% { 
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  .card .image-container .svg { 
    height: 100%; 
    width: 100%; 
    border-radius: inherit;
    position: relative;
    overflow: hidden;
    /* خلفية متدرجة واضحة */
    background: linear-gradient(135deg, 
      #ffffff 0%, 
      #f1f5f9 25%, 
      #e2e8f0 50%, 
      #cbd5e0 75%, 
      #94a3b8 100%
    );
    /* ظلال داخلية واضحة */
    box-shadow: 
      inset 0 8px 16px rgba(255,255,255,0.8),
      inset 0 -8px 16px rgba(0,0,0,0.3),
      inset 8px 0 12px rgba(255,255,255,0.4),
      inset -8px 0 12px rgba(0,0,0,0.2);
  }

  /* تأثير البريق الواضح */
  .card .image-container .svg::before {
    content: '';
    position: absolute;
    top: 0;
    left: -150px;
    width: 150px;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.8) 50%, 
      rgba(255,255,255,0) 100%
    );
    animation: visible-shine 3s ease-in-out infinite;
    z-index: 2;
  }

  /* نقاط واضحة */
  .card .image-container .svg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 2px, transparent 2px),
      radial-gradient(circle at 60% 40%, rgba(0,0,0,0.2) 1px, transparent 1px),
      radial-gradient(circle at 80% 70%, rgba(255,255,255,0.5) 1.5px, transparent 1.5px),
      radial-gradient(circle at 30% 80%, rgba(0,0,0,0.15) 1px, transparent 1px);
    background-size: 50px 50px, 30px 30px, 60px 60px, 40px 40px;
    z-index: 1;
  }

  @keyframes visible-shine {
    0% {
      left: -150px;
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      left: calc(100% + 50px);
      opacity: 0;
    }
  }

  .card .image-container .toggle-wrapper { 
    position: absolute; 
    left: 22px; /* تحسين الموضع */
    bottom: -22px; /* تحسين الموضع */
    z-index: 4; 
    transform: scale(0.65); /* زيادة الحجم قليلاً */
    transform-origin: left bottom; 
  }

  .card .favorite { 
    position: absolute; 
    width: 18px; /* زيادة الحجم */
    height: 18px; 
    top: 10px; 
    left: 10px; 
    cursor: pointer; 
    z-index: 5; /* التأكد من الظهور فوق العناصر الأخرى */
  }
  .card .favorite input { position: absolute; opacity: 0; width: 0; height: 0; }
  .card .favorite input:checked ~ svg { animation: circle-bounce 0.3s; fill: #22c55e; filter: drop-shadow(0px 2px 3px rgba(34, 197, 94, 0.4)); }
  .card .favorite svg { fill: #d1d5db; transition: all 0.2s ease; }

  .card .content { 
    padding: 0 20px; /* زيادة الحشو الجانبي */
    margin-bottom: 8px; /* تقليل المسافة من الأسفل */
  }

  .card .content .brand { 
    font-family: 'Tajawal', 'IBM Plex Sans Arabic', 'Noto Sans Arabic', 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 700; 
    font-size: 0.9rem; /* زيادة الحجم قليلاً مع البطاقة الأكبر */
    color: #2d3748; 
    text-align: right; 
    margin-bottom: 12px; /* زيادة المسافة */
    line-height: 1.2; 
    letter-spacing: 0.01em; 
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
  }

  .card .content .product-name { 
    font-family: 'Tajawal', 'IBM Plex Sans Arabic', 'Noto Sans Arabic', 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 500; 
    color: #1a202c; 
    font-size: 0.82rem; /* زيادة الحجم قليلاً */
    margin-bottom: 15px; /* زيادة المسافة */
    text-align: right; 
    line-height: 1.5; 
    letter-spacing: 0.005em; 
    text-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.06); 
    max-width: 100%;
    word-spacing: 0.08em; 
  }

  .card .content .loading-indicator { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    gap: 0.3rem; /* زيادة المسافة بين النقاط */
    margin-bottom: 1.2rem; /* زيادة المسافة */
    padding: 0.4rem 0; /* زيادة الحشو */
  }
  .card .content .loading-indicator .dot { 
    width: 5px; /* زيادة حجم النقاط */
    height: 5px; 
    border-radius: 50%; 
    background-color: #F79E1B; 
    animation: typing-dots 1.4s infinite ease-in-out; 
  }
  .card .content .loading-indicator .dot:nth-child(1) { animation-delay: -0.32s; }
  .card .content .loading-indicator .dot:nth-child(2) { animation-delay: -0.16s; }
  .card .content .loading-indicator .dot:nth-child(3) { animation-delay: 0; }

  .card .content .color-size-container { display: flex; justify-content: space-between; text-transform: uppercase; font-size: 0.7rem; font-weight: 700; color: #a8a8a8; gap: 2rem; margin-bottom: 1.5rem; }
  .card .content .color-size-container > * { flex: 1; }

  .card .content .color-size-container .colors .colors-container { list-style-type: none; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.3rem; font-size: 0.5rem; margin-top: 0.2rem; }

  /* تحسين نصوص الميزات العربية */
  .card .promo-row { 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    gap: 0.5rem; /* زيادة المسافة بين العناصر */
    margin-top: 0.6rem; 
    color: #4a5568; 
    font-family: 'Tajawal', 'IBM Plex Sans Arabic', 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600; 
    font-size: 0.6rem; /* زيادة الحجم قليلاً */
  }
  .card .promo-row .promo-item { 
    display: inline-flex; 
    align-items: center; 
    gap: 0.3rem; /* زيادة المسافة بين الأيقونة والنص */
    background: #ffffff; 
    border: 1px solid #e2e8f0; 
    border-radius: 999px; 
    padding: 4px 7px; /* زيادة الحشو */
    box-shadow: 0 2px 6px rgba(0,0,0,0.1); /* ظل أقوى */
    flex: 1; 
    justify-content: center; 
    transition: all 0.2s ease; /* إضافة تأثير انتقال */
  }
  .card .promo-row .promo-item:hover { 
    transform: translateY(-1px); /* تأثير رفع خفيف عند التمرير */
    box-shadow: 0 4px 8px rgba(0,0,0,0.15); 
  }
  .card .promo-row .promo-item svg { 
    width: 13px; /* زيادة حجم الأيقونات */
    height: 13px; 
    color: #3182ce; 
    flex-shrink: 0; 
  }
  .card .promo-row .promo-item span {
    font-family: 'Tajawal', 'IBM Plex Sans Arabic', 'Cairo', sans-serif;
    font-weight: 600;
    font-size: 0.6rem; /* زيادة حجم النص */
    color: #2d3748; 
    line-height: 1.2;
    white-space: nowrap; 
  }

  /* Remove all old conflicting CSS rules */

  /* PREMIUM CARD ICON STYLES - UNIFIED DESIGN SYSTEM */
  
  /* Base Premium Card Style */
  .premium-card {
    width: 42px !important; /* زيادة العرض */
    height: 28px !important; /* زيادة الارتفاع */
    border-radius: 7px !important; /* زيادة الانحناء */
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    cursor: pointer !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    font-weight: 700 !important;
    font-size: 9px !important; /* زيادة حجم النص */
    letter-spacing: 0.5px !important;
    box-shadow: 
      0 3px 12px rgba(0, 0, 0, 0.18), /* ظل أقوى */
      0 2px 4px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    overflow: hidden !important;
  }

  /* Premium Card Gradients & Colors */
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
    font-size: 12px !important;
  }

  .premium-card.roblox {
    background: linear-gradient(135deg, #e74c3c 0%, #c0392b 50%, #a93226 100%) !important;
    color: #ffffff !important;
    font-size: 12px !important;
    font-weight: 900 !important;
  }

  .premium-card.playstation {
    background: linear-gradient(135deg, #003791 0%, #0050c7 50%, #003791 100%) !important;
    color: #ffffff !important;
    font-size: 10px !important;
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
    font-size: 14px !important;
  }

  .premium-card.shein {
    background: linear-gradient(135deg, #000000 0%, #2c2c2c 50%, #000000 100%) !important;
    color: #ffffff !important;
    font-size: 7px !important;
    font-weight: 900 !important;
  }

  .premium-card.steam {
    background: linear-gradient(135deg, #1b2838 0%, #2a475e 50%, #1b2838 100%) !important;
    color: #66c0f4 !important;
    font-size: 14px !important;
  }

  .premium-card.fortnite {
    background: linear-gradient(135deg, #6a5acd 0%, #8a7dda 50%, #5a4fcf 100%) !important;
    color: #ffffff !important;
    font-size: 12px !important;
    font-weight: 900 !important;
  }

  .premium-card.razer {
    background: linear-gradient(135deg, #00ff00 0%, #44ff44 50%, #00cc00 100%) !important;
    color: #000000 !important;
    font-size: 12px !important;
    font-weight: 900 !important;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) !important;
  }

  .premium-card.flower {
    background: linear-gradient(135deg, #ff69b4 0%, #ff99cc 50%, #ff1493 100%) !important;
    color: #ffffff !important;
    font-size: 14px !important;
  }

  /* Mastercard Circles */
  .card-circles {
    display: flex !important;
    align-items: center !important;
    gap: -2px !important;
  }

  .card-circles .circle {
    width: 12px !important;
    height: 12px !important;
    border-radius: 50% !important;
    opacity: 0.9 !important;
  }

  .card-circles .circle.red {
    background: #eb001b !important;
    z-index: 2 !important;
  }

  .card-circles .circle.yellow {
    background: #ff5f00 !important;
    margin-left: -6px !important;
    z-index: 1 !important;
  }

  /* Hover Effects - Main Card */
  .card .premium-card:hover {
    transform: translateY(-2px) scale(1.08) !important;
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.25),
      0 4px 12px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
  }

  /* Active Effects - Main Card */
  .card .premium-card:active {
    transform: translateY(0px) scale(1.02) !important;
    box-shadow: 
      0 3px 12px rgba(0, 0, 0, 0.2),
      0 1px 4px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
  }

  /* Mini Overlay Premium Card Styles */
  .mini-overlay .premium-card {
    width: 50px !important;
    height: 32px !important;
    font-size: 9px !important;
  }

  .mini-overlay .premium-card.googleplay,
  .mini-overlay .premium-card.itunes,
  .mini-overlay .premium-card.steam,
  .mini-overlay .premium-card.flower {
    font-size: 16px !important;
  }

  .mini-overlay .premium-card.playstation {
    font-size: 12px !important;
  }

  .mini-overlay .premium-card.razer {
    font-size: 14px !important;
  }

  /* Mini Overlay Hover Effects */
  .mini-overlay .premium-card:hover {
    transform: translateY(-3px) scale(1.1) !important;
    box-shadow: 
      0 12px 35px rgba(0, 0, 0, 0.3),
      0 6px 15px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
  }

  /* Mini Overlay Active Effects */
  .mini-overlay .premium-card:active {
    transform: translateY(-1px) scale(1.05) !important;
    box-shadow: 
      0 6px 20px rgba(0, 0, 0, 0.25),
      0 3px 8px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
  }




  /* Blue divider under rating spanning full card width */
  .card .divider { 
    height: 2.5px; /* زيادة السماكة قليلاً */
    width: 100%; 
    background: linear-gradient(90deg, #2563EB 0%, #3b82f6 100%); /* تدرج لوني */
    opacity: 0.9; 
    margin: 2.8rem 0 0.8rem; /* إضافة مسافة فاصلة بين الخط الأزرق وشريط الثقة */
    border-radius: 2px; /* إضافة انحناء خفيف */
  }



  /* Service Info Bar Styles */
  .card .content .service-info-bar {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border: 1px solid #cbd5e0;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 0.8rem;
    font-family: 'Tajawal', 'IBM Plex Sans Arabic', 'Cairo', sans-serif;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .card .content .service-info-bar .service-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .card .content .service-info-bar .service-level,
  .card .content .service-info-bar .service-duration {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .card .content .service-info-bar .level-icon,
  .card .content .service-info-bar .duration-icon {
    font-size: 14px;
  }

  .card .content .service-info-bar .level-text {
    color: #2d3748;
    font-weight: 700;
    font-size: 0.75rem;
  }

  .card .content .service-info-bar .duration-text {
    color: #4a5568;
    font-weight: 600;
    font-size: 0.7rem;
  }

  .card .content .service-info-bar .progress-container {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .card .content .service-info-bar .progress-bar {
    flex: 1;
    height: 6px;
    background: #e2e8f0;
    border-radius: 3px;
    overflow: hidden;
  }

  .card .content .service-info-bar .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #38a169 0%, #48bb78 50%, #38a169 100%);
    border-radius: 3px;
    transition: width 0.5s ease;
  }

  .card .content .service-info-bar .progress-percentage {
    color: #38a169;
    font-weight: 700;
    font-size: 0.7rem;
    min-width: 30px;
    text-align: right;
  }

  .card .content .service-info-bar .service-stats {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  .card .content .service-info-bar .stat-item {
    display: flex;
    align-items: center;
    gap: 3px;
    flex: 1;
  }

  .card .content .service-info-bar .stat-icon {
    font-size: 12px;
  }

  .card .content .service-info-bar .stat-text {
    color: #4a5568;
    font-weight: 600;
    font-size: 0.65rem;
    line-height: 1.2;
  }

  .card .content .service-info-bar .service-features {
    display: flex;
    justify-content: space-between;
    gap: 6px;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #e2e8f0;
  }

  .card .content .service-info-bar .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    flex: 1;
    padding: 4px;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .card .content .service-info-bar .feature-item:hover {
    background: rgba(56, 161, 105, 0.1);
    transform: translateY(-1px);
  }

  .card .content .service-info-bar .feature-icon {
    width: 16px;
    height: 16px;
    color: #38a169;
    flex-shrink: 0;
  }

  .card .content .service-info-bar .feature-text {
    font-family: 'Tajawal', 'IBM Plex Sans Arabic', 'Cairo', sans-serif;
    font-weight: 600;
    font-size: 0.6rem;
    color: #4a5568;
    line-height: 1.2;
    text-align: center;
  }

  .card .content .service-info-bar:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* Trust Bar Styles */
  .card .content .trust-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 0;
    margin: 0;
    font-family: 'Tajawal', 'IBM Plex Sans Arabic', 'Cairo', sans-serif;
    background: none;
    border: none;
    box-shadow: none;
  }

  .card .content .trust-bar .trust-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .card .content .trust-bar .trust-separator {
    color: #cbd5e0;
    font-weight: 300;
    font-size: 0.7rem;
    opacity: 0.8;
  }

  .card .content .trust-bar .trust-rating {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .card .content .trust-bar .stars {
    font-size: 0.7rem;
    line-height: 1;
    color: #fbbf24;
  }

  .card .content .trust-bar .rating-text {
    font-weight: 700;
    font-size: 0.7rem;
    color: #2d3748;
  }

  .card .content .trust-bar .trust-icon {
    font-size: 0.8rem;
    line-height: 1;
  }

  .card .content .trust-bar .trust-text {
    font-weight: 600;
    font-size: 0.65rem;
    color: #4a5568;
    line-height: 1.2;
    white-space: nowrap;
  }

  .card .content .empty-space {
    height: 0;
    margin-bottom: 0;
  }

  .card:hover { transform: scale(1.03); }

  @keyframes typing-dots { 0%, 80%, 100% { transform: scale(1); opacity: 0.5; } 40% { transform: scale(1.2); opacity: 1; } }
  @keyframes circle-bounce { 0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } }
  @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
`;

export default ProductCard;