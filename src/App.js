import React from 'react';
import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Users />} index/>
      <Route path="/users" element={<Users />} />
      <Route path="/places/new" element={<NewPlace />} />
      <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  </Router>;
}

export default App;
