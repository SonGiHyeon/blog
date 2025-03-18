// Router 추가 전 코드

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import BlockChainInfo from './BlockChainInfo';
// import Web from './Web';
// import JavaScript from './JavaScript';
// import JavaScriptAdvanced from './JavaScriptAdvanced';
// import ReactAdvanced from './ReactAdvanced';
// import BlockChaintrilemma from './BlockChaintrilemma';
// import BlockChainNetwork from './BlockChainNetwork';
// import TokenomicsResearch from './TokenomicsResearch';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// const Index = () => {
//   const [activeComponent, setActiveComponent] = useState<'App' | 'BlockChainInfo' | 'Web' | 'JavaScript' | 'JavaScriptAdvanced' | 'ReactAdvanced' | 'BlockChaintrilemma' | 'BlockChainNetwork' | 'TokenomicsResearch'>('App');
//   const [activeContent, setActiveContent] = useState<string>('블록체인 구조와 특징');

//   // 컴포넌트 전환 함수
//   const changeComponent = (component: typeof activeComponent) => {
//     setActiveComponent(component);

//     // 'BlockChainInfo'가 선택되면 '블록체인 구조와 특징'을 기본 콘텐츠로 설정
//     if (component === 'BlockChainInfo') {
//       setActiveContent('블록체인 구조와 특징');
//     } else if (component === 'Web') { // 'Web'이 선택되면 '웹 개요'을 기본 콘텐츠로 설정
//       setActiveContent('웹 개요');
//     }
//     else {
//       setActiveContent(''); // 다른 컴포넌트 선택 시 콘텐츠 초기화
//     }
//   };

//   // BlockChainInfo 사이드바 동적 렌더링
//   const renderSidebarContent = () => {
//     switch (activeComponent) {
//       case 'BlockChainInfo':
//         return (
//           <>
//             <button onClick={() => setActiveContent('블록체인 구조와 특징')}>블록체인 구조와 특징</button>
//             <button onClick={() => setActiveContent('해시함수')}>해시함수</button>
//             <button onClick={() => setActiveContent('블록 정보')}>블록 정보</button>
//             <button onClick={() => setActiveContent('분산 원장')}>분산 원장</button>
//             <button onClick={() => setActiveContent('이더리움')}>이더리움</button>
//           </>
//         );
//       case 'Web':
//         return (
//           <>
//             <button onClick={() => setActiveContent('웹 개요')}>웹 개요</button>
//             <button onClick={() => setActiveContent('Git 개요')}>Git 개요</button>
//             <button onClick={() => setActiveContent('HTML')}>HTML</button>
//             <button onClick={() => setActiveContent('CSS')}>CSS</button>
//             <button onClick={() => setActiveContent('JavaScript')}>JavaScript</button>
//           </>
//         );
//       default:
//         return (
//           <>
//             <button onClick={() => changeComponent('App')}>메인</button>
//             <button onClick={() => changeComponent('BlockChainInfo')}>BlockChainInfo</button>
//             <button onClick={() => changeComponent('Web')}>Web</button>
//             <button onClick={() => changeComponent('JavaScript')}>JavaScript</button>
//             <button onClick={() => changeComponent('JavaScriptAdvanced')}>JavaScript Advanced</button>
//             <button onClick={() => changeComponent('ReactAdvanced')}>React Advanced</button>
//             <button onClick={() => changeComponent('BlockChaintrilemma')}>BlockChain trilemma</button>
//             <button onClick={() => changeComponent('BlockChainNetwork')}>BlockChainNetwork</button>
//             <button onClick={() => changeComponent('TokenomicsResearch')}>TokenomicsResearch</button>
//           </>
//         );
//     }
//   };

//   return (
//     <React.StrictMode>
//       <div className="layout">
//         {/* 상단 네비게이션 바 */}
//         <h1>GiHyeon's Blog</h1>
//         <nav className="top-navbar">
//           <button onClick={() => changeComponent('App')}>메인</button>
//           <button onClick={() => changeComponent('BlockChainInfo')}>BlockChainInfo</button>
//           <button onClick={() => changeComponent('Web')}>Web</button>
//           <button onClick={() => changeComponent('JavaScript')}>JavaScript</button>
//           <button onClick={() => changeComponent('JavaScriptAdvanced')}>JavaScript Advanced</button>
//           <button onClick={() => changeComponent('ReactAdvanced')}>React Advanced</button>
//           <button onClick={() => changeComponent('BlockChaintrilemma')}>BlockChain trilemma</button>
//           <button onClick={() => changeComponent('BlockChainNetwork')}>BlockChainNetwork</button>
//           <button onClick={() => changeComponent('TokenomicsResearch')}>TokenomicsResearch</button>
//         </nav>

//         <div className="main-content">
//           {/* App이 아닐 때만 사이드바 렌더링 */}
//           {activeComponent !== 'App' && (
//             <div className="sidebar">
//               {renderSidebarContent()}
//             </div>
//           )}

//           {/* 선택된 컴포넌트 렌더링 */}
//           <div className="content">
//             {activeComponent === 'App' && <App />}
//             {activeComponent === 'BlockChainInfo' && <BlockChainInfo activeContent={activeContent} />}
//             {activeComponent === 'Web' && <Web activeContent={activeContent} />}
//             {activeComponent === 'JavaScript' && <JavaScript />}
//             {activeComponent === 'JavaScriptAdvanced' && <JavaScriptAdvanced />}
//             {activeComponent === 'ReactAdvanced' && <ReactAdvanced />}
//             {activeComponent === 'BlockChaintrilemma' && <BlockChaintrilemma />}
//             {activeComponent === 'BlockChainNetwork' && <BlockChainNetwork />}
//             {activeComponent === 'TokenomicsResearch' && <TokenomicsResearch />}
//           </div>
//         </div>
//       </div>
//     </React.StrictMode>
//   );
// };

// root.render(<Index />);

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import BlockChainInfo from './BlockChainInfo';
import Web from './Web';
import JavaScript from './JavaScript';
import JavaScriptAdvanced from './JavaScriptAdvanced';
import ReactAdvanced from './ReactAdvanced';
import BlockChainNetwork from './BlockChainNetwork';
import Wallet from './Wallet';

const Sidebar = ({ setActiveContent }: { setActiveContent: (content: string) => void }) => {
  const location = useLocation();

  const renderSidebarContent = () => {
    switch (location.pathname) {
      case '/blockchain-info':
        return (
          <>
            <button onClick={() => setActiveContent('블록체인 구조와 특징')}>블록체인 구조와 특징</button>
            <button onClick={() => setActiveContent('해시함수')}>해시함수</button>
            <button onClick={() => setActiveContent('블록 정보')}>블록 정보</button>
            <button onClick={() => setActiveContent('분산 원장')}>분산 원장</button>
            <button onClick={() => setActiveContent('이더리움')}>이더리움</button>
          </>
        );
      case '/web':
        return (
          <>
            <button onClick={() => setActiveContent('웹 개요')}>웹 개요</button>
            <button onClick={() => setActiveContent('Git 개요')}>Git 개요</button>
            <button onClick={() => setActiveContent('HTML')}>HTML</button>
            <button onClick={() => setActiveContent('CSS')}>CSS</button>
            <button onClick={() => setActiveContent('JavaScript')}>JavaScript</button>
          </>
        );
      case '/javascript':
        return (
          <>
            <button onClick={() => setActiveContent('JavaScript')}>JavaScript</button>
            <button onClick={() => setActiveContent('Calculator')}>Calculator</button>
            <button onClick={() => setActiveContent('Reference type, Array & Object Learing')}>참조 배열 객체</button>
            <button onClick={() => setActiveContent('JavaScript Grammar')}>JavaScript Grammar</button>
            <button onClick={() => setActiveContent('DOM')}>DOM</button>
          </>
        )
      case '/javascript-advanced':
        return (
          <>
            <button onClick={() => setActiveContent('Higher Order Function')}>Higher Order Function</button>
            <button onClick={() => setActiveContent('Object Oriented Programming')}>Object Oriented Programming</button>
            <button onClick={() => setActiveContent('Asynchronous')}>Asynchronous</button>
            <button onClick={() => setActiveContent('React Basic')}>React Basic</button>
            <button onClick={() => setActiveContent('React SPA')}>React SPA</button>
          </>
        )
      case '/react-advanced':
        return (
          <>
            <button onClick={() => setActiveContent('React State & Props')}>React State & Props</button>
            <button onClick={() => setActiveContent('HTTP/네트워크')}>HTTP/네트워크</button>
            <button onClick={() => setActiveContent('AJAX')}>AJAX</button>
            <button onClick={() => setActiveContent('TypeScript')}>TypeScript</button>
          </>
        )
      case '/blockchain-network':
        return (
          <>
            <button onClick={() => setActiveContent('On-Chain Data')}>On-Chain Data</button>
            <button onClick={() => setActiveContent('DApp')}>DApp</button>
            <button onClick={() => setActiveContent('Wallet')}>Wallet</button>
            <button onClick={() => setActiveContent('BlockChain Trilemma')}>BlockChain Trilemma</button>
            <button onClick={() => setActiveContent('TokenomicsResearch')}>TokenomicsResearch</button>
          </>
        )
      default:
        return null;
    }
  };

  return renderSidebarContent();
};

const Index = () => {
  const [activeContent, setActiveContent] = useState<string>('블록체인 구조와 특징');
  const location = useLocation();

  // 메인 화면인 '/app'일 때는 사이드바 숨기기
  const showSidebar = !['/app', '/wallet'].includes(location.pathname);

  // URL 변경 시 기본 콘텐츠 설정
  useEffect(() => {
    if (location.pathname === '/blockchain-info') {
      setActiveContent('블록체인 구조와 특징');
    } else if (location.pathname === '/web') {
      setActiveContent('웹 개요');
    } else if (location.pathname === '/javascript') {
      setActiveContent('JavaScript');
    } else if (location.pathname === '/javascript-advanced') {
      setActiveContent('Higher Order Function');
    } else if (location.pathname === '/react-advanced') {
      setActiveContent('React State & Props');
    } else if (location.pathname === '/blockchain-network') {
      setActiveContent('On-Chain Data');
    }

    else {
      setActiveContent('');
    }
  }, [location.pathname]);

  return (
    <div className="layout">
      <h1>GiHyeon's Blog</h1>
      <nav className="top-navbar">
        <Link to="/app">메인</Link>
        <Link to="/blockchain-info">BlockChainInfo</Link>
        <Link to="/web">Web</Link>
        <Link to="/javascript">JavaScript</Link>
        <Link to="/javascript-advanced">JavaScript Advanced</Link>
        <Link to="/react-advanced">React Advanced</Link>
        <Link to="/blockchain-network">BlockChainNetwork</Link>
        <Link to="/wallet">Wallet</Link>
      </nav>

      <div className="main-content">
        {showSidebar && (
          <div className="sidebar">
            <Sidebar setActiveContent={setActiveContent} />
          </div>
        )}

        <div className="content">
          <Routes>
            {/* 기본 경로('/')로 접속했을 때 '/app'으로 리디렉션 */}
            <Route path="/" element={<Navigate to="/app" replace />} />
            <Route path="/app" element={<App />} />
            <Route path="/blockchain-info" element={<BlockChainInfo activeContent={activeContent} />} />
            <Route path="/web" element={<Web activeContent={activeContent} />} />
            <Route path="/javascript" element={<JavaScript activeContent={activeContent} />} />
            <Route path="/javascript-advanced" element={<JavaScriptAdvanced activeContent={activeContent} />} />
            <Route path="/react-advanced" element={<ReactAdvanced activeContent={activeContent} />} />
            <Route path="/blockchain-network" element={<BlockChainNetwork activeContent={activeContent} />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <Index />
  </Router>
);
