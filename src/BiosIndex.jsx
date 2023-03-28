import axios from "axios";
import { useState, useEffect } from "react";
import profile from "./assets/images/Birgit.jpg";
export function BiosIndex(props) {
  const [bios, setBios] = useState([]);

  const handleIndexBios = () => {
    axios.get("https://localhost:3000/bios.json").then((response) => {
      console.log(response.data);
      setBios(response.data);
    });
  };

  const styleParagraph = {
    fontSize: 25,
    paddingLeft: "5cm",
    paddingRight: "5cm",
    paddingTop: "1cm",
  };

  useEffect(handleIndexBios, []);

  return (
    <div id="bios-index">
      <br />
      <h2 className="row justify-content-center">Bio</h2>
      <br />
      <img className="center-block" src={profile} style={{ width: "20%" }} />
      {bios.map((bio) => (
        <div key={bio.id}>
          <p style={styleParagraph}>{bio.summary}</p>
        </div>
      ))}
    </div>
  );
}
