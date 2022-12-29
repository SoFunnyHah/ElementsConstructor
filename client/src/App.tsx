import React from 'react';
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import TablePage from './components/TablePage';
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