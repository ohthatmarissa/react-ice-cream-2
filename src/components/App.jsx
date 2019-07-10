import React from 'react';
import Home from './Home';
import Header from './Header';
import IceCreamList from './IceCreamList';
import NewIceCreamControl from './NewIceCreamControl';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterIceCreamList: []
    };
    this.handleAddingNewIceCreamToList = this.handleAddingNewIceCreamToList.bind(this);
  }

  handleAddingNewIceCreamToList(newIceCream) {
    var newMasterIceCreamList = this.state.masterIceCreamList.slice();
    newMasterIceCreamList.push(newIceCream);
    this.setState({masterIceCreamList: newMasterIceCreamList});
  }

  render() {
    return(
      <div>
        <style jsx global>{`
              div {
                  background-color: purple;
                  color: white;
                  text-align: center;
                  padding: 25px 10px 30px 10px;
                  font-family: 'Amatic SC', cursive;
                  font-size: 75px;
              }
              a {
                color: white;
              }
          `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/> 
          
          <Route path='/flavors'render={()=><IceCreamList iceCreamList={this.state.masterIceCreamList} />}/>
          <Route path='/Admin' render={()=><NewIceCreamControl onNewIceCreamCreation={this.handleAddingNewIceCreamToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
