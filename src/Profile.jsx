import React from "react";
import PropTypes from "prop-types";

import Ilawan from "./profiles/Ilawan.jsx";
import Umipon from "./profiles/Umipon.jsx";
import Buta from "./profiles/Buta.jsx";
import Donaire from "./profiles/Donaire.jsx";
import Salazar from "./profiles/Salazar.jsx";

function Profile(props) {
  switch (props.isLoggedIn) {
    case "Ilawan":
      return <Ilawan username={props.username} />;
    case "Umipon":
      return <Umipon username={props.username} />;
    case "Buta":
      return <Buta username={props.username} />;
    case "Donaire":
      return <Donaire username={props.username} />;
    case "Salazar":
      return <Salazar username={props.username} />;
    default:
      return <h1>Please log in to continue.</h1>;
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.string.isRequired,
};

export default Profile;
