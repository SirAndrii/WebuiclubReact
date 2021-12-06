import React from 'react';
import 'materialize-css';
import {Routes, Route, Navigate} from "react-router-dom"; //https://reactrouter.com/docs/en/v6/getting-started/tutorial

/* import Header from './components/header';
import Footer from './components/footer'; */

//Pages
import Catalog from './pages/catalog/catalog';
import Cart from './pages/cart/cart';
import Main from './pages/main/main';
import Item from './pages/catalog/item/item';
import Layout from './components/layout';

export const SearchContext = React.createContext();//оголошуєм тут, щоби зробити звязок хедера з каталогом

export function App() {
  const [searchKey,setSearchKey] = React.useState ("");//задаєм стейт пошуквого запита в корні нашого аппа
  const [cartItems,setCartItems] = React.useState ([]);//задаєм стейт для корзини
  function handleSearch(event) {
        const { value } = event.target;
        setSearchKey(value);
    }//функція для контролю нашлого стейту з пошук
  function handleCart(itemId){
    let objIndex=cartItems.findIndex(obj => obj.id === itemId); 
    alert (JSON.stringify(cartItems))
    if (objIndex===-1){ 
      setCartItems([...cartItems, {id: itemId, quantity:1}]);
    }
    else{
      let newArr=cartItems;
      newArr[objIndex].quantity +=1; 
      setCartItems(newArr);
    } 
  }
    

  return (
    <SearchContext.Provider value={{searchKey, handleSearch, cartItems, handleCart }}> {/* записуєм в контекст обєкт з стейтом, який застосується в фільтрі вивода продуктів і, handleChange в комопнент з пошуковим інпутом  */}
      {/* <Header /> control search */}
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="catalog" > 
                <Route index element={<Catalog/>} />{/*filter with search*/}
                <Route path=":item" element={<Item/>} />  
            </Route> 
            {/* <Route path="catalog/:item" element={<Item/>} />  */}
            <Route path="cart" element={<Cart/>}/>
            <Route path="*" element={<Navigate to="/" />}/>
          </Route>
      </Routes>
 
    {/*   <Footer /> */}
    </SearchContext.Provider>
 
  );
}






