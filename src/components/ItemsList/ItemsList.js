import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import './ItemsList.scss';

import Item from 'components/Item';

const ItemsList = ({harms} = this.props) => {
  return (
    <BrowserRouter>
      <div className="itemsList">
        <Switch>
          <Route path='/items'>
            <div>
              {
                harms.map(item =>
                  <div 
                    className="itemInfo" 
                    key={item.id}>
                    <div className="item-name">
                      {item.title}
                    </div>
                    <Link to={item.id}>
                      show details
                    </Link>
                  </div>
                )
              }
            </div>
          </Route>
          <Route path='/:id' component={Item} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    harms: state.harms
  }  
}

export default connect(mapStateToProps)(ItemsList);
