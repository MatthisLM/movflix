import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  TvShow from './pages/TvShow';


// const routes: Array<RouteProps & { Children: FunctionComponent }> = [
//   {
//       path: getRawRoute(RoutePathName.tvShow),
//       element: TvShow,
//   },
// ];

function App() {
  return (
    <Routes>
      <Route path='/' element={<TvShow/>}></Route>
      <Route path='/tv-show' element={<TvShow/>}></Route>
      {/* <Route
         
          path={getRawRoute(RoutePathName.tvShow)}
          // {...props}
      >
          <TvShow />
      </Route> */}
    {/* {routes.map(({ Children, ...props }) => (
      <Route
          key={
              Array.isArray(props.path)
                  ? props.path.join("")
                  : (props.path as string | undefined)
          }
          path={props.path}
          // {...props}
      >
          <Children />
      </Route>
  ))} */}
  </Routes>
  );
}

export default App;
