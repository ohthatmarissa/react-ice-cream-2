import React from 'react';
import IceCream from './IceCream';
import PropTypes from 'prop-types';


function IceCreamList(props) {
  return (

    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem amet quaerat quae nisi rerum, tenetur voluptatum. Adipisci nisi esse unde explicabo dolor ullam aut nostrum tempore, ratione, minima autem.</p>
      <hr/>
      {props.iceCreamList.map((iceCream, index) => 
        <IceCream name={iceCream.name}
          type={iceCream.type}
          price={iceCream.price}
          key={index}/>
      )}
    </div>
  );
}

IceCreamList.propTypes = {
  iceCreamList: PropTypes.array
};

export default IceCreamList;
