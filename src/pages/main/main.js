import React from 'react';
import Headline from './headline';
import Articles from './main-articles';

const Main = () => {
  return (
    <main className="container">
       <Headline/>
       <Articles/>
      </main>
  );  
};

export default Main;