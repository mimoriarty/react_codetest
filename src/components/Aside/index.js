import React, { Component } from 'react';

import Branch from '../Branch/index';
import './Aside.scss'


const getMarketData = (markets, id) => markets.find(market => market.id.toString() === id.toString());

class Aside extends Component {
  render() {
    return (
      <aside className='c-sidebar'>
        { this.props && this.props.markets.length > 0 &&
          <Branch
            postalCode={this.props.postalCode}
            branch={getMarketData(this.props.markets, this.props.selectedBranch)}
            categories={this.props.categories}
          />
        }
      </aside>
    );
  }
}

export default Aside;
