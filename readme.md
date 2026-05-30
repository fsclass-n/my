# IT Developer Portfolio 웹사이트

자바 풀스택(950시간) 및 RPA+AI 자동화 심화(348시간) 과정을 수료한 IT 개발자의 프리미엄 원페이지 포트폴리오 웹사이트입니다.

모던한 다크 테마, 글래스모피즘(Glassmorphism) UI, 그리고 부드러운 스크롤 애니메이션이 적용되어 있으며, 별도의 Node.js 서버 환경 없이 즉시 배포할 수 있도록 정적(Static) 웹사이트 형태로 구성되었습니다.

## 📁 프로젝트 구조

```text
d:\git\202605\my\
│
├── index.html       # 메인 진입점 및 기본 HTML 구조
├── styles.css       # 다크 테마, 애니메이션, 반응형 디자인 스타일
├── app.jsx          # React 컴포넌트 로직 (Babel을 통해 브라우저에서 직접 변환)
└── images/          # 포트폴리오 썸네일 등 각종 이미지 에셋 폴더
```

---

## 💻 로컬에서 테스트하는 방법

현재 코드는 빌드 과정 없이 동작하도록 설계되었으나, 브라우저 보안 정책(CORS)으로 인해 단순히 `index.html` 파일을 더블클릭해서 열면 React 코드(`app.jsx`)를 정상적으로 불러오지 못해 빈 화면이 나올 수 있습니다. 반드시 **로컬 웹 서버**를 띄워 테스트해야 합니다.

가장 쉬운 두 가지 방법을 안내해 드립니다:

**방법 1: Python 사용하기 (추천)**
회원님의 기술 스택에 있는 Python을 활용하는 방법입니다.
1. 터미널(또는 명령 프롬프트, PowerShell)을 엽니다.
2. 프로젝트 폴더(`d:\git\202605\my`)로 이동합니다.
3. 아래 명령어를 입력합니다.
   ```bash
   python -m http.server 8000
   ```
4. 브라우저를 열고 `http://localhost:8000` 에 접속하여 확인합니다.

**방법 2: VS Code의 Live Server 확장 프로그램 사용하기**
1. VS Code로 프로젝트 폴더(`d:\git\202605\my`)를 엽니다.
2. 확장 프로그램(Extensions) 탭에서 **Live Server**를 검색하여 설치합니다.
3. `index.html` 파일을 우클릭하고 **"Open with Live Server"**를 클릭합니다. (자동으로 브라우저가 열리며 사이트가 표시됩니다.)

---

## 🚀 배포 가이드 (Netlify)

이 프로젝트는 정적 파일(`HTML/CSS/JS`)만으로 구성되어 있으므로 [Netlify](https://www.netlify.com/)에 매우 쉽고 빠르게 무료로 배포할 수 있습니다.

1. **GitHub 업로드**:
   현재 폴더(`d:\git\202605\my`)의 내용물들을 본인의 GitHub 저장소(Repository)에 커밋(Commit) 및 푸시(Push) 합니다.

2. **Netlify 연동 및 배포**:
   - [Netlify](https://app.netlify.com/)에 로그인합니다.
   - **"Add new site"** -> **"Import an existing project"** 를 클릭합니다.
   - GitHub를 선택하고, 방금 코드를 올린 저장소를 선택합니다.
   - Build Settings에서 `Build command`와 `Publish directory`는 **빈칸으로 둡니다.** (기본 루트 경로 배포)
   - **"Deploy site"** 버튼을 클릭하면 수 분 내에 웹사이트가 배포됩니다.

---

## 📧 이메일 폼(Contact) 설정 가이드 (Web3Forms)

Contact 섹션에 있는 이메일 전송 폼을 실제로 작동하게 하려면 [Web3Forms](https://web3forms.com/)의 무료 키가 필요합니다. 

1. [Web3Forms 공식 홈페이지](https://web3forms.com/)에 접속하여 `Create your Access Key` 버튼을 클릭합니다.
2. 폼을 통해 알림을 전달받고 싶은 **본인의 실제 이메일 주소**를 입력하고 키를 발급받습니다. (이메일로 Access Key가 전송됩니다.)
3. `app.jsx` 파일을 열고 약 `145`번째 줄을 찾습니다.
   ```javascript
   // Web3Forms Public Access Key (테스트용 키 혹은 실제 키 교체 필요)
   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
   ```
4. 발급받은 키를 `"YOUR_ACCESS_KEY_HERE"` 부분에 붙여넣고 저장합니다.
5. 수정된 `app.jsx` 파일을 GitHub에 다시 Push 하면 Netlify가 자동으로 재배포하며, 이후부터 폼 전송 시 해당 이메일로 메시지가 전송됩니다.

---

## 🎨 커스터마이징

*   **포트폴리오 내용 변경**: `app.jsx` 파일 내부의 `Hero`, `Skills`, `Projects` 컴포넌트에 있는 텍스트나 데이터를 본인의 이력에 맞게 수정하세요.
*   **색상 및 테마 변경**: `styles.css` 상단의 `:root` 변수(`--bg-dark`, `--accent-blue`, `--accent-purple` 등) 색상 코드를 변경하면 사이트 전체의 테마 컬러를 쉽게 바꿀 수 있습니다.
*   **이미지 교체**: `images` 폴더 내에 있는 `subway.png`, `movie.png`, `recipe.png` 파일들을 실제 본인의 프로젝트 스크린샷으로 덮어씌우면 화면에 그대로 반영됩니다.
