import React from 'react';
import Filter from './filter';
import History from './history';
import Add from './add';

const Menu = () => {
    return(
        <div className="menu">
          <Filter></Filter>
          <Add></Add>
          <History></History> 
        </div>
    );
};
export default Menu;
