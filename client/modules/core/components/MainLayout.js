import React, { Component } from 'react'
import { Link } from 'react-router'

const MainLayout = ({ main }) => (
  <div>
    { (main) ? main : <h1>Oops!</h1> }
  </div>
)

export default MainLayout
