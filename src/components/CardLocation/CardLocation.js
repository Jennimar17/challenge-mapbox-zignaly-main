import React from "react";
import { connect } from "react-redux";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsPinMap, BsBookmark } from "react-icons/bs";
import "./cardLocation.css";

const CardLocation = ({ location }) => {
  return (
    <div className="container">
      {location?.features.map((feature) => {
        return (
          <div>
            <div className="card">
              <MdOutlineLocationOn className="card-icon-title" />
              <p className="card-title">{feature.place_name}</p>

              <p className="card-coordinates">
                <BsPinMap className="card-icon-coordinates" />
                Coordinates:{""}
                {feature.geometry.coordinates[0]}-
                {feature.geometry.coordinates[1]}
              </p>

              <p className="card-place">
                <BsBookmark className="card-icon--bookmark" />
                {feature.properties.category}
              </p>
              <ul>
                {feature.context?.map((data, index) => {
                  //Get the Title and Capitalize first Letter
                  const title =
                    data.id.split(".")[0].charAt(0).toUpperCase() +
                    data.id.split(".")[0].slice(1);
                  return (
                    <div key={index}>
                      <li className="items">
                        <span style={{ fontWeight: "bold" }}>{title}:</span>{" "}
                        {data.text}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps, null)(CardLocation);
