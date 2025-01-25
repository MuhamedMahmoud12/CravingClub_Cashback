import Home from "./pages/Home";
import PrimeClub from "./components/homeComponents/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/MainLayout";

import MenuLayout from "./layouts/menuLayout.jsx";
import Appetizers from "./components/menuComponents/Appetizers.jsx";
import SoupAndSalad from "./components/menuComponents/SoupAndSalad.jsx";
import Sandwiches from "./components/menuComponents/Sandwiches.jsx";
import Burgers from "./components/menuComponents/Burgers.jsx";
import Pasta from "./components/menuComponents/Pasta.jsx";
import Pizza from "./components/menuComponents/Pizza.jsx";
import SteakAndRibs from "./components/menuComponents/SteakAndRibs.jsx";
import Wagyu from "./components/menuComponents/Wagyu.jsx";
import Seafood from "./components/menuComponents/Seafood.jsx";
import Chicken from "./components/menuComponents/Chicken.jsx";
import KidsMeal from "./components/menuComponents/KidsMeal.jsx";
import Dessert from "./components/menuComponents/Dessert.jsx";
import menuCategories from "./styles/menuStyles/menuCategories.module.css";

// eslint-disable-next-line no-unused-vars
import * as $ from "jquery";
import SignIn from "./components/homeComponents/SignIn.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/menu" element={<MenuLayout />}>
            <Route
              path="/menu/appetizers"
              element={<Appetizers categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/soup-salad"
              element={<SoupAndSalad categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/sandwiches"
              element={<Sandwiches categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/burgers"
              element={<Burgers categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/pasta"
              element={<Pasta categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/pizza"
              element={<Pizza categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/steak-ribs"
              element={<SteakAndRibs categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/wagyu"
              element={<Wagyu categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/seafood"
              element={<Seafood categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/chicken"
              element={<Chicken categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/kids-meal"
              element={<KidsMeal categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/dessert"
              element={<Dessert categoryStyle={menuCategories} />}
            />
          </Route>
          <Route path="/sign-up" element={<PrimeClub />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
