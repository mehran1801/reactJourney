https://discuss.codecademy.com/t/faq-the-state-hook-lesson-review/535813/14

# where is newTask.title coming from ?


the input element has been given a name of “title” and the textarea element has been given a name of “description”. Giving a name allows us to select a specific element via javascript or css or whatever. If we had multiple input elements in a single form and we didn’t want to target all of the input elements but only a specific input element, then the name attribute allows us to give the element a unique identifier. So, we have chosen a name of “title” for our input field. We have also set the attributes for placeholder, value and onChange (you can read about the attributes in the linked page above)


We have set the value attribute to be value={newTask.title || ""}. This basically says that initially the value of the input field should be set to newTask.title (where is this coming from?


and if that doesn’t exist, then the empty string "" should be the initial value.

If you look at the parameters of the NewTask component, you will see that it expects to be passed an object which has properties called newTask, handleChange and handleSubmit. newTask is supposed to be an object while handleChange and handleSubmit are expected to hold references to event handling functions. It isn’t the job of NewTask to provide these details; it is the responsibility of the parent component which is doing the rendering to provide the arguments for these parameters. 

Indeed, we can see in TodoList function how this pans out:

<NewTask
          newTask={newTask} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />


        The newTask object (it is defined as state and initial value is given an object)and the event handling functions are defined in the parent TodoList function and then they are passed as props to NewTask. The props are packaged as properties of a single object and then in NewTask.js, we use destructuring assignment to extract the values for our parameters.


we are using useState to initialize newTask as an empty object. The interesting thing to note is that the handleChange function is being passed as the event handler to the NewTask component and in NewTask.js, this function is being used for both the input and the textarea elements. Now, initially newTask is an empty object. So, the newTask.title property is nonexistent. Hence the input field defaults to an empty string as specified in value={newTask.title || ""}.






