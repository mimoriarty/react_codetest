import React, { Component } from 'react';
import './ListItems.scss'

class ListItems extends Component {
  render() {
    return (
      <ul>
        <li className="c-list-item">
          <div className="flex-horizontal-container separator">
            <span className="c-list-item-name">Todos los productos</span>
            <span className="c-list-item-status"></span>
          </div>
        </li>
      </ul>
    );
  }
}

export default ListItems;
