import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StreamerList from './Components/StreamerList/StreamerList';
import StreamerDetail from './Components/StreamerDetail/StreamerDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StreamerList />} />
        <Route path="/streamer/:id" element={<StreamerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
