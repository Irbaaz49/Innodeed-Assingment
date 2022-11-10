import React from "react";
import { Link, useParams } from "react-router-dom";
import "./learn.css"


const Learn = ({ cars }) => {

  const { id } = useParams();

  return (
    <>

      <div style={{ padding: '10px' }}>
        <h1>Learn</h1>
        <button id='bttn'>
          <Link to="/" style={{ textDecoration: "none", color: 'black' }}> &larr;
          </Link>
        </button>
      </div>


      {
      cars.map((data) => 
      {
        if (id === data.id) {
          return (
            <div className="car">
              <div key={data.id}>
                <p className="p">{data.bodyType.toUpperCase()}</p>
                <div>
                  <div className="info">
                    <strong>{data.modelName}</strong>
                    <span className="spans">{data.modelType}</span>
                  </div>
                </div>
              </div>
              <img
                className="carimg"
                src={data.imageUrl}
                alt={data.id}
                width="350px"
                height="100%"
              />
            </div>
          );
        }
      }
      )
      }
    </>
  );
};

export default Learn;

