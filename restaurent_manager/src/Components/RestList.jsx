import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/RestList.css";
import { Restcard } from "./Restcard";

export default function RestList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const fetchData = () => {
    axios
      .get(
        `http://localhost:3006/resturents?&_page=${page}&_limit=5&_sort=cost&_order=${sort}`
      )
      .then((response) => setData(response.data));
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, [sort, page]);
  return (
    <>
      <div className="navbardiv2">
        <button className="srchbtn1" onClick={() => setSort("asc")}>
          Ascend
        </button>
        <button className="srchbtn0" onClick={() => setSort("desc")}>
          Descend
        </button>
      </div>
      <div>
        {data.map((el) => (
          <Restcard {...el} />
        ))}
      </div>
      <div className="navbardiv2">
        <button
          className="srchbtn1"
          disabled={page === 1}
          onClick={() => setPage((prevState) => prevState - 1)}
        >
          Prev
        </button>
        <button className="srchbtn2">{page}</button>
        <button
          className="srchbtn0"
          disabled={data.length === 0}
          onClick={() => setPage((prevState) => prevState + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
