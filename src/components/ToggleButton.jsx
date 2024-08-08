import React from 'react';
import './styles.css';

function ToggleButton({ value, handleChange, onLabel, offLabel }) {

  return (
    <div className="container">
      <label htmlFor="toggle" className="switch">
        <input type="checkbox" className="switch-input" id="toggle" value={value && value} onChange={handleChange && handleChange} />
        <span className="switch-label" data-on="Guide on" data-off="Guide me" />
        <span className="switch-handle" />
      </label>
      <span className='labelText'>
        {value && value ? onLabel : offLabel}
      </span>

    </div>
  );
}

export default ToggleButton;
