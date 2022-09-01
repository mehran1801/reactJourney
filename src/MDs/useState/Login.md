# A few things to notice:

Objects in State:

So how do you store input values in an object ???

When we work with a set of related variables, it can be very helpful to group them in an object.


We use a state setter callback function to update state based on the previous value.


    The spread syntax is the same for objects as for arrays: { ...oldObject, newKey: newValue }

    We reuse our event handler across multiple inputs by using the input tag’s name attribute to identify which input the change event came from

# Once again, when updating the state with setState() inside a function component, we do not modify the same object. 

We must copy over the values from the previous object when setting the next value of state. Thankfully, the spread syntax makes this super easy to do!

Did you notice the square brackets around the name [name]:value ? 

This Computed Property Name allows us to use the string value stored by the name variable as a property key! 

onChange is event listener you use with input values.

to set empty values in inputs you can use your initial object.firstName || '' or object.password || '' as it will be undefined initially. 

you can further destructure target as {name,value}=target.

