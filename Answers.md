1. What problem does the context API help solve?
    Context api attempts to make state management more simplistic and intuitive by eschewing from the more traditional method of passing state
        as props from parent to child. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions: the actions that can be taken on the state inside of store in order to initiate state transitions.
    Reducers: A function that take multiple parameters and return less, mostly 1. More specifically, in redux, reducers are functions that take 
        our action flags and modify our state based on them
    store: is the central repository of our app level state. It's known as the "single source of truth" becauseit's where most, if not all, of our 
        logic implementation lives.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is our behind scenes data that applies, or is relevant, to multiple components in our app and thus isn't appropriate to tie it to 
        any one component. Component state is the data pertaining to one specific component. Such as keeping track the input for a search field.
        You would use application level state in regards to anything that pertains to the overarching logic regarding our application. Alternatively,
        You would use component state in regards to logic pertaining only to one component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `redux-thunk` is a packaged middleware that allows us to process redux based logic asynchronously. It allows us to use dispatch inside of our 
        `action-creators` without using a return statement. 
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    I prefer Redux over context. It makes me feel like I have more direct control over the logic and data flow, but that might come from lack of 
        practical experience using context.
