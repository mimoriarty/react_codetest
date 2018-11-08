import React, { Component } from 'react';
import Aside from '../Aside/index';
import './Shop.scss';

class Shop extends Component {
  render() {
    return (
      <div className='c-main'>
        <Aside />
        <section className='c-items-container'>
          Aquí va toa la mandanga
        </section>
      </div>
    );
  }
}

export default Shop;