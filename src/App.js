
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { darkTheme, GlobalStyles, lightTheme } from './themes';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {
  const [theme, setTheme] = useState("light");

const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="">
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      <button onClick={() => themeToggler()}>Change Theme</button>
      
      
        
      </StyledApp>
    </ThemeProvider> */}
    <RouterProvider router={routes}>
    <Toaster></Toaster>
      
      </RouterProvider>
      
    </div>
  );
}

export default App;
