import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import userReducer from "./slices/user";
import windowSizeReducer from './slices/windowSize';
import intersectionReducer from "./slices/intersection";
import watchlistReducer from "./slices/watchlist";
//These lines import multiple reducer functions from different files. Reducers in Redux are responsible for handling state changes in response to actions. Each reducer corresponds to a specific slice of your application's state.
//configureStore() -used to create a Redux store for state management in your React application.
const store = configureStore({
    // The store created with configureStore is passed as a prop to the Provider, making the Redux store available to all components in the component tree.
    reducer: {
        auth: authReducer,
        user: userReducer,
        windowSize: windowSizeReducer,
        intersection: intersectionReducer,
        watchlist: watchlistReducer,
    },
});

export default store;
//Exporting the Store: This line exports the created Redux store so that it can be used in other parts of your application.
//Redux provides a Provider component that you wrap around your application to make the store accessible to all components.
// The useSelector hook is used to select and access the auth slice of the Redux store.It is used to extract and access a specific piece of data from the Redux store.It allows your component to subscribe to slices of the Redux state and re-render whenever those slices change.
// The useDispatch hook is used to get the dispatch function, which you can use to dispatch actions.
//The dispatch function is now available within your component, and you can use it to send actions to the Redux store.
//Suppose you want to dispatch an action to update the user's name in the Redux store. You would use useDispatch to get the dispatch function and then call it with the action you want to dispatch:
//const dispatch = useDispatch();

// const handleUpdateName = () => {
//     // Dispatching an action to update the user's name
//     dispatch(updateUser({ name: 'New Name' }));
//   };

//<button onClick={handleUpdateName}>Update Name</button>