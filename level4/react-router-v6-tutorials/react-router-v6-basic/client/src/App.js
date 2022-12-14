import React from 'react' //Step 1
import { BrowserRouter as Router, Routes, Route , Link, NavLink} from 'react-router-dom'; //Step 2
import Home from './components/Home.js' // Step 8
import About from './components/About'
import Products from './components/Products.js';
import Checkout from './components/Checkout.js';
import ProductDetails from './components/ProductDetails.js';
 
export default function App() { // Step 3
    return ( // Step 4

        <Router> {/*Step 5*/}

            <nav style={{ margin: 10}}>
                <Link to="/" style={{ padding:5 }}>
                Home
                </Link>
                <Link to="/about" style={{ padding:5 }}>
                About
                </Link>
                <Link to="/products" style={{ padding:5 }}>
                Products
                </Link>
            </nav>
            <Routes> {/*Step 6*/}
                <Route path ="/" element={<Home />} /> {/*Step 7*/}
                <Route path ="/about" element={<About />} /> {/*Step 7*/}
                <Route path ="/products" element={<Products />} /> {/*Step 7*/}
                <Route path ="/checkout" element={<Checkout />} /> {/*Step 7*/}
                <Route path ="/products/:productId" element={<ProductDetails />} />
             </Routes> {/*Step 6*/}
        </Router> //Step 5
    ); //Step 4
  } //Step 3
