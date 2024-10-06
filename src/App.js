// src/App.js
import React from 'react';
import VRMViewer from './components/VRMViewer';
import ChatBox from './components/ChatBox';
import BottomBar from './components/BottomBar';
import QuickQuestions from './components/QuickQuestions';

function App() {
    return (
        <div className="App">
            <h1>VRM Viewer</h1>
            <VRMViewer />
            <ChatBox />
            <QuickQuestions />
            <BottomBar />
        </div>
    );
}

export default App;