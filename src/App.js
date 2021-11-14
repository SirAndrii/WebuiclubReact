import React from 'react';
import 'materialize-css';

import Catalog from './pages/catalog/catalog';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      {/* <Catalog /> */}
      <Footer />
    </React.Fragment>
  );
}






