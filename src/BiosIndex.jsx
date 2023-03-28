import axios from "axios";
import { useState, useEffect } from "react";
import profile from "./assets/images/Birgit.jpg";
import { BiosShow } from "./BiosShow";
import { Modal } from "./Modal";

export function BiosIndex() {
  const [bios, setBios] = useState([]);

  const handleIndexBios = () => {
    axios.get("bios.json").then((response) => {
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

  const [isBiosShowVisable, setIsBiosShowVisable] = useState(false);
  const [currentBio, setCurrentBio] = useState({});

  const handleShowBio = (bio) => {
    console.log("handleShowBio");
    setIsBiosShowVisable(true);
    setCurrentBio(bio);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsBiosShowVisable(false);
  };

  const handleUpdateBio = (id, params) => {
    console.log("handleUpdateBio");
    axios.patch(`bios/${id}.json`, params).then((response) => {
      setBios(
        bios.map((bio) => {
          if (bio.id === response.data.id) {
            return response.data;
          } else {
            return bio;
          }
        })
      );
      handleClose();
    });
  };

  return (
    <div id="bios-index">
      <Modal show={isBiosShowVisable} onClose={handleClose}>
        <BiosShow bio={currentBio} onUpdateBio={handleUpdateBio} />
      </Modal>
      <br />
      <h2 className="row justify-content-center">Bio</h2>
      <br />
      <img className="center-block" src={profile} style={{ width: "20%" }} />
      {bios.map((bio) => (
        <div key={bio.id}>
          <p style={styleParagraph}>{bio.summary}</p>
          {localStorage.jwt === undefined ? (
            <></>
          ) : (
            <>
              <div className="row justify-content-center">
                <button className="button1" onClick={() => handleShowBio(bio)}>
                  Edit Info
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
