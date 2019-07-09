import React from 'react';
import IceCream from './IceCream';
import PropTypes from 'prop-types';


function IceCreamList(props) {
  return (
    <div>
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
}

export default IceCreamList;
