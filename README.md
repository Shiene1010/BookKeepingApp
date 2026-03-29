# 🍓 Seasonal Grocery Assistant (BookKeepingApp)

보라동 하나로마트 영수증 데이터를 분석하여 제철 식재료를 추천하고 소비 패턴을 스마트하게 관리해주는 개인화 가계부 앱입니다.

## 🚀 Live Demo
**[체험하기 (GitHub Pages)](https://Shiene1010.github.io/BookKeepingApp/)**

## ✨ 주요 기능 (Key Features)

### 1. 실시간 영수증 스캔 및 분석 (OCR Simulation)
- 사용자가 직접 찍은 영수증 사진을 업로드하여 실시간으로 품목과 가격을 추출합니다.
- 추출되는 동안 로딩 애니메이션과 스캔 라인을 통해 직관적인 진행 상황을 보여줍니다.

### 2. 제철 식재료 및 로컬푸드 큐레이션
- 현재 날짜에 맞는 제철 식재료(시금치, 달래, 주꾸미 등)를 우선적으로 추천합니다.
- 하나로마트의 특징인 '로컬푸드' 항목을 명확하게 표시해 건강하고 현명한 소비를 돕습니다.

### 3. 지능형 가격 트렌드 분석
- 새로 스캔한 영수증의 가격을 **작년 같은 달의 데이터와 즉시 비교**합니다. (예: "작년 대비 1,200원 저렴해졌어요!")
- 소비 증가/감소폭을 한눈에 파악할 수 있는 시각적 인디케이터를 제공합니다.

### 4. 계절별 가이드 및 알림
- **여름 미리보기**: 다가올 계절(여름)에 필요한 수박, 에어컨 필터 등 필수 구매 리스트를 미리 제안합니다.
- **봄철 생활 팁**: 미세먼지 마스크, 봄맞이 침구 세탁 등 계절에 맞는 가사용품 정보를 제공합니다.

### 5. 안드로이드 앱 (Samsung One UI 최적화)
- **네이티브 카메라**: 웹 업로드 대신 기기의 카메라를 직접 호출하여 영수증을 촬영합니다.
- **햅틱 피드백**: 분석 완료 시 기기의 진동을 통해 직관적인 피드백을 제공합니다.
- **One UI 레이아웃**: 삼성 갤럭시 폰에 최적화된 상단 상태바 처리 및 한 손 조작 레이아웃을 반영했습니다.

## 🛠 Tech Stack
- **Frontend**: React (Hooks), Vite
- **Native Bridge**: Capacitor
- **Styling**: Vanilla CSS (Glassmorphism, CSS Variables)
- **Design System**: [Stitch MCP](https://stitch.mcp) 기반 커스텀 테마
- **Deployment**: GitHub Pages (Web), Android Studio (Native)

## 📦 시작하기 (Getting Started)

### Web (Browser)
1. 저장소를 클론합니다.
   ```bash
   git clone https://github.com/Shiene1010/BookKeepingApp.git
   ```
2. 의존성을 설치하고 실행합니다.
   ```bash
   npm install
   npm run dev
   ```

### Android (Mobile)
1. 빌드 및 동기화를 수행합니다.
   ```bash
   npm run build
   npx cap sync android
   ```
2. Android Studio에서 프로젝트를 엽니다.
   ```bash
   npx cap open android
   ```
3. 에뮬레이터나 실기기(삼성 갤럭시 등)에서 실행(Run) 버튼을 누릅니다.

## 📸 Screenshots
![Dashboard Preview](https://github.com/Shiene1010/BookKeepingApp/raw/main/public/preview.png)
*(실제 배포된 사이트에서 확인 가능합니다)*
