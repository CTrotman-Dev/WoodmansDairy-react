import React, { useState } from "react";

import { StyledEngineProvider } from '@mui/material/styles';

import Header from "./Header";
import Form from "./Form";
import ToDoList from "./ToDoList";
import ButtonEvents from "./ButtonEvents";
import RowContainer from "./RowContainer";
import DynamicCounter from "./DynamicCounter";
import GetTime from "./GetTime";
import Card from "./Card";

import NoteComponent from "./NoteComponent"
import Avatar from "./Avatar";
import DictionaryItem from "./DictionaryItem";
import Footer from "./Footer";

import dictionaryData from "../dictionaryData";
import contacts from "../contacts";
import productData from "../productData";


let isLoggedIn = true;
let isRegistered = true;

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <div>
                <Header />
                <div className="mainContent">
                    <div className="row">
                        {productData.map(x =>
                            <Card key={x.id}
                                name={x.name}
                                img={x.img}
                                desc={x.desc}
                                type={x.type}
                            />
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </StyledEngineProvider>

    );
}

export default App;