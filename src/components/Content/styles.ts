import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    z-index: 300;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    padding: 25px;
    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;

    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${props => props.theme.colors.secondary};
    }
    ::-webkit-scrollbar-track {
        
        background-color: ${props => props.theme.colors.tertiary};
    }

`;