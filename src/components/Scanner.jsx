import React, { useState } from 'react';

const Scanner = ({ onScanComplete }) => {
    const [isScanning, setIsScanning] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [scanText, setScanText] = useState('영수증 분석 중...');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            startScan();
        }
    };

    const startScan = () => {
        setIsScanning(true);
        setScanText('이미지 로딩 중...');

        // Step-by-step scanning simulation
        setTimeout(() => setScanText('글자 추출 중... (OCR)'), 1000);
        setTimeout(() => setScanText('품목 및 가격 매칭 중...'), 2000);
        setTimeout(() => setScanText('분석 완료!'), 3000);

        setTimeout(() => {
            setIsScanning(false);
            setPreviewUrl(null);
            onScanComplete({
                items: [
                    { name: '대저 짭짤이 토마토 (2.5kg)', category: '제철', price: 15800, isNewInSeason: true, isLocal: true },
                    { name: '삼계탕용 영계 (2마리)', category: '필수', price: 9900, isNewInSeason: false, isLocal: false },
                    { name: '로컬 햇 달래 (1봉)', category: '제철', price: 3200, isNewInSeason: true, isLocal: true },
                ],
                store: '하나로마트 보라동지점',
                date: '2026-03-29'
            });
        }, 3500);
    };

    return (
        <div style={{ position: 'fixed', bottom: '32px', left: '24px', right: '24px', zIndex: 1000 }}>
            <input
                type="file"
                id="receipt-upload"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            {isScanning ? (
                <div style={{
                    background: 'rgba(56, 107, 44, 0.95)',
                    backdropFilter: 'blur(10px)',
                    padding: '24px',
                    borderRadius: '24px',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }}>
                    {previewUrl && (
                        <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.3)' }}>
                            <img src={previewUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Scan Preview" />
                            <div className="scan-line"></div>
                        </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="spinner"></div>
                        <span style={{ fontWeight: '500' }}>{scanText}</span>
                    </div>
                </div>
            ) : (
                <label htmlFor="receipt-upload" className="btn-primary" style={{ cursor: 'pointer', textAlign: 'center', display: 'block' }}>
                    새 영수증 스캔하기
                </label>
            )}

            <style>{`
        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #fff;
          box-shadow: 0 0 8px #fff;
          animation: scan 1.5s linear infinite;
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
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
