import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import {lightTheme} from "./components/Themes"
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Main from "./components/Main"
import MySkillsPage from "./components/MySkillsPage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

//Look BlogPage and Skill scroll

function App() {

  const location = useLocation();

  return <>
    <GlobalStyle />


      <ThemeProvider theme={lightTheme}> 
            <SoundBar />       
            <BrowserRouter>
              <AnimatePresence exitbeforeEnter>
              
                <Switch>
                  
                  <Route exact path='/'>
                    <Main />
                  </Route>

                  <Route exact path='/about'>
                    <AboutPage />
                  </Route>

                  <Route exact path='/blog'>
                    <BlogPage />
                  </Route>

                  <Route exact path='/work'>
                    <WorkPage />
                  </Route>

                  <Route exact path='/skills'>
                    <MySkillsPage />
                  </Route>

                </Switch>
              </AnimatePresence>
            </BrowserRouter>
      </ThemeProvider>
   
    </>
    
}

export default App

 