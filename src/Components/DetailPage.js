import React from "react";
import '../Styles/DetailPage.scss';
import Navbar from "./Navbar";
import ListingDetails from "./ListingDetails";
import Discussion from "./Discussion";
import Footer from "./Footer";
import SellerListing from "./SellerListing";

function DetailPage() {
    return ( 
        <div id="page-container">
            <Navbar/>
            <ListingDetails title = 'Aglaonema' species = 'Chinese evergreens' price = '$50' details = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
            <SellerListing UserName = 'luv2sell88' label='see all listings'/>
            <Discussion/>
            <Footer/>
        </div>

     );
}

export default DetailPage;