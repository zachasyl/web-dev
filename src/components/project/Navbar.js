import React from "react";
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import { makeStyles } from '@mui/styles';
import Hook from "./Demo";
import Button from "@mui/material/Button";


const useStyles = makeStyles({
    root: {
        background: 'transparent',
        border: 6,
        borderRadius: 10,
        boxShadow: '0 3px 20px 2px rgba(100, 105, 135, .3)',
        color: 'white',
        height: 40,
        width: 80,
        padding: '6px',
    },

});


const Navbar = () => {
    const classes = useStyles();
    return(
        <div class = "">
<div className = "row mt-2 ">
        <div className = "col">
        <h4 className= "ms-5">
            <i class="fas fa-plane-departure"></i>
             <span class = ""> Travmap
                <div className=" ">
                      <input id="text-fields-username" placeholder="Search TravMap"
                             className="search-bar-2">
                      </input>
                      <span>
                          <i className="fas fa-search search-magni position-absolute ms-5"></i>
                      </span>
                      <a href="exploresettings.html"><i
                          className="fas fa-cog ps-3 position-relative"></i></a>
                   </div>
             </span>
        </h4>
        </div>
        <div className = "col">
            <Hook/>
        </div>
         <div className = "col" >
         <span className = "float-end me-5 " >

             <Button className={classes.root}  >Log in</Button>
             <Button className={classes.root} >Sign Up</Button>
         </span>
         </div>
    </div>


        </div>
    )
}

export default Navbar;