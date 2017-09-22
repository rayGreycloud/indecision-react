import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>

    </div>
    <div>
      {props.options.length === 0 && <p className="widget__message">Please add options to get started</p> }
      <ol>
      {
        props.options.map(option =>(
          <Option
            optionText={option}
            key={props.options.indexOf(option)}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
      </ol>
    </div>
  </div>
);

export default Options;
