
import './App.css';
import { Route } from 'react-router-dom';
import Header from './shared/header/Header';
import Home from './home/home/Home';
import ListProducts from './product/ListProduct';


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './shared/footer/Footer';
import SignIn from './auth/signin/SignIn';
import ListCategory from './category/ListCategory';

function App() {
  return (
    <div>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/home">
        <Header></Header>
        <Home />
        <Footer></Footer>
      </Route>
      <Route path="/products">
        <Header></Header>
        <ListProducts />
        <Footer></Footer>
      </Route>
      <Route path="/categories">
        <Header></Header>
        <ListCategory />
        <Footer></Footer>
      </Route>
    </div>
  );
}

export default App;
