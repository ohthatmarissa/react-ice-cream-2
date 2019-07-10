import React from 'react';
import IceCream from './IceCream';
import PropTypes from 'prop-types';


function IceCreamList(props) {
  return (

    <div>
      <p>lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, a laborum placeat dolorem voluptatem alias, quod, saepe exercitationem voluptate cumque voluptas explicabo! Nihil, sit. Cum quibusdam accusantium necessitatibus dolore nisi?</p>
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
