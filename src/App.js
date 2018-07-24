import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import homeView from './homeView'
import Services from './services'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>          
          <Route path="/" exact render={()=> (        
              <homeView />
            
          )}/>
          <Route path="/services" render={() => (               
                <Services />                                               
          )}/>  
        </Switch>      
      </BrowserRouter>
    )
  }
}

export default App;
