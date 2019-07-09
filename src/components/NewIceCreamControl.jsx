import React from 'react';
import PropTypes from 'prop-types';

class NewIceCreamControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({formVisibleOnPage: true});
    }
    
    render(){
        return (
            <div>
                <p>This is the New Ice Cream Control component</p>
                <strong onClick={this.handleClick}>Add</strong>
            </div>
        );
    }
}

NewIceCreamControl.PropTypes = {
    onNewIceCreamCreation: PropTypes.func
};

export default NewIceCreamControl;