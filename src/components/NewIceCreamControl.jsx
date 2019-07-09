import React from 'react';

class NewIceCreamControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    HandleClick() {
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

export default NewIceCreamControl;