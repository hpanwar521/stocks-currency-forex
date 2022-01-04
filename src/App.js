import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import StocksChart from './components/StocksChart';
import Navbar from './components/Navbar';
import NavbarResult from './components/NavbarResult';


//redux---
import {Provider} from 'react-redux';
import store from './redux/store';





function App() {
  return (
   <Provider store={store}>
    <Router>
    <div>
      <Navbar/>
     
        <Routes>
            <Route exact path="/" element={<NavbarResult/>} />
             <Route exact path="/:symbol" element={<StocksChart/>} />
            {/* <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/sentiments/:hashtag" element={<SentimentsChart/>} />
            <Route exact path="/sentiments-tweets/:hashtag" element={<Tweets/>} />
            <Route exact path="*" element={<PageNotFound/>} /> */}
            
        </Routes>
      {/* <Footer/> */}
    </div>
    </Router>
  </Provider>
  );
}

export default App;
