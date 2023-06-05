// import React, { Component } from 'react'
// import { PropTypes } from "prop-types"
// import Button from './Button'
// export class Header extends Component {
//   render() {
//     return (
//       <header>
//         <h1>Task traker</h1>
//       </header>
//     )
//   }
// }

// export default Header

// const Header = (props) => {
// return (
// <header>
// {/* <h1>Task Tracker</h1> */}
// <h1>{props.title}</h1>
// </header>
// )
// }

import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header