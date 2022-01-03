import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Test from './components/Landing';



//redux---
import {Provider} from 'react-redux';
import store from './redux/store';




function App() {
  return (
   <Provider store={store}>
    <Router>
    <>
      {/* <NavbarComponent/> */}
     
        <Routes>

             <Route exact path="/" element={<Test/>} />
            {/* <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/sentiments/:hashtag" element={<SentimentsChart/>} />
            <Route exact path="/sentiments-tweets/:hashtag" element={<Tweets/>} />
            <Route exact path="*" element={<PageNotFound/>} /> */}
            
        </Routes>
      {/* <Footer/> */}
    </>
    </Router>
  </Provider>
  );
}

export default App;
