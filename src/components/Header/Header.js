import React from "react";
import { connect } from "react-redux";
import locationAction from "../../redux/actions/locationAction";
import { BiSearchAlt } from "react-icons/bi";
import "./header.css";

const Header = ({ getLocation }) => {
  const handleChange = async (location) => getLocation(location);

  return (
    <>
      <div className="title-container">
        <h1> Mapbox Geocoding API </h1>
      </div>
      <div className="search-box">
        <input
          className="search-input"
          placeholder="Search a location"
          onChange={(e) => handleChange(e.target.value)}
        />
        <BiSearchAlt className="search-btn" />
      </div>
      
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getLocation: (location) => dispatch(locationAction.getLocation(location)),
});

export default connect(null, mapDispatchToProps)(Header);
