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
import NFT from './NFT';
import SolidityAdvanced from './SolidityAdvanced';
import Server from './Server';
import Backend from './Backend';
import BlockChainSecutiry from './ BlockChainSecutiry';
import AWS from './AWS';

window.Buffer = Buffer;

type SidebarContent = {
  [key: string]: string[];
};

const Sidebar = ({ setActiveContent }: { setActiveContent: (content: string) => void }) => {
  const location = useLocation();

  const sidebarContent: SidebarContent = {
    '/blockchain-info': ['블록체인 구조와 특징', '해시함수', '블록 정보', '분산 원장', '이더리움'],
    '/web': ['웹 개요', 'Git 개요', 'HTML', 'CSS', 'JavaScript'],
    '/javascript': ['JavaScript', 'Calculator', '참조, 배열, 객체', 'JavaScript Grammar', 'DOM'],
    '/javascript-advanced': ['Higher Order Function', 'Object Oriented Programming', 'Asynchronous', 'React Basic', 'React SPA'],
    '/react-advanced': ['React State & Props', 'HTTP/네트워크', 'AJAX', 'TypeScript'],
    '/blockchain-network': ['On-Chain Data', 'DApp', 'Wallet', 'BlockChain Trilemma', 'TokenomicsResearch', 'Truffle & Hardhat'],
    '/solidity': ['Solditiy Basic Grammar 1', 'Solditiy Basic Grammar 2', 'Solditiy Basic Grammar 3', 'Solditiy Basic Grammar 4', 'Solditiy Basic Grammar 5',
      'Solditiy Practice Exercise 1', 'Solditiy Practice Exercise 2', 'Solditiy Practice Exercise 3', 'Solditiy ABI', 'ERC-20', 'ERC-721', 'NFT Storage'
    ],
    '/solidity-advanced': ['Test-Driven Contract Development', 'Gas less - EIP-2612(Permit)', 'EIP 2771(Meta Transactions)', 'Upgradable', 'Defi - Uniswap', '오라클(Oracle)'],
    '/server': ['Server intro', 'Express', 'Cookie & Session & JWT', 'NestJS', 'NestJS - 컨트랙트 요청 API 1', 'NestJS - 컨트랙트 요청 API 2', 'NestJS - 컨트랙트 요청 API 3', 'NestJS - 컨트랙트 요청 API 4', 'NestJS - 컨트랙트 요청 API 5',
      'scheduling'
    ],
    '/backend': ['Database', 'SQL 기본 문법', '고급 SQL과 성능', 'NestJS & DB 설계', 'Server & DB'],
    '/blockchain-secutiry': ['블록체인 기본 원리', '스마트 컨트랙트 보안'],
    '/aws': ['AWS Front Deploy', 'AWS Back Deploy', 'Message Queue']
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
      '/solidity': 'Solditiy Basic Grammar 1',
      '/solidity-advanced': 'Test-Driven Contract Development',
      '/server': 'Server intro',
      '/backend': 'Database',
      '/blockchain-secutiry': '블록체인 기본 원리',
      '/aws': 'AWS Front Deploy'
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
        <Link to="/NFT">NFT</Link>
        <Link to="/solidity-advanced">SolidityAdvanced</Link>
        <Link to="/server">Server</Link>
        <Link to="/backend">Backend</Link>
        <Link to="/blockchain-secutiry">BlockChainSecutiry</Link>
        <Link to="/aws">AWS</Link>
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
            <Route path="/javascript-advanced" element={<JavaScriptAdvanced activeContent={activeContent} />} />
            <Route path="/react-advanced" element={<ReactAdvanced activeContent={activeContent} />} />
            <Route path="/blockchain-network" element={<BlockChainNetwork activeContent={activeContent} />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/solidity" element={<Solidity activeContent={activeContent} />} />
            <Route path="/NFT" element={<NFT activeContent={activeContent} />} />
            <Route path="/solidity-advanced" element={<SolidityAdvanced activeContent={activeContent} />} />
            <Route path="/server" element={<Server activeContent={activeContent} />} />
            <Route path="/backend" element={<Backend activeContent={activeContent} />} />
            <Route path="/blockchain-secutiry" element={<BlockChainSecutiry activeContent={activeContent} />} />
            <Route path="/aws" element={<AWS activeContent={activeContent} />} />
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
