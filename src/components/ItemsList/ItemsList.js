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
}

export default ItemsList;
