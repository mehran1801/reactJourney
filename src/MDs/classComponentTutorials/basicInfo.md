# React applications are made out of components.

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
 
 We start with class components because they are still widely used in legacy code, are common in tutorials/documentation found online, and are required for a few specific use-cases

# import React from 'react';

This creates an object named React which contains methods necessary to use the React library.


You’ve already seen one of the methods contained in the React library: React.createElement(). Recall that when a JSX element is compiled, it transforms into a React.createElement() call.



For this reason, you have to import the React library, and save it in a variable named React, before you can use any JSX at all. React.createElement() must be available in order for JSX to work. 

# import ReactDOM from 'react-dom';

The methods imported from 'react-dom' are meant for interacting with the DOM. You are already familiar with one of them: ReactDOM.render(). 

The methods imported from 'react' don’t deal with the DOM at all. They don’t engage directly with anything that isn’t part of React.


To clarify: the DOM is used in React applications, but it isn’t part of React. After all, the DOM is also used in countless non-React applications. Methods imported from 'react' are only for pure React purposes, such as creating components or writing JSX elements.


