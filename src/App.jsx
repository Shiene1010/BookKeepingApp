import React, { useState } from 'react';
import './index.css';
import Scanner from './components/Scanner';

const SeasonalItem = ({ name, category, price, isNewInSeason, isLocal }) => (
  <div className="card-secondary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{name}</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <span className={`chip ${category === '제철' ? 'chip-seasonal' : 'chip-luxury'}`}>{category}</span>
        {isLocal && <span className="chip" style={{ background: '#e8f5e9', color: '#2e7d32', fontSize: '0.75rem' }}>로컬푸드</span>}
        {isNewInSeason && <span className="text-muted" style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>추천 ⭐️</span>}
      </div>
    </div>
    <div style={{ textAlign: 'right' }}>
      <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>{price.toLocaleString()}원</div>
      <div className="text-muted">하나로마트 보라점</div>
    </div>
  </div>
);

function App() {
  const [items, setItems] = useState([
    { name: '남해 시금치 (1단)', category: '제철', price: 1500, isNewInSeason: true, isLocal: true },
    { name: '한우 설도 (1+등급)', category: '필수', price: 17970, isNewInSeason: false, isLocal: true },
    { name: '로컬 표고버섯', category: '제철', price: 5200, isNewInSeason: true, isLocal: true },
    { name: '초당 두부 (550g)', category: '필수', price: 2980, isNewInSeason: false, isLocal: false },
    { name: '로컬 흙대파', category: '제철', price: 1690, isNewInSeason: true, isLocal: true },
  ]);

  const handleScanComplete = (scanResult) => {
    const newItems = scanResult.items.map(item => ({
      name: item.name,
      category: item.isSeasonal ? '제철' : '일반',
      price: item.price,
      isNewInSeason: true
    }));
    setItems([...newItems, ...items]);
  };

  return (
    <div className="container">
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.1', marginBottom: '8px' }}>
          봄의 식탁,<br />채우고 계신가요?
        </h1>
        <p className="text-muted">2026년 3월 29일 • 현재 봄의 정점입니다</p>
      </header>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '1.5rem' }}>3월 제철 구매 현황</h2>
          <span className="text-muted" style={{ fontWeight: '600' }}>작년 대비 +12%</span>
        </div>

        {items.map((item, idx) => (
          <SeasonalItem key={idx} {...item} />
        ))}
      </section>

      <section style={{ marginTop: '24px' }}>
        <div className="card" style={{ background: 'var(--surface-container-high)' }}>
          <h3 style={{ marginBottom: '12px' }}>작년 3-4월 영수증 리포트</h3>
          <p className="text-muted" style={{ marginBottom: '16px' }}>
            보라동 하나로마트에서 주로 <strong>로컬푸드</strong>와 <strong>한우</strong>를 구매하셨네요. <br />
            작년 이맘때는 <strong>시금치</strong>와 <strong>표고버섯</strong>이 가장 저렴했습니다.
          </p>
          <div style={{ height: '8px', background: 'white', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
            <div style={{ width: '45%', background: 'var(--primary)' }} title="로컬푸드"></div>
            <div style={{ width: '35%', background: 'var(--secondary)' }} title="신선식품"></div>
            <div style={{ width: '20%', background: 'var(--tertiary)' }} title="가치소비"></div>
          </div>
        </div>
      </section>

      <Scanner onScanComplete={handleScanComplete} />

      <div style={{ height: '100px' }}></div> {/* Spacer for fixed button */}
    </div>
  );
}

export default App;
