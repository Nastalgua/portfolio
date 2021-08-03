import { useState } from 'react';
import PropTypes from 'prop-types';

import './NavLink.css';

import { Link } from 'react-scroll';

const navNames = ['about-me', 'projects', 'fun', 'resume'];

export const NavLink = ({ index, name, active, updateActive }) => {
  const [hovering, setHovering] = useState(false);

  const onClick = (event) => {
    event.preventDefault();

    updateActive(name);
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
      <Link
        to={`${navNames[index]}`}
        spy={true}
        smooth={true}
        duration={500}
        delay={100}
        offset={-50}

        onSetActive={() => {
          updateActive(name);
        }}

        className='link'

        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={(event) => onClick(event)}
      >
        <span id='index'>{getIndex()}</span>
        <div className={`line ${allowActive() ? 'line-active' : ''}`}></div>
        <span>{name}</span>
      </Link>
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
