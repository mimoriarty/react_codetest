import React, { Component } from 'react';
import Categorie from '../Categorie/index';
import logo from '../../assets/img/ic_circled_super.png';
import favoriteUn from '../../assets/img/custom_star_un.svg';
import './Branch.scss'

class Branch extends Component {
  render() {
    const categories = this.props.categories;
    const branchStyle = {
      backgroundColor: `rgb(${this.props.branch.color})`
    };
    const branchImage = this.props.branch.icon || logo;
    const branchName = this.props.branch.name || 'none';
    const branchId = `branch-${this.props.branch.id}`;
    const popularCategorie = {
      name: 'Popular',
      id: -100,
      icon: favoriteUn,
      categories: []
    };
    let elements = [];

    if (categories) {
      for (let i = 0; i < categories.length; i++) {
        elements.push(<Categorie key={categories[i].id} categorie={categories[i]} branch={branchName} />);
      }
    }

    return (
      <div>
        <div className="c-branch" style={branchStyle} id={branchId}>
          <img src={branchImage} className="c-branch-logo" alt="logo"/>
          <div className="flex-horizontal-container">
            <div className="vertical-container">
              <span className="c-branch-name">{this.props.branch.name}</span>
              <span className="c-branch-postal-info">Comprando en {this.props.postalCode}</span>
            </div>
            <span className="c-branch-action">CAMBIAR</span>
          </div>
        </div>
        <ul>
          <Categorie key={-100} categorie={popularCategorie} />
          {elements}
        </ul>
      </div>
    );
  }
}

export default Branch;
