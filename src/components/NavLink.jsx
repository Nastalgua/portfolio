import { useState } from 'react';
import PropTypes from 'prop-types';

import './NavLink.css';

export const NavLink = ({ index, name, active }) => {
  const [hovering, setHovering] = useState(false);

  const onClick = (event) => {
    event.preventDefault();

    // change nav
    console.log(event);
  }

  const getIndex = () => {
    const newIndex = index + 1;
    let resultString = '';

    if (newIndex / 10.0 < 1) { // single digit
      resultString += '0'
    }

    resultString += newIndex;

    return resultString;
  }

  const allowActive = () => {
    return active || hovering;
  }

  return (
    <li className={`nav-link ${allowActive() ? 'active' : ''}`}>
      <a href='about-me' className='link'
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={(event) => onClick(event)}
      >
        <span id='index'>{getIndex()}</span>
        <div className={`line ${allowActive() ? 'line-active' : ''}`}></div>
        <span>{name}</span>
      </a>
    </li >
  )
}

NavLink.defaultProps = {
  index: -1,
  name: 'Undefined',
  active: false
}

NavLink.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  active: PropTypes.bool
}
