import React from 'react';
import Header from './Header';
import IceCreamList from './IceCreamList';
import NewIceCreamControl from './NewIceCreamControl';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewIceCreamToList = this.handleAddingNewIceCreamToList.bind(this);
  }

  handleAddingNewIceCreamToList(newIceCream) {
    var newMasterIceCreamList = this.state.newMasterIceCreamList.slice();
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
              }
              a {
                color: white;
              }
          `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><IceCreamList iceCreamList={this.state.masterIceCreamList} />} />
          <Route path='/newicecream' render={()=><NewIceCreamControl onNewIceCreamCreation={this.handleAddingNewIceCreamToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
