import React, { useState } from "react";
import axios from "axios";
import { v4 } from "uuid";
import "../Styles/Addresturents.css";

export default function AddResturent() {
  
  const [data, setData] = useState({
    id: v4(),
    name: "",
    url: "",
    catagories:"",
    cost: 0,
    votes: 0,
    rating: 0,
    payment_method:{
    cash:true,
    card:true,
    upi: true,
    }
  });
  const[pay, setPay]= useState({
    cash:"Yes",
    card:"Yes",
    upi: "Yes",
  })
  let handleInput = (val) => {
    const key = val.target.name;
    const value = val.target.value;
    setData({ ...data, [key]: value });
  };
  let handleSelect=(event)=>{
   const k = event.target.name;
   const valid = event.target.value;
   setPay({...pay, [k]: valid});
  }
  let handleClick = () => {
    if(data.name.length===0){
      alert("Enter Resturent Name.");
    }
    else if(data.url.length===0){
      alert("Enter Image URL.");
    }
    else if(data.cost<1){
      alert("Price Can't be 0.");
    }
    else if(data.catagories.length===0){
      alert("Atleast One Catagory Required.");
    }
    else{
      console.log(data);
    axios
      .post("http://localhost:3006/resturents", { ...data })
      .then(function (response) {
        console.log(response);
        alert(`Your appointment ID is ${response.data.id}`);
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }};
  return (
    <>
    <form>
    <div className="addform">
      <h2 className="formheading">&#60;Add Your Restaurent &#47; &#62;</h2>
    
      <input
        name="name"
        onChange={handleInput}
        value={data.name}
        type="text"
        placeholder="Enter Restaurent Name"
        required
      ></input>
      <input
        name="url"
        onChange={handleInput}
        value={data.url}
        type="url"
        placeholder="Enter Image Link"
        required
      ></input>
      <input
        name="cost"
        onChange={handleInput}
        value={data.cost}
        type="number"
        placeholder="Enter Price"
        required
      ></input> 
       <input
        name="catagories"
        onChange={handleInput}
        value={data.catagories}
        type="text"
        placeholder="Enter Catagories (Separated by commas',')"
        required
      ></input> 
      <label className="payment-optext">&#60; Choose Payment Options &#47; &#62;</label>
      <label className="payment-optext1"> Is Cash Accepted</label>
      <select name="cash" className="payment-options" onChange={handleSelect}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      <label className="payment-optext1"> Is Card Accepted</label>
      <select name="card" className="payment-options" onChange={handleSelect}>
       <option   value="Yes">Yes</option>
       <option  value="No" >No</option>
      </select>
      <label className="payment-optext1"> Is UPI Accepted</label>
      <select name="upi" className="payment-options" onChange={handleSelect}>
       <option  value="Yes" >Yes</option>
       <option  value="No" >No</option>
      </select>
      <button onClick={handleClick}>Add Restaurnt</button>
    </div>
    </form>
    </>
  );
}
