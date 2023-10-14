import React from "react";
// import AboutFinance from "../Components/AboutFinance";
// import TableFinance from '../Components/TableFinance'
// import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
// import App from "./App";

//import { Route, Routes, useState } from 'react-router-dom';

export default function Finances() {
	const [users,setUsers] =useState([])

    const [ newUser, setNewUser  ] =useState([
        {
          payCheck: '',
          tax: '',
          totalSaving: '',
          totalTax: ''
        }
      ])
    //   function handleDelete(payCheckValue){
    //     setNewUser({
    //     ...newUser,
    //     payCheck: payCheckValue,
    //     tax: taxValue,
    //     totalSaving: totalSavingValue,
    //     totalTax: totalTaxValue
    //     })
    //   }
    //   function handleUpdate(updatedPayCheckValue){
    //     setNewUser({
    //       ...newUser,
    //       updatedPayCheckValue: updatedPayCheckValue,
    //       updatedTax: updatedTaxValue,
    //       updatedTotalSaving: updatedTotalSavingValue
    //     })
    //   }
// Setting the post up, use an empty string
    const [newPayCheck, setNewPayCheck] =useState('')
    const [newTotalTax, setNewTotalTax] =useState('')
    const [newTotalSaving, setNewTotalSaving] =useState('')  
    
    const [updatedPayCheck, setUpdatedPayCheck] =useState('')
    const [updatedTotalTax, setUpdatedTotalTax] =useState('')
    const [updatedTotalSaving, setUpdatedTotalSaving] =useState('')

    //Make sure you set up a API that you can CRUD to, such as mockAPI or use a JSON server like in the week 11/12 labs.
    const MOCK_API_URL = 'https://64e55febc55563802914592e.mockapi.io/Finances'

    //Create 4 functions, getUsers(){}, deleteUser(){}, updateUser(){}, and postNewUser(){}.

    function getUsers(){
        console.log("getting users...");
    //1) Use fetch(URL) to get from the API
        fetch(MOCK_API_URL)
    //2) Convert the data to JSON
        .then(data => data.json())
        .then((data)=> {
            console.log(data);
    //setUSers() to result of that data
            setUsers(data);
        })   
        }
        useEffect(() => {
            getUsers()
        }, [])
    function deleteUser(id){
        fetch(`${MOCK_API_URL}/${id}`, {
            method: 'DELETE'
        }).then(() => getUsers())
    }

    function postNewUser(e) {
        e.preventDefault()
        fetch(MOCK_API_URL, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({
                payCheck: newPayCheck,
                tax: newTotalTax,
                totalSaving: newTotalSaving
            })
        }).then(()=> getUsers())       
    }

    function updateUser(e, userObject){
        e.preventDefault()
        let updatedUserObject ={
            ...userObject,
            payCheck: updatedPayCheck,
            totalTax: updatedTotalTax,
            totalSaving: updatedTotalSaving,
        }
    fetch(`${MOCK_API_URL}/${userObject.id}`,{
        method: 'PUT',
        body: JSON.stringify(updatedUserObject),
        headers: {"Content-Type": "application/json"}
    }).then(() => getUsers())
    }
    
    return (
        <div className="App">
            <h1>Hi welcome to the finances page</h1>
            {/* <AboutFinance/>
            <TableFinance users={users}handleDelete={handleDelete} handleUpdate={handleUpdate}/> */}
            {/* <TableFinance handleDelete={handleDelete}/> */}
            {/* <TableFinance handleUpdate={handleUpdate}/>  */}
            {/* Is this the right way of handling these delete/update */}
        <form>
        <h3 className="container">POST new Pay Check</h3>

<label className="container"> Total Paycheck</label>
<input type="text"name="submit"value={newPayCheck}onChange={(e) =>setNewPayCheck(e.target.value)}/>

<label className="container">Total Tax</label> 
<input type="text"name="submit"value={newTotalTax}onChange={(e) =>setNewTotalTax(e.target.value)}/> 



<label className="container">Total Saving</label>
<input type="text"name="submit"value={newTotalSaving}onChange={(e) =>setNewTotalSaving(e.target.value)}/> 
<button className="button" onClick={(e) => postNewUser(e)}>Submit</button>

</form>
<h2>Add Claculator</h2>
{users.map((user,index) =>(
<div className ="userContainer"key={index}>
    <div>
        payCheck: {user.payCheck}
        totalTax: {user.tax}
        totalSaving: {user.totalSaving}
        <button className="button"onClick={() => deleteUser(user.id)}>Delete</button>
    </div>

     <form>
        <h3>Update This Paycheck</h3>
        <label className= "container">Updated Pay Check</label>
        <input type="text"name="submit"value={updatedPayCheck}onChange={(e) =>setUpdatedPayCheck(e.target.value)}/>
       
       
        
        <label className="container">Update Pay Check-after tax</label>
        <input type="text"name="submit"value={updatedTotalTax}onChange={(e) =>setUpdatedTotalTax(e.target.value)}/>
        

        <label className="container">Updated Total Saving</label><br></br>
        <input type="text"name="submit"value={updatedTotalSaving}onChange={(e) =>setUpdatedTotalSaving(e.target.value)}/>
        
        <button className="button"onClick={(e) => updateUser(e, user)}>Update</button>
       
    </form> 
    </div>
))}
</div>   
        // CRUD-opperationCreateItem,ReadItem,UpdateItem,DeleteItem
    )

}
