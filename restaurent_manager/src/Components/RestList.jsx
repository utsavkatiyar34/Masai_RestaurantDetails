import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Styles/RestList.css'
import {Restcard} from "./Restcard";

export default function RestList() {
  const [data, setData] = useState([]);
    const fetchData = () => {
      axios
        .get("http://localhost:3006/resturents")
        .then((response) => setData(response.data));
    };
    useEffect(() => {
          fetchData();
    }, []);
  return (
      <>
        <div>
          {data.map((el) => (
            <Restcard {...el} />
          ))}
        </div>
      </>
  )
}

