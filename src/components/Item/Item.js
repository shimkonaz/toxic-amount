import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Item = ({match, harms} = this.props) => {
  
  const exactItem = harms.find(
    item => item.id === match.params.id
    );

  return (
    <div>
      <Link to="/items">
        Back to list
      </Link>
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