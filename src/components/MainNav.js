import React, {useState} from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';


function MainNav() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {setSidebar(!sidebar)}

    return (
        <div>
            <Sidebar sidebar = {sidebar} showSidebar={() => {showSidebar()}} />
            <TopNavbar showSidebar={() => {showSidebar()}}/>
        </div>
    );
}

export default MainNav;
