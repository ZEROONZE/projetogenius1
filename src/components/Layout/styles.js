import Aside from '../Aside';
import styled from "styled-components";

/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content    
*/



export const Grid = styled.div`
    display: grid;
    background-color: ${props => props.theme.colors.secondary};
   
    grid-template-rows: 70px auto;
    grid-template-columns: ${({ sidebar }) => (sidebar ? '90px' : '250px')};
    grid-template-areas:
     'AS MH'
     'AS CT';
     height: 100vh;



    `;