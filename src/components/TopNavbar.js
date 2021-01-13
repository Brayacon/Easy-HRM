import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import * as FaIcons from 'react-icons/fa';

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    `;
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    `;

const TopNavbar = (props) => {
 
    return (
        <div>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={props.showSidebar} />
                </NavIcon>
            </Nav>
        </div>
    )
}

export default TopNavbar;