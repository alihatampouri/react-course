import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import AddPrducts from "./components/AddProduct/AddProduct";
import Navbar from "./components/Navbar/Navbar";
import Like from "./components/Like/Like";
import Welcome from "./components/Welcome/Welcome";
import Timer from "./components/Timer/Timer";
import HoverCounter from "./components/Counter/HoverCounter";
import ClickCounter from "./components/Counter/ClickCounter";
import UserList from "./components/User/UserList";
import AddUser from "./components/User/AddUser";
import UserProvider from "./components/Context/UserProvider";
import StepCounter from "./components/Counter/StepCounter";
import StepProvider from "./components/Context/StepProvider";
import MultiCounter from "./components/MultiCounter/MultiCounter";
import ProductProvider from "./components/Providers/ProductProvider";

function App() {

  return (
    <>
      <ProductProvider>
        <UserProvider>
          <Navbar />
          <div className="container md:container md:mx-auto px-4">
            <Welcome />
            <ProductList />
            <AddPrducts />
            <UserList />
            <AddUser />
            <Like />
            <MultiCounter />
            <Timer />
            <StepProvider>
              <StepCounter />
            </StepProvider>
            <HoverCounter />
            <ClickCounter />
          </div>
        </UserProvider>
      </ProductProvider>
    </>
  );
}

export default App;
