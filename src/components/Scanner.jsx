import React, { useState } from 'react';

const Scanner = ({ onScanComplete }) => {
    const [isScanning, setIsScanning] = useState(false);

    const startScan = () => {
        setIsScanning(true);
        // Simulate OCR processing time
        setTimeout(() => {
            setIsScanning(false);
            onScanComplete({
                items: [
                    { name: '대저 짭짤이 토마토', price: 15800, isSeasonal: true },
                    { name: '햇 달래 (1봉)', price: 3200, isSeasonal: true },
                ],
                store: '하나로마트 보라동지점',
                date: '2026-03-29'
            });
        }, 2500);
    };

    return (
        <div style={{ position: 'fixed', bottom: '32px', left: '24px', right: '24px', zIndex: 1000 }}>
            {isScanning ? (
                <div className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <div className="spinner"></div>
                    영수증 분석 중...
                </div>
            ) : (
                <button className="btn-primary" onClick={startScan}>
                    영수증 사진 추가하기
                </button>
            )}

            <style>{`
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default Scanner;
