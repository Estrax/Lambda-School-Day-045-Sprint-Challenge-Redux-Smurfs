1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array methods:
- `.map()`
- `.reduce()`
- `.filter()`

Plus additional one: `.forEach()`.

Method being used to create a new object while extending the properties of another object:
`Object.assign()`

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are javascript objects (they use JSON notation) that store the action type and (usually) payload.

Reducers are functions living in the `store` - they fetch state from store and return the new (modified) state based on the actions (their types and payload).

Store is the place keeping track of state of all application.

Redux store is a single source of truth because of the one-directional data flow and immutability. State cannot be modified any other way than by reducers that get the info from executed actions. Store keeps track of the state of our application and because of that it solves some of the problems with child components being able to update parents components, as well as the ones with multiple or duplicating states within the application that cause a lot of issues on scale.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is local, so it is only linked to one component. On the other hand, Application state is global. 

4.  What is middleware?

Middleware is a set of functions acting as a bridge between points. It provides the ability to extend and execute actions - for example, we can add an additional step between actions and reducers to check whether the user is logged in.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows to use action creators that return a function to be dispatched instead of an action. Thunk allows for the async execution and processing.

6.  Which `react-redux` method links up our `components` with our `redux store`?

`connect`