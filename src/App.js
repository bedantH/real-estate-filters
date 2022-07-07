import './styles/global.css';
import './components/MainHead';
import MainHead from './components/MainHead';
import FilterBox from './components/FilterBox';
import React from 'react';
import { DataContextProvider } from './DataContext';
import DataList from './components/DataList';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <MainHead />
        <FilterBox />
        <DataList />
      </DataContextProvider>
    </div>
  );
}

export default App;
