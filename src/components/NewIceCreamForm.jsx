import React from 'react';
import PropTypes from 'prop-types';


function NewIceCreamForm(props){
  let _name = null;
  let _type = null;
  let _price = null;

  function handleNewIceCreamFormSubmission(event) {
    event.preventDefault();
    props.onNewIceCreamCreation({name: _name.value, type: _type.value, price: _price.value});
    _name.value = '';
    _type.value = '';
    _price.value = '';
  }

  return (
    <div>
      <style jsx global>{`
            div {
                background-color: pink;
            }
            
        `}</style> 
        <div class='container'>
      <form onSubmit={handleNewIceCreamFormSubmission}> 
        <input 
          type="text"
          id='name'
          placeholder='Ice Cream Name'
          ref={(input) => {_name = input;}}/>__
        <input 
          type="text"
          id='type'
          placeholder='Ice Cream Type'
          ref={(input) => {_type = input;}}/>__
        <input
          id="price" 
          placeholder='Ice Cream Price'
          ref={(input) => {_price = input;}}>
        </input>__
        <button type='submit'>Add!</button>
      </form>
      </div>
    </div>
  );
}

NewIceCreamForm.propTypes = {
  onNewIceCreamCreation: PropTypes.func
};

export default NewIceCreamForm;