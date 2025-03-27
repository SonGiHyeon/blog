import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import { Buffer } from "buffer";
import './index.css';
import App from './App';
import BlockChainInfo from './BlockChainInfo';
import Web from './Web';
import JavaScript from './JavaScript';
import JavaScriptAdvanced from './JavaScriptAdvanced';
import ReactAdvanced from './ReactAdvanced';
import BlockChainNetwork from './BlockChainNetwork';
import Wallet from './Wallet';
import Explorer from './explorer';
import Solidity from './Solidity';

window.Buffer = Buffer;

type SidebarContent = {
  [key: string]: string[];
};

const Sidebar = ({ setActiveContent }: { setActiveContent: (content: string) => void }) => {
  const location = useLocation();

  const sidebarContent: SidebarContent = {
    '/blockchain-info': ['블록체인 구조와 특징', '해시함수', '블록 정보', '분산 원장', '이더리움'],
    '/web': ['웹 개요', 'Git 개요', 'HTML', 'CSS', 'JavaScript'],
    '/javascript': ['JavaScript', 'Calculator', '참조 배열 객체', 'JavaScript Grammar', 'DOM'],
    '/javascript-advanced': ['Higher Order Function', 'Object Oriented Programming', 'Asynchronous', 'React Basic', 'React SPA'],
    '/react-advanced': ['React State & Props', 'HTTP/네트워크', 'AJAX', 'TypeScript'],
    '/blockchain-network': ['On-Chain Data', 'DApp', 'Wallet', 'BlockChain Trilemma', 'TokenomicsResearch', 'Truffle & Hardhat'],
    '/solidity': ['Solditiy Basic Grammar 1', 'Solditiy Basic Grammar 2', 'Solditiy Basic Grammar 3', 'Solditiy Basic Grammar 4']
  };

  return (
    <>
      {sidebarContent[location.pathname] && (
        <div className="sidebar">
          {sidebarContent[location.pathname].map((content: string) => (
            <button key={content} onClick={() => setActiveContent(content)}>
              {content}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

const Index = () => {
  const [activeContent, setActiveContent] = useState<string>('블록체인 구조와 특징');
  const location = useLocation();

  useEffect(() => {
    const defaultContentMap: { [key: string]: string } = {
      '/blockchain-info': '블록체인 구조와 특징',
      '/web': '웹 개요',
      '/javascript': 'JavaScript',
      '/javascript-advanced': 'Higher Order Function',
      '/react-advanced': 'React State & Props',
      '/blockchain-network': 'On-Chain Data',
      '/solidity': 'Solditiy Basic Grammar 1'
    };
    setActiveContent(defaultContentMap[location.pathname] || '');
  }, [location.pathname]);

  const hideSidebarRoutes = ['/app', '/wallet', '/explorer'];
  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

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
        <Link to="/explorer">Explorer</Link>
        <Link to="/solidity">Solidity</Link>
      </nav>

      <div className="main-content">
        {showSidebar && <Sidebar setActiveContent={setActiveContent} />}
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/app" replace />} />
            <Route path="/app" element={<App />} />
            <Route path="/blockchain-info" element={<BlockChainInfo activeContent={activeContent} />} />
            <Route path="/web" element={<Web activeContent={activeContent} />} />
            <Route path="/javascript" element={<JavaScript activeContent={activeContent} />} />
            <Route path="/javascripts-advanced" element={<JavaScriptAdvanced activeContent={activeContent} />} />
            <Route path="/react-advanced" element={<ReactAdvanced activeContent={activeContent} />} />
            <Route path="/blockchain-network" element={<BlockChainNetwork activeContent={activeContent} />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/solidity" element={<Solidity activeContent={activeContent} />} />
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
