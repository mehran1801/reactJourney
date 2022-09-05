# ColorPicker:
how to find clickedButton? 
    give button "value" attribute and access through target object. e.target.value.
    - if I use key and give it index value in map , it is giving me "undefined".

    ***Update if you sort out ***

    - When using styled object variable, don't put curly braces around state variable name. 

    https://blog.logrocket.com/styling-in-react-4-ways-style-react-app/


## Toggle Loading Text:

- I used prev and set its value inside setState, it worked instead of setting it directly like this setState("not loading..")

# Counter
- I didn't give initial state value like 0, and got NaN. which makes sense as you cannot add +1 to undefined.

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





