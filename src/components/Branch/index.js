import React, { Component } from 'react';
import logo from '../../assets/img/ic_circled_super.png';
import './Branch.scss'

class Branch extends Component {
  render() {
    return (
      <div className="c-branch">
        <img src={logo} className="c-branch-logo" alt="logo" />
        <div className="flex-horizontal-container">
          <div className="vertical-container">
            <span className="c-branch-name">Merkatona</span>
            <span className="c-branch-postal-info">Comprando en {this.props.postalCode}</span>
          </div>
          <span className="c-branch-action">CAMBIAR</span>
        </div>
      </div>
    );
  }
}

export default Branch;
