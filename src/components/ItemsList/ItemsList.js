import React from 'react';

import './ItemsList.scss';

const ItemsList = ({items}) => {
  return (
    <div className="itemsList">
      {
        items.map(item =>
        <div 
          className="itemInfo" 
          key={item.id}>
          <div className="item-name">
            {item.title}
          </div>
          <div className="item-descr">
            {item.description}
          </div>
        </div>
      )
    }
    </div>
  );
}

export default ItemsList;
