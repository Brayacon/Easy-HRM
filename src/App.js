import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Dashboard from './pages/Dashboard';
import MainNav from './components/MainNav';



const RouterWrap = styled.div`

    `;


function App() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {setSidebar(!sidebar)}

  return (
    <Router>
      <RouterWrap>
        <MainNav/>
        <Switch>
          <Route path='/dashboard' exact component=
          {Dashboard}/>
        </Switch>
      </RouterWrap>
    </Router>
  );
}

export default App;
