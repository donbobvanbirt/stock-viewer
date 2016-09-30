import React, { Component } from 'react'

import { Link } from 'react-router'
import NavLink from './NavLink'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Stock Viewer</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/info">Info</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
