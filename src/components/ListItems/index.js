import React, { Component } from 'react';
import './ListItems.scss'

class ListItems extends Component {
  render() {
    const categorie = this.props.categorie;

    return (
      <li className="c-list-item">
        <div className="flex-horizontal-container separator">
          <span className="c-list-item-name">{categorie.name}</span>
          <span className="c-list-item-status"></span>
        </div>
      </li>
    );
  }
}

export default ListItems;
