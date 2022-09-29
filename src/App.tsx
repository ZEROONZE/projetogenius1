import React from 'react';
import './App.css';
import Aside from './components/Aside';
import Content from './components/Content';
import { Grid } from './components/Layout/styles';
import MainHeader from './components/MainHeader';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './components/hooks/theme';




import RoutesPages from './routes';


const App: React.FC = () => { 
      const {theme} = useTheme()
      return ( 
       
        <ThemeProvider theme={theme}>
    
        <GlobalStyles />
        
       <RoutesPages />
     
    </ThemeProvider>
  
  );
}

export default App;
