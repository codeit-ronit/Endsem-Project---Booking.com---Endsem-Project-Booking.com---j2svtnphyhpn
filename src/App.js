import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/homepage";
import SignIn from './components/signin';
import SignUp from './components/signup';
import "./index.css";
import FetchData from "./interview/fetchdata";
// import HotelCard from "./components/hotelcard";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
  // return <HotelCard hotelInfo={hotelInfo}/>
}

export default App;

