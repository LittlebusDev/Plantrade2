import { useState } from "react";
import './Styles/App.scss';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import SearchBar from './Components/SearchBar';
import MessageBubble from './Components/MessageBubble';
import Discussion from './Components/Discussion';
import ListingDetails from './Components/ListingDetails';
import Upload from './Components/Upload';
import Header from './Components/Header';

function App() {
  
  return ( 
  <>
  <Navbar />
  
  <Hero />
  </>
  )
}

export default App;



