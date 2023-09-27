import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Ewallet from "./components/pages/Ewallet";
import AddCard from "./components/pages/AddCard";
import { fetchRandomUser } from "./redux/cardSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Root from "./components/pages/Root"; 

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomUser());
  }, [dispatch]);
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route path="/ewallet" element={<Ewallet />} />
        <Route path="/addcard" element={<AddCard />} />
    </Route>
    )
  )

  return (
    <> 
      <RouterProvider router={router} />
    </>
  );
}

