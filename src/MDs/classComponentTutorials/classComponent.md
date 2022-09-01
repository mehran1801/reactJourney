


All class components will have some methods and properties in common (more on this later). Rather than rewriting those same properties over and over again every time, 

# we extend the Component class from the React library. This way, we can use code that we import from the React library, without having to write it over and over again ourselves.


After we define our class component, we can use it to render as many instances of that component as we want.




# What is React.Component, and how do you use it to make a component class?

React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.

this is what we have so far...

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
 
ReactDOM.render(
    <MyComponentClass />, 
    document.getElementById('app')
);

By subclassing React.Component, you create a new component class.


Component class variable names must begin with capital letters!

This adheres to JavaScript’s class syntax. In addition, there is a React-specific reason why component class names must always be capitalized.


