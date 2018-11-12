import React, { Component } from 'react';
import Aside from '../Aside/index';
import services from '../../services';
import './Shop.scss';

const getStores = (token, postalcode) => `user/postalcode?token=${token}&postalcode=${postalcode}`;
const getCategories = (token, companyId) => `company/categories?token=${token}&company_id=${companyId}`;
const getItems = (token, companyId, categoryId) => `company/items?token=${token}&company_id=${companyId}&category_id=${categoryId}`;

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [],
      categories: [],
      items: [],
      postalCode: 28010,
      selectedBranch: 1,
      defaultCategoryId: 67,
      token: ''
    };
  }

  async componentDidMount() {
    const token = await services.callToken();
    const resStore = await services.execService(getStores(token, this.state.postalCode));
    const storeData = await resStore.json();
    const resCategories = await services.execService(getCategories(token, this.state.selectedBranch));
    const categoriesData = await resCategories.json();
    const resItems = await services.execService(getItems(token, this.state.selectedBranch, this.state.defaultCategoryId));
    const itemsData = await resItems.json();

    this.setState({
      token: token,
      markets: storeData.markets,
      categories: categoriesData.categories,
      items: itemsData
    });
  }

  render() {
    return (
      <div className='c-main'>
        <Aside 
          postalCode={this.state.postalCode}
          markets={this.state.markets}
          selectedBranch={this.state.selectedBranch}
          selectedCategory={this.state.defaultCategoryId}
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