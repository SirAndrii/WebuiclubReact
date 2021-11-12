import React from 'react';
import Headline from '../containers/main/headline';
import Articles from './main-articles';
import ViewMore from '../containers/main/moreButton';

const Main = () => {
  return (
    <main className="container">
       <Headline/>
       <Articles/>
       {/* <ViewMore/> */}
      </main>
  );  
};

export default Main;