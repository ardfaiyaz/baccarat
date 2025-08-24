import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  const loginMessage = <h1>Welcome back, {props.username}!</h1>;
  const wrongCredentials = <h1>Please log in to continue.</h1>;

  return props.isLoggedIn ? loginMessage : wrongCredentials;
}

export default Profile;
