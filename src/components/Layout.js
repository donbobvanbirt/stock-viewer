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
        <NavLink className="btn btn-default" to="/" onlyActiveOnIndex={true}>Search</NavLink>
        <h1 className='text-center'>Stock Viewer</h1>
        {this.props.children}
      </div>
    )
  }
}
