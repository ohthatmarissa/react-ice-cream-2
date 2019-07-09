import React from 'react';
import IceCream from './IceCream';

// var masterIceCreamList = [
//   {
//     name: 'Rocky Road',
//     type: 'Deluxe',
//     price: '$5.00'
//   },
//   {
//     name: 'Banana Split',
//     type: 'Deluxe',
//     price: '$5.00'
//   },
//   {
//     name: 'Vanilla',
//     type: 'Basic',
//     price: '$4.00'
//   },
  
// ];


function IceCreamList() {
  return (
    <div>
      <hr/>
      {masterIceCreamList.map((iceCream, index) => 
        <IceCream name={iceCream.name}
          type={iceCream.type}
          price={iceCream.price}
          key={index}/>
      )}
    </div>
  );
}
export default IceCreamList;
