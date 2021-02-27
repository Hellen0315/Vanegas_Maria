import React from 'react';
import Filter from './filter';
import History from './history';
import Bar from './bar';
import Add from './add';
import './menu.css';

const Menu = () => {
    return(
        <div className="menu">
          <Bar></Bar>  
          <Add></Add>
          <Filter></Filter>
          <History></History> 
        </div>
    );
};
export default Menu;
