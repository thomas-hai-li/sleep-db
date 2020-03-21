import React from 'react';
import { Header } from './components/Header';
import { SleepGoal } from './components/SleepGoal';
import { RestedDeficit } from './components/ResetedDeficit';
import { SleepEntriesList } from './components/SleepEntriesList';
import { AddSleepEntry } from './components/AddSleepEntry';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <SleepGoal />
        <RestedDeficit />
        <SleepEntriesList />
        <AddSleepEntry />
      </div>
    </GlobalProvider>
  );
}

export default App;
