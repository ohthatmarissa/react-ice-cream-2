import React from 'react';
import PropTypes from 'prop-types';
import NewIceCreamForm from '.newIceCreamForm';

class NewIceCreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };

  }


    
  render(){
    if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewIceCreamForm onNewIceCreamCreation={this.props.onNewIceCreamCreation}/>;}

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewIceCreamControl.PropTypes = {
  onNewIceCreamCreation: PropTypes.func
};

export default NewIceCreamControl;