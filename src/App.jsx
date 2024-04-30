import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Location from "./Pages/Location";
import LocationDetail from "./Pages/LocationDetail";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import SearchResult from "./Pages/SearchResult";
import SharedLayout from "./Layouts/SharedLayout";
import SearchModal from "./Components/ui/SearchModal";
import CheckoutPage from "./Pages/CheckOut";
import NavSettings from "./Components/ui/Nav/NavSettings";
import useHideScrollBar from "./Hooks/useHideScrollBar";
import {
  updateCartSize,
  updateCartTotal,
  updateCartItemsFromLocalStorage,
  saveCartInLocalStorage,
} from "./Store/slices/cartSlices.js";
import ProtectedRoute from "./Utils/ProtectedRoute";
import ProtectedLayoutSearchPage from "./Utils/ProtectedLayoutSearchPage";
function App() {
  const { logo, products } = useSelector((state) => state.api);
  const { searchModalIsOpen } = useSelector((state) => state.ui);
  const { hideScrollBar, setHideScrollBar } = useHideScrollBar();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    searchModalIsOpen ? setHideScrollBar(true) : setHideScrollBar(false);
  }, [searchModalIsOpen]);
  useEffect(() => {
    dispatch(updateCartSize());
    dispatch(updateCartTotal());
    dispatch(saveCartInLocalStorage());
  }, [cart]);
  useEffect(() => {
    dispatch(updateCartItemsFromLocalStorage());
  }, []);

  const location = useLocation();
  useEffect(() => {
    NavSettings(location);
  });

  // Scroll to top when user navigate page or change the page using Location pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <div id="App">
        {searchModalIsOpen && <SearchModal />}
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index Component={Home} />
            <Route path="about" Component={About} />
            <Route path="shop" Component={Shop} />
            <Route path="cart" Component={Cart} />
            <Route path="product/:product_id" Component={Product} />
            <Route element={<ProtectedLayoutSearchPage />}>
              <Route path="search" Component={SearchResult} />
              {/* <Route path="query=:sch_query" /> */}
            </Route>
            <Route path="locations">
              <Route index Component={Location} />
              <Route path=":location_id" Component={LocationDetail} />
            </Route>
            {/* ####### Way one to use protectedroute ########*/}
            {/* <Route element={<ProtectedLayout />}>
              <Route path="checkout" Component={CheckoutPage} />
            </Route> */}

            {/* ######## Way two to use protectedroute #######*/}
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </div>
    </>
  );
}

export default App;
