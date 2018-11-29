import React, { Component } from 'react';

import './ItemsList.scss';

class ItemsList extends Component {

  render() {
    const { items } = this.props;
    const itemsList = items.map(item => {
      return (
        <div 
          className="itemInfo" 
          key={item.id}>
          <div className="item-name">
            Name: {item.itemName}
          </div>
          <div className="item-descr">
            Description: {item.itemDescription}
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
}

export default ItemsList;
