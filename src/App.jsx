import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext";
import "./App.css";
import { NavBar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/CArt";
import { CartForm } from "./components/CartForm";


function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer greeting="BIENVENIDOS A WIN FERRETERIA" />
                        }
                    />
                    <Route
                        path="/category/:id"
                        element={<ItemListContainer greeting="PRODUCTOS" />}
                    />
                    <Route path="items/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='/checkout' element={<CartForm />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
