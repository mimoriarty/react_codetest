import React, { Component } from 'react';
import Aside from '../Aside/index';
import services from '../../services';
import './Shop.scss';

const getStores = (token, postalcode) => `user/postalcode?token=${token}&postalcode=${postalcode}`;
const getCategories = (token, categoryId) => `company/categories?token=${token}&company_id=${categoryId}`;

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [],
      categories: [],
      postalCode: 28010,
      selectedBranch: 1,
      token: ''
    };
  }

  async componentDidMount() {
    let token = await services.callToken();
    let resStore = await services.execService(getStores(token, this.state.postalCode));
    const storeData = await resStore.json();
    let resCategories = await services.execService(getCategories(token, this.state.selectedBranch));
    const categoriesData = await resCategories.json();

    this.setState({
      token: token,
      markets: storeData.markets,
      categories: categoriesData.categories
    });
  }

  render() {
    return (
      <div className='c-main'>
        <Aside 
          postalCode={this.state.postalCode}
          markets={this.state.markets}
          selectedBranch={this.state.selectedBranch}
          categories={this.state.categories}
        />
        <section className='c-items-container'>
          Aquí va toa la mandanga
        </section>
      </div>
    );
  }
}

export default Shop;