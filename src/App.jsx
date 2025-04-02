import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/PortfolioDashboard/Dashboard';
import CapitalDeployment from './components/CapitalDeploymentDashboard/CapitalDeployment';
import DetailedStats from './components/StatsDashboard/DetailedStats';
import Layout from './components/common/Layout/Layout';
import DetailedTradeView from './components/TradeTableDashbaord/DetailedTradeView/DetailedTradeView';
import Background from './components/common/Background/Background';

function App() {
  return (
    <Router>
      <div className="h-screen w-screen overflow-hidden relative">
        <Background />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/capital-deployment" element={<CapitalDeployment />} />
              <Route path="/detailed-stats" element={<DetailedStats />} />
              <Route path="/detailed-trade-view" element={<DetailedTradeView />} />
            </Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
