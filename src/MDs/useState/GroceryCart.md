# Arrays in State:

Arrays are the best date model for managing and rendering JSX lists.

In this example we are using two arrays.

first array contains the names of all the pizza toppings (whatever data you want to render), data in this array  is static, meaning that it does not change.

# we like to define static data models outside of our function components since they don't need to be recreated each time our component re-renders.

# The second array which will be initial state...


will contain dynamic data, meaning that it changes, usually based on a user's actions. we initialize it as an empty array.

# When button is clicked, an event handler is called.

# This event handler uses information from the "event" object to determine which topping was clicked. so give 'key' and 'value' attributes to the button.


# How to update array in state? we do not add just new data to the previous array, we use spread syntax to replace previous array with brand new array.
This means that any information that we want to save from the previous array needs to be explicitly copied to our new array.

# we frequently use array methods like includes, filter and map.


#  Why would we want to use the index of the clicked item instead of item itself when determining what to remove from our data model?

Answer: Say that we have two of the same item in an array, using the value to remove the item would remove all items with that value, so we use the index as a unique identifier.


# How do we pass argument to our event handler function in React?

If you need to pass a parameter to the click event handler (onClickHandler) , you need to make use of the "Arrow Function".
e.g

<button onClick={()=>onClickHandler(argument)}>
OR
 onClick={()=>removeItem(i)}

 # big headache in this problem was removeItem
 To remove the item we need to filter that item means return us a new array which should not have item with that index , like everything else except that item.
 When that event handler is called , we used array filter method to remove the item from our state that's located at the index of the item that was clicked in our list.




# just trying to explain...

so whenever you clicked on button it added that item to "state" array, and then using that "state" we apply map and put in 'ul' list. 

so now clicking on li should return us that array but filter the li we clicked on.

* Filter returns a new array.

To help with filtering , we added index as a parameter to our onClickHandler and then on defining that onClickHandler we pass an argument and filter based on that.... 

This one needs practice!!!!

# Question: another question is why don't you need event object when you are removing from the cart(state).

Answer: you have given index as parameter to the onClickHandler function...


# Something interesting ....when you rendering 'ul', in map function you are using index, What is this index referring to??

when you are adding item to dynamic array by using onClick event listener on button, and then using same array we render lis, so index referring is the way you are adding by clicking on buttons. If you add  "carrots" e.g it will be at index 0, and if you click on last item/button it will be indexed 1 and so on. took time to figure it out.  