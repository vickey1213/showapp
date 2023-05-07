import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowDetail.css";

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const selectedShow = await response.json();
        setShow(selectedShow);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getShow();
  }, [id]);

  const handleBookTicket = () => {};

  return (
    <div className="container my-5">
      {loading ? (
        <p>Loading...</p>
      ) : show ? (
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="text-center">
                <img
                  src={show.image.medium}
                  alt={show.name}
                  className="card-img"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p className="card-text">{show.summary}</p>
                <button className="btn btn-danger" onClick={handleBookTicket}>
                  Book a Movie Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No show found with the provided ID</p>
      )}
    </div>
  );
};

export default ShowDetail;
