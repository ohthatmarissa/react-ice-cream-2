import React from 'react';


function NewIceCreamForm(){
  let _name = null;
  let _type = null;
  let _price = null;

  function handleNewIceCreamFormSubmission(event) {
    event.preventDefault();
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
          ref={(input) => {_price = input;}}
          cols="30" rows="10"></input>__
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

export default NewIceCreamForm;