import React from 'react';
import './App.css';
import { Router } from './routes/Section';
import { useScrollToTop } from 'hooks/useScrollUpToTop';

function App() {
  useScrollToTop();
  return <Router />;
}

export default App;
