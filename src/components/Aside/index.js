import React, { Component } from 'react';
import Branch from '../Branch/index';
import CONSTANTS from '../../constants';

const url = CONSTANTS.url;
const getToken = 'user/session';
const getStores = (token, postalcode) => `user/postalcode?token=${token}&postalcode=${postalcode}`;
const getMarketData = (markets, id) => markets.find(market => market.id.toString() === id.toString());

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      markets: [],
      postalCode: 28010,
      selectedBranch: 1,
      token: ''
    };
  }

  async componentDidMount() {
    const resSession = await fetch(
      url.concat(getToken)
      );
    const tokenData = await resSession.json()
    const resStore = await fetch(
      url.concat(
          getStores(tokenData.token, this.state.postalCode)
        )
      );
    const storeData = await resStore.json();

    this.setState({
      token: tokenData.token,
      markets: storeData.markets
    });
  }

  render() {
    return (
      <aside>
        { this.state && this.state.markets.length > 0 &&
          <Branch
            postalCode={this.state.postalCode}
            token={this.state.token}
            branch={getMarketData(this.state.markets, this.state.selectedBranch)}/>
        }
      </aside>
    );
  }
}

export default Aside;
