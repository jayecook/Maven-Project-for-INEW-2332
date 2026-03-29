import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./styles/app.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="container">
      <h1>Product Inventory</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;
