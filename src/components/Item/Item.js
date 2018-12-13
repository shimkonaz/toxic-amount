import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Item.scss';

const Item = ({match, harms} = this.props) => {
  
  const exactItem = harms.find(
    item => item.id === match.params.id
    );

  return (
    <div className="item">
      <div className="back-nav">
        <Link to="/items">
          <i className="material-icons">
            keyboard_arrow_left
          </i>
        </Link>
      </div>
      <div className="title">
        {exactItem.title}
      </div>
      <div className="description">
        {exactItem.description}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    harms: state.harms
  }  
}

export default connect(mapStateToProps)(Item);