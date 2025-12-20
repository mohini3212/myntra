import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";

import { Footer } from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { WomenCloth } from "./womensection/WomenCloth";

import { WomenPg } from "./womensection/WomenPg";

import { FrontPg } from "./frontpages/FrontPg";
import { MenFrontPg } from "./men/MenFrontpg";
import { WomenFrontpg } from "./women/WomenFrontpg";
import { MenCloth } from "./menSection/MenCloth";
import { AddtoCartw } from "./Detailpg/AddtoCartw";
import { AddtoCartm } from "./detailspg/AddtoCartm";
import { WishList } from "./frontpages/Whislist";
import { KidSection } from "./kidsection/KidSection";
import { GenzSection } from "./genzsection/GenzSection";
import { HomeSection } from "./homesection/HomeSection";
import { ScrollToTop } from "./ScrollToTop";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <AppLayout />

      </>
    ),

    children: [


      {
        path: "/",
        element: <FrontPg />,
      },
      {
        path: "/kidspage",
        element: <KidSection />,
      },
      {
        path: "/genzpage",
        element: <GenzSection />,
      },
      {
        path: "/homepage",
        element: <HomeSection />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/menfrontpg",
        element: <MenFrontPg />,
      },
      {
        path: "/womenfrontpg",
        element: <WomenFrontpg />,
      },
      {
        path: "/women",
        element: <WomenCloth />,
      },
      {
        path: "/men",
        element: <MenCloth />,
      },
      {
        path: "/womenp",
        element: <WomenPg />,
      },
      {
        path: "/detail",
        element: <AddtoCartw />,
      },
      {
        path: "/detailmen",
        element: <AddtoCartm />,
      },

    ]
  }
])

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;
