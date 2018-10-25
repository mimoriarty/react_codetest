import React, { Component } from 'react';
import favoriteUn from '../../assets/img/custom_star_un.svg';
import './Categorie.scss'

class Categorie extends Component {
  render() {
    return (
      <li className="c-categorie">
        <img className="c-categorie-favorite" src={favoriteUn} alt="favorite unselected" />
        <div className="flex-horizontal-container separator">
          <span className="c-categorie-name">foo</span>
          <span className="c-categorie-status"></span>
        </div>
      </li>
    );
  }
}

export default Categorie;
