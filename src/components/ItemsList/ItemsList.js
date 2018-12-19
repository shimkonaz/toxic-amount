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
            <ul className="items">
              {
                harms.map(item =>
                  <Link 
                    to={item.id}
                    key={item.id}
                    >
                    <li className="itemInfo">
                      <div className="itemTitle">
                        {item.title}
                      </div>
                      <div>
                        <i className="material-icons">
                          keyboard_arrow_right
                        </i>
                      </div>
                    </li>
                  </Link>
                )
              }
            </ul>
          </Route>
          <Route path='/:id' component={Item} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    harms: state.uploadReducer.harms
  }  
}

export default connect(mapStateToProps)(ItemsList);
