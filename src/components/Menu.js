import React from 'react';
import barrelMenu from '../images/barrel-menu.png';

const Menu = () => {
  return (
    <div className="flex justify-center mx-40 bg-black">
      {/* <img className="min-w-13 " src={barrelMenu} alt="barrel-menu" /> */}
      <a className="bg-black" href="http://">
        <button className="bg-black">View Menu</button>
      </a>
    </div>
  );
};

export default Menu;
