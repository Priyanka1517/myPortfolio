# myPortfolio

Welcome to my portfolio website.

What i learned ?

1. Redux : IT is a predictable state container for JavaScript Apps.

   Managing state in apps, with deep nested components is tedious task.(As we will have to pass the state to every component). Redux mananges the states outside the app, ans hence the state is passed to only those components that are in need of it.

   Core Concept : 
        Store : an js file that has an object which stores all the states.
        Action : the action that causes change in the state 
        Reducer : links the store ans the action. with some action performed, state changes ans store is updated.

    Three principles : 
        1) State of the enitre application is stored in an object tree within a single store.
        2) Only way to change a state is to emit(dispatch) an action(an object describing waht happened).
        3) How the state should transfer --> we write pure reducers.
            reducer -> (prevState, action) => returns .... newState(). {instead of updating}.
