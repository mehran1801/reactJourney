# There will be one event handler for all the input tags and that event handler will have 'event' object to get the attributes of input like name and value. 

Add the onChange event listener as an attribute of each of our <input> tags. Use each of these event listeners to call the same event handler, handleChange().


Every input has name and value attribute. so we can store them in dynamic object as key value pair. e.g
[name]:value


const name = target.name;
const value = target.value;

# This can be written in more concise way by using object destructuring.

const {name,value} = target;


it is very critical to copy over all of the values from our previous state object otherwise we give state the value of a new object with the name and value of the input that most recently changed, but we lose the values that were stored for inputs with any other name.

# Try creating this bug and see what happens??? 

you will type in one input and as soon as you type in next one , previous input value will be gone. because we didn't copy over the previous values.


He gave onSubmit event handler to form, I thought it should be given to submit button.


Much like we use the onChange event listener to listen for changes in our <input> elements, we use onSubmit to listen for submit events in our <form> elements.

More reading here 

https://reactjs.org/docs/forms.html#controlled-components

# Finally the most confusing part is solved, Have a look at this 

# ES6 Computed Property Names allow us to use dynamically generated names within object literals. Example:

const myPropertyName = 'c'

const myObject = {
  a: 5,
  b: 10,
  [myPropertyName]: 15
} 

console.log(myObject.c) // prints 15


To stress that expressions can be used directly as computed property names, Another example:

const fieldNumber = 3

const myObject = {
  field1: 5,
  field2: 10,
  ['field' + fieldNumber]: 15
}

console.log(myObject.field3) // prints 15

This can be very handy.

One more variation is to use template literals (string interpolation) for the computed property names — note that this still requires the square bracket syntax, however:

const fieldNumber = 3

const myObject = {
  field1: 5,
  field2: 10,
  [`field${fieldNumber}`]: 15
}

console.log(myObject.field3) // prints 15



# My Console log results


I just rendered input tag and here 
profile.firstName is undefined 

I just rendered input tag and here profile.firstName is undefined 

I am in input event listener with name and value variables 
name is firstName 
and value is a 

Now I am in state setter function with prevProfile parameter 
prevProfile is {} 

After state setter fn profile object is {} 

I just rendered input tag and here profile.firstName is a 

I just rendered input tag and here 
profile.firstName is a 

I am in input event listener with name and value variables 
name is lastName 
and value is asd 

After state setter fn profile object is {"firstName":"a"} 

Now I am in state setter function with prevProfile parameter 
prevProfile is {"firstName":"a"} 
I just rendered input tag and here profile.firstName is a 
Now I am in state setter function with prevProfile parameter 
prevProfile is {"firstName":"a"} 
I just rendered input tag and here profile.firstName is a 


# I noticed

in input field it does not let you type if you specify state.firstName || "", if you just specify one value without || , then you can type ... basically what you need is onChange event listener and change state. 

If you donot give value attribute , it works perfectly fine. but if you give "" empty value , it doesn't work.

