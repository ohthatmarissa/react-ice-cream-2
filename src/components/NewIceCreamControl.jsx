import React from 'react';
import PropTypes from 'prop-types';
import NewIceCreamForm from './NewIceCreamForm';


class NewIceCreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };

  }


    
  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewIceCreamForm onNewIceCreamCreation={this.props.onNewIceCreamCreation} />;
    } else {

    }

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