import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ libraryStatus, setLibraryStatus }) {
    const onLibrary = () => {
        setLibraryStatus(!libraryStatus)
    }
  return (
    <nav>
      <h1><img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-transparent-spotify-logo-images-25.png" alt="" />&nbsp; Mini Spotify </h1>
      <button onClick={onLibrary}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
