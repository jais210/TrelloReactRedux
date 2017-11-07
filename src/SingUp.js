import React, {Component} from 'react';
import logo from './logo.svg';
import {Redirect} from 'react-router-dom'
// import {connect} from 'redux-zero/react'
// import {insertAnswertAt} from './actions'
import './App.css';

const Option = ({index, option}) => (
   <div>
      <div>
         <span> {String.fromCharCode(65 + index)} -  </span>
         <button onClick={() => insertAnswertAt(option)}> {option} </button>
      </div>
   </div>
)

const genTrivia = (image, question, optionList) => (
   <div>
      <img src={image}/>
      <p>  {question}  </p>
      <div>
         {optionList}
      </div>
   </div>
)

const Trivia = ({image, question, options, fireToReport}) => {
   let divContent = null
   if (question) {
      const optionList = options.map((option, index) => {
         return ( <Option key={index} index={index} option={option}/>);
      })
      divContent = genTrivia(image, question, optionList)
   }
   return (
      <div>
         {fireToReport && <Redirect to = "/report"/> }
         {divContent}
      </div>
   );
}

const mapToProps = ({image, question, options, fireToReport}) => ({image, question, options, fireToReport})

export default connect(mapToProps)(Trivia);