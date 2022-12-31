import { Footer } from "./footer";
import { Heading } from "./heading";
import { Note } from "./Note";

import { notes } from "../notes";
import { useState } from "react";

import { Input } from "./input";

export function App(){
    let [state,setState]=useState(notes);
    let [inputs,setInputs]=useState({
        heading:"",
        content:"",
        id:""
    })
    function add(){
        setState([...state,inputs]);
    }

    function deleteItem(id){
        console.log(id);
        setState((state)=>{
            return(
                state.filter((val)=>{
                    return val.id!==id;
                })
            )
        })
    }
    function update(event){
        let {name,value}=event.target;
        setInputs((oldInputs)=>{
            return(
                {
                    ...oldInputs,
                    [name]:value
                }
            )
        });
    }
    // console.log(g1);
    return(
        <div>
            <Heading name="Google Keep 💕"></Heading>
            <Input update={update} inputs={inputs} add={add}/>
        {state.map((con)=>{
            return ( 
        <Note deleteItem={deleteItem} id={con.id} key={con.id} heading={con.heading} content={con.content}/>
        )
        })}
            <Footer></Footer>
        </div>
    )
}