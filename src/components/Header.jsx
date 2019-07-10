import React from 'react';
import { Link } from 'react-router-dom';
import icecream1 from '../assets/images/ice-cream1.jpg';

function Header(){
  return(
    <div>
      <style jsx global>{`
            h1 {
                font-size: 100px:
            }
        `}</style>
      <h1>Ice Cream!</h1>
      <Link to="/">Home</Link> | <Link to="/newiceCream">Add New Flavor</Link> | <Link to="/flavors">Check Out The Flavors</Link>
      <img src={icecream1}/>
      <br/><br/>
    </div>
  );
}

export default Header;