import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import './ItemsList.scss';

import Item from 'components/Item';
import { matchedHarmsSelector } from 'store/selectors';

class ItemsList extends Component {
  
  render() {
    const matchedHarmsList = (
      <ul className="items">
        {
          this.props.matchedHarms.map(item =>
            <Link 
              to={`/items/${item.id}`}
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
    );

    const noMatchedHarms = (
      <div className="noMatches">No matches yet. <br/> Upload some photo first</div>
    );

    return (
    <BrowserRouter>
      <div className="itemsList">
        <Switch>
          <Route exact path='/items'>
            { this.props.matchedHarms.length ? matchedHarmsList : noMatchedHarms}
          </Route>
          <Route exact path='/items/:id' component={Item} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
    matchedHarms: matchedHarmsSelector(state)
});

export default ItemsList = connect(mapStateToProps, null)(ItemsList);
