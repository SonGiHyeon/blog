import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ✅ App.tsx에서 가져오기
import BlockChainInfo from './BlockChainInfo';
import Web from './Web';
import JavaScript from './JavaScript';
import JavaScriptAdvanced from './JavaScriptAdvanced';
import ReactAdvanced from './ReactAdvanced';
import BlockChaintrilemma from './BlockChaintrilemma';
import BlockChainNetwork from './BlockChainNetwork';
import DAppInfo from './DAppInfo';
import TokenomicsResearch from './TokenomicsResearch';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Index = () => {
  // 상태 변수: 현재 표시할 컴포넌트 선택
  const [activeComponent, setActiveComponent] = useState<'App' | 'BlockChainInfo' | 'Web' | 'JavaScript' | 'JavaScriptAdvanced' | 'ReactAdvanced' | 'BlockChaintrilemma' | 'BlockChainNetwork' | 'TokenomicsResearch'
    | 'DAppInfo'>('App');

  // 컴포넌트 변경 함수
  const changeComponent = (component: 'App' | 'BlockChainInfo' | 'Web' | 'JavaScript' | 'JavaScriptAdvanced' | 'ReactAdvanced' | 'BlockChaintrilemma' | 'BlockChainNetwork' | 'DAppInfo' | 'TokenomicsResearch') => {
    setActiveComponent(component);
  };

  return (
    <React.StrictMode>
      <div>
        {/* 컴포넌트 선택을 위한 버튼 */}
        <button onClick={() => changeComponent('App')}>메인</button>
        <button onClick={() => changeComponent('BlockChainInfo')}>BlockChainInfo</button>
        <button onClick={() => changeComponent('Web')}>Web</button>
        <button onClick={() => changeComponent('JavaScript')}>JavaScript</button>
        <button onClick={() => changeComponent('JavaScriptAdvanced')}>JavaScript Advanced</button>
        <button onClick={() => changeComponent('ReactAdvanced')}>React Advanced</button>
        <button onClick={() => changeComponent('BlockChaintrilemma')}>BlockChain trilemma</button>
        <button onClick={() => changeComponent('BlockChainNetwork')}>BlockChainNetwork</button>
        <button onClick={() => changeComponent('DAppInfo')}>DAppInfo</button>
        <button onClick={() => changeComponent('DAppInfo')}>DAppInfo</button>
        <button onClick={() => changeComponent('TokenomicsResearch')}>TokenomicsResearch</button>


        {/* 상태에 맞는 컴포넌트만 렌더링 */}
        {activeComponent === 'App' && <App />}
        {activeComponent === 'BlockChainInfo' && <BlockChainInfo />}
        {activeComponent === 'Web' && <Web />}
        {activeComponent === 'JavaScript' && <JavaScript />}
        {activeComponent === 'JavaScriptAdvanced' && <JavaScriptAdvanced />}
        {activeComponent === 'ReactAdvanced' && <ReactAdvanced />}
        {activeComponent === 'BlockChaintrilemma' && <BlockChaintrilemma />}
        {activeComponent === 'BlockChainNetwork' && <BlockChainNetwork />}
        {activeComponent === 'DAppInfo' && <DAppInfo />}
        {activeComponent === 'TokenomicsResearch' && <TokenomicsResearch />}
      </div>
    </React.StrictMode>
  );
};

root.render(<Index />);
