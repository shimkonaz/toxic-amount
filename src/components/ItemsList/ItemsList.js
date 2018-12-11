import React from 'react';
import { connect } from 'react-redux';

import './ItemsList.scss';

const ItemsList = ({harms} = this.props) => {
  return (
    <div className="itemsList">
      {
        harms.map(item =>
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

const mapStateToProps = (state) => {
  return {
    harms: state.harms
  }  
}

export default connect(mapStateToProps)(ItemsList);
