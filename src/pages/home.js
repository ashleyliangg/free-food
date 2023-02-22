import React, { useContext } from "react";
import { useState } from "react";
import Card from '../components/card.js';
import { Button } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { Form } from './form';
import { adddata } from '../actions';
import { connect } from 'react-redux';
import { app, database } from '../firebase/firebaseConfig';
import { FirebaseContext } from "../firebase/firebase.js";

const Home = (props) => {


    return (
    <div>
        <div id="banner">
        <div id="banner-content">
        FREEFOOD@NOW
        </div>
        </div>

        <div id="main-content">
            <div className="block1">
            <div id="header">
                Have Free Food Around You?
            </div>
            <div id="main">
                Maybe you do, maybe you don't.
            </div>
            <NavLink to="/submission" activestyle="true">
            <div id="fourth" className="myButton">
                    Share Free Food Info Here  
            </div>
            </NavLink>
            
            </div>
            <div className="tiles">
                {props.data.map((el) => (
                    <Card name={el.name} location={el.location} servingsize={el.servings} tags={el.tags}/>
                ))};

            </div>
        </div>
    </div>
    
    );
};

const mapStateToProps = state => (
    {
        data: state.foods,
    }
);

export default connect(mapStateToProps, { adddata })(Home);