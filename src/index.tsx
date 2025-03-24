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
            <button onClick={() => setActiveContent('Truffle & Hardhat')}>Truffle & Hardhat</button>
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
