import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ShowList.css";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-primary mb-4">Show List</h1>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4 mb-4" key={show.id}>
            <div className="card">
              <div className="card-img-center">
                <img
                  src={show.image.medium}
                  alt={show.name}
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <Link to={`/show/${show.id}`} className="btn btn-primary">
                  View details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
