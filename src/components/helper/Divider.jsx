import { useEffect, useRef } from 'react';

import './Divider.css';

export let dividerPositions = [0];

export const Divider = ({ index, setDividerPosition }) => {
  const dividerReference = useRef(null);
  useEffect(() => {
    dividerPositions = [...dividerPositions, dividerReference.current.offsetTop]
  });

  return (
    <hr ref={dividerReference} className={`divider`} />
  )
}
