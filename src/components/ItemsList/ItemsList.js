<<<<<<< HEAD
import React from 'react';

import './ItemsList.scss';

const ItemsList = ({items}) => {

  const itemsList = items.map(item => {
    return (
      <div 
        className="itemInfo" 
        key={item.id}>
        <div className="item-name">
          {item.itemName}
        </div>
        <div className="item-descr">
          {item.itemDescription}
        </div>
      </div>
    )
  });

  return (
    <div className="itemsList">
      { itemsList }
    </div>
  );
=======
import React, { Component } from 'react';

import './ItemsList.scss';

class ItemsList extends Component {

  render() {
    return (
      <div className="itemsList">
      </div>
    );
  }
>>>>>>> added ItemsList component
}

export default ItemsList;
