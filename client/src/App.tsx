import React, {FC, useEffect} from 'react';
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import TablePage from './components/TablePage';
import { useAppDispatch } from './components/hooks';
const App: React.FC = () => {


  return (
    <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
    <NavBar />
    <Routes>
      <Route element={<TablePage />} path="/table" />
    </Routes>
    </div>
  )
}

export default App;