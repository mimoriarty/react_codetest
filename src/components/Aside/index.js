import React, { Component } from 'react';
import Branch from '../Branch/index';

const url = 'https://api.comprea.com/';
const getToken = 'user/session';
const getStores = (token, postalcode) => `user/postalcode?token=${token}&postalcode=${postalcode}`;

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      postalCode: 28010,
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
      data: storeData.markets
    });
  }

  render() {
    return (
      <aside>
        <Branch postalCode={this.state.postalCode} />
      </aside>
    );
  }
}

export default Aside;
