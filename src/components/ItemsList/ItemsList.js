import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import './ItemsList.scss';

import Item from 'components/Item';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchedHarms: []
    }
  }

  isMatched = false;

  getMatchedItem = ({words, harms} = this.props) => {
    if(this.isMatched) {
      this.setState({
        matchedHarms: harms.filter(item => item.title === 'Ammonia')
      });
      console.log('is matched:' + this.state);
     } else {
       console.log('is not matched')
      }
    }
  
  render() {
    return (
    <BrowserRouter>
      <div className="itemsList">
        <Switch>
          <Route path='/items'>
            <ul className="items">
              {
                this.isMatched ? 
                  this.state.matchedHarms.map(item =>
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
                  ) :
                ''
              }
            </ul>
          </Route>
          <Route path='/:id' component={Item} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }

  componentDidUpdate() {
    if (this.props.words !== null) {
        this.isMatched = true;
    } else {
      console.log('words:' + this.props.words);
    }
  }
}

const mapStateToProps = (state) => ({
    harms: state.uploadReducer.harms,
    words: state.uploadReducer.words
});

export default ItemsList = connect(mapStateToProps, null)(ItemsList);
