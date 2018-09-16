import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './Animations.css';

import {Image, RightArrow, LeftArrow} from './Image';
import {InputField} from './InputField';

/*Renders main image */
ReactDOM.render(
  <Image />,
  document.getElementById('img_container')
);

/*Renders arrows */
ReactDOM.render(
  <RightArrow />,
  document.getElementById('right_arrow_container')
);

ReactDOM.render(
  <LeftArrow />,
  document.getElementById('left_arrow_container')
);

/*Render input field */
ReactDOM.render(
  <InputField />,
  document.getElementById('input_field')
);
