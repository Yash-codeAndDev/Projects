import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import  Bookmark from './components/Bookmark.js' ;
import {BrowserRouter , Switch , Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 

const App = ()=> {
  const pageSize = 5;
  const apiKey = '581b2a7e13ee4da0be0e451be32f8b96' ;
  const [progress, setProgress] = useState(0)
  const [theme , setTheme ] = useState(1) ;
 
    return (
      <div className={theme?'bg-light' : 'bg-dark'} >
        <BrowserRouter>
            <NavBar theme={theme} setTheme={setTheme} /> 
            <LoadingBar
            height={3}
            color='#f11946'
            progress={progress} 
          />
            <Switch>
                  <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" theme={theme}/></Route> 
                  <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" theme={theme}/></Route> 
                  <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" theme={theme} /></Route> 
                  <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" theme={theme}/></Route> 
                  <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" theme={theme}/></Route> 
                  <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" theme={theme}/></Route> 
                  <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" theme={theme}/></Route> 
                  <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" theme={theme}/></Route> 
                  <Route exact path="/bookmark"> <Bookmark theme={theme} /> </Route>
            </Switch>
        </BrowserRouter>
      </div>
    )
 
}

export default App;