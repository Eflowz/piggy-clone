import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import MainLayouts from './Layouts/MainLayouts';
import Homepage from './pages/Homepage';


const App = () => {



const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts/>}>
    <Route index element={<Homepage />} />
      


</Route>
  )
);
return < RouterProvider router = {router} />;

};

export default App;


