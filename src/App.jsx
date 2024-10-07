
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";

import Movie from "./Pages/Movie.jsx";
import {Error} from "./Pages/Error.jsx";
import AppLayout from "./Components/Layout/AppLayout.jsx";
import { getMovieData } from "./api/GetApiData.jsx";
import { MovieDetails } from "./Components/Ui/MovieDetails.jsx";
import { getMovieDetails } from "./api/GetMovieDetails.jsx";
import { contactData, Kamarul } from "./Pages/Contact.jsx";
const App = () => {

  const router = createBrowserRouter(
    [

      {
        path: "/",
        element: <AppLayout />,
        errorElement:<Error/>,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Kamarul/>,
            action:contactData,
          },
          {
            path: "/movie",
            element: <Movie />,
            loader: getMovieData,
          },
          {
            path: "/movie/:movieID",
            element: <MovieDetails/>,
            loader:getMovieDetails,
          },
        ]
      },

    ]

  );

  return <RouterProvider router={router} />
};
export default App;
