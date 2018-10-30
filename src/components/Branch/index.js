import React, { Component } from 'react';
import CONSTANTS from '../../constants';
import Categorie from '../Categorie/index';
import logo from '../../assets/img/ic_circled_super.png';
import './Branch.scss'

const url = CONSTANTS.url;
const getCategories = (token, categoryId) => `company/categories?token=${token}&company_id=${categoryId}`;

class Branch extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      postalCode: 28010,
      selectedBranch: 1,
      token: ''
    };
  }

  async componentDidMount() {
    const resCategories = await fetch(
      url.concat(
          getCategories(this.props.token, this.state.selectedBranch)
        )
      );
    const categoriesData = await resCategories.json();

    this.setState({
      categories: categoriesData.categories
    })
  }

  render() {
    const categories = this.state.categories;
    const branchStyle = {
      backgroundColor: `rgb(${this.props.branch.color})`
    };
    const branchImage = this.props.branch.icon || logo;
    const branchId = `branch-${this.props.branch.id}`;
    let elements = [];

    if (categories) {
      for (let i = 0; i < categories.length; i++) {
        elements.push(<Categorie key={categories[i].id} categorie={categories[i]} />);
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
          {elements}
        </ul>
      </div>
    );
  }
}

export default Branch;
