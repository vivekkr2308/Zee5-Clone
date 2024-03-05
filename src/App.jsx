import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
//import { Provider } from 'react-redux';: Imports the Provider component from the react-redux library. The Provider component is used to wrap your entire React application, providing access to the Redux store to all components.
import store from "./store"; //configured Redux store
import {
  Home,
  TvShows,
  Signin,
  Register,
  Details,
  ShowDetails,
  MovieList,
  Profile,
  Search,
  Movies,
  WebSeries,
} from "./pages";
import NotFound from "./components/notFound";
//a page or a component displayed when a route is not found
import PrivateRoute from "./components/HOC/PrivateRoute"; //used to protect routes that require authentication.
import Layout from "./components/layout";
import AuthRequired from "./components/authCommon/AuthRequired";
//Imports the 'AuthRequired' component, which might be used when authentication is required.

function App() {
  return (
    //Now, any component within the App component or its descendants can access the Redux store and dispatch actions
    <Provider store={store}>
      {/* Redux provides a Provider component that you wrap around your application to make the store accessible to all components */}
      {/* The Layout component likely encapsulates common UI elements that are shared across multiple pages
Header (containing navigation links, logo, etc.)
Footer (containing copyright information, links, etc.)
Sidebar (containing navigation menus, user profile, etc.) */}
     <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/webseries" element={<WebSeries />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/details/show/:id" element={<ShowDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/more/:type/:category" element={<MovieList />} />
          <Route
            path="/profile/*"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          {/* if the URL is /profile/user123, the * will capture the value user123 as a parameter. This parameter can then be accessed in the corresponding component or route handler. */}

          <Route path="/authRequired" element={<AuthRequired />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;


// In React Router, both : and * are used to capture dynamic segments in the URL, but they have different behaviors.
// : (Colon) - Dynamic Segment Captures a specific segment in the URL and makes it available as a parameter. It matches only a single path segment and stops at the next /.

// * (Asterisk) - Wildcard Segment:
// Captures the remaining part of the URL as a single parameter.
// Example: /files/* captures everything after /files/ as a single parameter.

// the main difference is that * captures everything after the specified segment, while : captures a specific segment and stops at the next /. 