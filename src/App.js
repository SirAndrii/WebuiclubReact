import React from 'react';
import 'materialize-css';
import {Routes, Route, Navigate} from "react-router-dom"; //https://reactrouter.com/docs/en/v6/getting-started/tutorial

import Header from './components/header';
import Footer from './components/footer';

//Pages
import Catalog from './pages/catalog/catalog';
import Cart from './pages/cart/cart';
import Main from './pages/main/main';
import Item from './pages/catalog/item/item';

export const SearchContext = React.createContext();//оголошуєм тут, щоби зробити звязок хедера з каталогом

export function App() {
  const [searchKey,setSearchKey] = React.useState ("");//задаєм стейт пошуквого запита в корні нашого аппа
  function handleChange(event) {
        const { value } = event.target
        setSearchKey(value)
    }//функція для контролю нашлого стейту

  return (
    <SearchContext.Provider value={{searchKey, handleChange}}> {/* записуєм в контекст обєкт з стейтом, який застосується в фільтрі вивода продуктів і, handleChange в комопнент з пошуковим інпутом  */}
      <Header />
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/catalog" element={<Catalog/>} >
            {/* <Route path=":item" element={<Item/>} /> */}
        </Route> 
        <Route path="/catalog/:item" element={<Item/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
 
      <Footer />
    </SearchContext.Provider>
 
  );
}






