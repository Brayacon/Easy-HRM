import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

import mainLogo from '../images/Logo.png';



const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    `;

const Logo = styled.img`
    height: 150px;
    `;

const LogoWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 190px;
`;
const SideBarNav = styled.nav`
    background: #15171c;
    width:250px;
    height: 100vh;
    display:flex;
    justify-content:center;
    position:fixed;
    top: 0;
    left: ${({sidebar}) =>(sidebar ? '0%': '-80%')};
    transition:350ms;
    z-index: 10;
    
`;

const SideBarWrap = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
`;

const Sidebar = (props) => {

    return (
        <div>
            <IconContext.Provider value={{ }}>
                <SideBarNav sidebar={props.sidebar}>
                    <SideBarWrap>
                            <NavIcon to='#'>
                                <AiIcons.AiOutlineClose onClick={props.showSidebar}/>
                            </NavIcon>
                            <LogoWrap>
                                <Logo src={mainLogo} alt="hrm-logo"/>
                            </LogoWrap>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index}/>;
                            })}
                    </SideBarWrap>
                </SideBarNav>
            </IconContext.Provider>
        </div>
    );
};

export default Sidebar;
