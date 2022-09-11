# Extras
- Sometimes the inline functions look messy and I’ll pull them out, and sometimes they’re succinct and I leave them inline.

# ColorPicker:
how to find clickedButton? 
    give button "value" attribute and access through target object. e.target.value.
    - if I use key and give it index value in map , it is giving me "undefined".

    ***Update if you sort out ***

    - When using styled object variable, don't put curly braces around state variable name. 

    https://blog.logrocket.com/styling-in-react-4-ways-style-react-app/


## Toggle Loading Text:

- I used prev and set its value inside setState, it worked instead of setting it directly like this setState("not loading..")

# Counter (a.k.a Steps Tracker)
- I didn't give initial state value like 0, and got NaN. which makes sense as you cannot add +1 to undefined.

- Often, the next value of our state is calculated using the current state. In this case, it is best practice to update state with a callback function. If we do not, we risk capturing outdated, or “stale”, state values. 

btw option+shift+K gives Apple icon. cool.

## QuestionIndex
so how to disable the button? ** by using disable attribute **

When to disable the button? **onFirstQuestion and onLastQuestion. Check out how to find their values ** 

What is moving part that you will setState? ** If you look carefully it is index of question array, but you are starting from Question 1 so initial state would be {count+1} **

# EmailTextInput

- see instructions. 
- "value" attribute of input field will be crucial.
- destructuring {target} in event handler will be important.

- In Console: Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

- I have added onSubmit to form to see the updated value. something wrong in code ..fix it and see output.

# LoginForm

If you want to store multiple values in a function component, you’ve got a couple options:

    - call useState more than once
    - shove everything into an object

There’s nothing wrong with calling useState multiple times, and in most cases, that’s how I store multiple values. Once you get over 4 or 5 useState calls it gets a bit unwieldy, but if you’re fine with it, React is too

- Try to do calling useState a couple of times.
- Also try storing multiple values in useState and to do that you have to put them into a single object.

- To store multiple values in useState, you have to put them into a single object, and be careful about how you update the state. 

- not working as expected, needs to debugg

# Login (Codecademy)

Did you notice the square brackets around the name [name]:value ? 

This Computed Property Name allows us to use the string value stored by the name variable as a property key! 

to set empty values in inputs you can use your initial object.firstName || '' AND object.password || '' as it will be undefined initially. alternatively you can set these values '' (empty) in object.

- when storing values in object, name prop to inputs is very important, the setState function can use it to update the appropriate state. This way you can avoid having to write a handler function for each field.

# Pizza (toggle Add/Remove)

- so you toggling Add or Remove based on if sauce is included or not in dynamic array (state). 
- It will be changed on user's interaction, like data will be added and data will be removed.
- if it is included then remove / filter it
- if it is *NOT* included, then add it. 

# ListOfThings

- What we want to be able to do is after writing text in input , pressing "Enter" should add this text to list. 

- make two states, one for dynamic array and other for value.


# GroceryCart 
- must capture index in event listener.
- use arrow function 
- only then you can use filter array based on that index as there are multiple items.

# LessText

- str.substring(from, to) --> to and from means index number

- str.substr(from, length) --> it takes length not index

- The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)

- My white paper logic (best way to understand)

** If the length of the "Text" is equal to or less <= than 
the length provided (maxLength), then render the text.

If let's say length of the text is 'more' than maxLength then 'Render the text but not more than maxLength' AND I will link it with my initial state and that has to be 'true'. If 'false' then render the whole 'text'.

At this stage text is displayed on the screen of user's choice of length. and our initial state is true (by default).

Now we want to display one of two buttons either 
'Read More' or 
'Read Less'

we have already established that if state would be false, whole text will be displayed , otherwise text of user's choice will be displayed.


Once that’s done, the “read more” / “read less” buttons just need to call setState when they’re clicked.



# TodoList








