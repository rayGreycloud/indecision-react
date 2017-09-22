import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button
      className="button button--link"
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
    {props.options.length === 0 && <p>Please add options to get started</p> }
    <ul>
    {
      props.options.map(option =>(
        <Option
          optionText={option}
          key={props.options.indexOf(option)}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
    </ul>
  </div>
);

export default Options;
