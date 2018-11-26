import React, { Component } from 'react';

class ItemInfo extends Component {

  render() {
    return (
      <div className="itemInfo">
        <div className="itemName">
          {/* { this.props.item.name } */}
        </div>
        <div className="itemDescription">
          {/* { this.props.item.description } */}
        </div>
      </div>
    );
  }
}

export default ItemInfo;
