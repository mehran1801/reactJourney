# Answer 1 : 

Since we’ve passed a name prop to the inputs, the setState function can use it to update the appropriate state. This way you can avoid having to write a handler function for each field. see LoginForm example.

# Answer 2 :

you can put values in the object (initial state value) like 
{
    userName : '', 
    password: ''

}

if you define initial value as an empty object. then make use of || operator. 

  - to set empty values in inputs you can use your initial object.firstName || '' AND object.password || '' as it will be undefined initially.


  # Answer 3 :

   Template literal strings are great for embedding (interpolating) variables and expressions inside JavaScript strings.
They also include a feature called tagged template literals that let you create a function which will give you granular control over all the strings and expressions inside the template string.


# Answer 4:
An inline function is a function which is defined inside of the onClick handler when the React Component renders.

You’d use an inline function to pass in additional arguments to a function, such as a value from a loop, or the target button’s value.