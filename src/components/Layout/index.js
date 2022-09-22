
import React, {useState} from 'react';

import { Grid } from './styles';
import * as FaIcons from 'react-icons/fa';
import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';
import Dashboard from '../pages/Dashboard';
import styled, {keyframes} from 'styled-components';


export const SidebarNav = styled.nav`
  position: fixed;
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  padding: 10px;
width: 50px;
#btnMenu{
font-size: 30px;
margin-top: 10px;
margin-left: 30px;
cursor: pointer;
color: ${props => props.theme.colors.white};

}


`;

const Layout = ({children}) => {
    const showSidebar = () => setSidebar(!sidebar);
    const [sidebar, setSidebar] = useState(true);
return ( 


    <Grid  sidebar={sidebar}>
        <MainHeader />
   
        <SidebarNav>
        <FaIcons.FaBars id="btnMenu"   onClick={showSidebar} />
        <Aside
        
        
        />
        </SidebarNav>
        <Content>
            { children }
            
        </Content>
    </Grid>
);
}

export default Layout;
