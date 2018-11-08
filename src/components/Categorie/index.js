import React, { Component } from 'react';
import ListItems from '../ListItems/index';
import './Categorie.scss'

const hidden = {
  display : 'none'
};
const composeUrl = (market, category, subcategory) => `/tienda/${market}/${category}/${subcategory}`;

class Categorie extends Component {
  toggleList(ev) {
    let list = ev.currentTarget.getElementsByClassName('c-list-item-container')[0];
    const isDisplayed = list.style.display !== 'none';

    list.style.display = isDisplayed ? 'none' : 'block';

    if (isDisplayed) {
      ev.currentTarget.className = 'c-categorie';
    } else {
      ev.currentTarget.className += ' selected';
    }
  }

  render() {
    const categorie = this.props.categorie;
    const iconUrl = categorie.icon;
    const isPopular = categorie.id === -100;
    const allSection = {
      id: -100,
      name: 'Ver toda la sección'
    };
    let elements = [];

    if (categorie.categories.length) {
      for (let i = 0; i < categorie.categories.length; i++) {
        elements.push(<
          ListItems
          key={categorie.categories[i].id}
          categorie={categorie.categories[i]}
          linkData={composeUrl(this.props.branch, categorie.shortcut, categorie.categories[i].shortcut)}
        />);
      }
    }

    return (
      <li className="c-categorie" onClick={(isPopular ? null : this.toggleList)}>
        <div className="c-categorie-row">
          <img className={(isPopular ? "c-categorie-favorite" : "c-categorie-icon")} src={iconUrl} alt="favorite unselected" />
          <div className="flex-horizontal-container separator">
            <span className="c-categorie-name">{categorie.name}</span>
            <span className={"c-categorie-status " + (isPopular ? "popular" : "")}></span>
          </div>
        </div>
        <div className="c-categorie-row">
          <ul className="c-list-item-container" style={hidden}>
            { categorie.categories.length > 0 &&
              <ListItems key={allSection.id} categorie={allSection} />
            }
            {elements}
          </ul>
        </div>
      </li>
    );
  }
}

export default Categorie;
