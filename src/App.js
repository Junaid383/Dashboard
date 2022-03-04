import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/newUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users">
                       <UserList />
                    </Route>
                    <Route path="/user/:userId">
                       <User/>
                    </Route>
                    <Route path="/newUser">
                       <NewUser/>
                    </Route>
                  
                  {/* Product ROuters   */}

                    <Route path="/products">
                       <ProductList />
                    </Route>
                    <Route path="/product/:productId">
                       <Product/>
                    </Route>
                    <Route path="/newProduct">
                       <NewProduct/>
                    </Route>


                    {/* Employee ROute */}
                    <Route path="/employee">
                       <NewProduct/>
                    </Route>
                </Switch>


            </div>
        </Router>
    );
}

export default App;