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

    {props.options.length === 0 && <p className="widget__message">Please add 2 or more options to get started</p> }

      {
        props.options.map((option, index) =>(
          <Option
            optionText={option}
            key={props.options.indexOf(option)}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }

  </div>

);

export default Options;
