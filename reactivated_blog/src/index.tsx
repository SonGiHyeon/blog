import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ✅ App.tsx에서 가져오기
import BlockChainInfo from './BlockChainInfo';
import Web from './Web';
import JavaScript from './JavaScript';
import JavaScriptAdvanced from './JavaScriptAdvanced';
import ReactAdvanced from './ReactAdvanced';
import BlockChainNetwork from './BlockChainNetwork';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Index = () => {
  // 상태 변수: 현재 표시할 컴포넌트 선택
  const [activeComponent, setActiveComponent] = useState<'App' | 'BlockChainInfo' | 'Web' | 'JavaScript' | 'JavaScriptAdvanced' | 'ReactAdvanced' | 'BlockChainNetwork'>('App');

  // 컴포넌트 변경 함수
  const changeComponent = (component: 'App' | 'BlockChainInfo' | 'Web' | 'JavaScript' | 'JavaScriptAdvanced' | 'ReactAdvanced' | 'BlockChainNetwork') => {
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
        <button onClick={() => changeComponent('BlockChainNetwork')}>BlockChain Network</button>

        {/* 상태에 맞는 컴포넌트만 렌더링 */}
        {activeComponent === 'App' && <App />}
        {activeComponent === 'BlockChainInfo' && <BlockChainInfo />}
        {activeComponent === 'Web' && <Web />}
        {activeComponent === 'JavaScript' && <JavaScript />}
        {activeComponent === 'JavaScriptAdvanced' && <JavaScriptAdvanced />}
        {activeComponent === 'ReactAdvanced' && <ReactAdvanced />}
        {activeComponent === 'BlockChainNetwork' && <BlockChainNetwork />}
      </div>
    </React.StrictMode>
  );
};

root.render(<Index />);
