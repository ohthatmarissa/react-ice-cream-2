import React from 'react';
import Header from './Header';
import NewIceCreamForm from './NewIceCreamForm';
import NewIceCreamControl from './NewIceCreamControl'
import { Switch, Route } from 'react-router-dom';
import IceCreamList from './IceCreamList';



function App() {
  return(
    <div>
      <style jsx global>{`
            div {
                background-color: purple;
                color: white;
                text-align: center;
            }
            a {
              color: white;
            }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={IceCreamList} />
        <Route path='/newiceCream' component={NewIceCreamControl} />
      </Switch>
    </div>
  );
}

export default App;
