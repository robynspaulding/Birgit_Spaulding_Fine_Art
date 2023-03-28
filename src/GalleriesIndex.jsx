import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import { GalleriesShow } from "./GalleriesShow";
import { ImageZoom } from "./ImageZoom";
import { Modal } from "./Modal";

export function GalleriesIndex() {
  const [galleries, setGalleries] = useState([]);

  const handleIndexGalleries = () => {
    axios.get("https://artist-website-api.com/galleries.json").then((response) => {
      console.log(response.data);
      setGalleries(response.data);
    });
  };

  useEffect(handleIndexGalleries, []);

  const [isGalleriesShowVisable, setIsGalleriesShowVisable] = useState(false);
  const [currentGallery, setCurrentGallery] = useState({});

  const handleShowGallery = (gallery) => {
    console.log("handleShowGallery");
    setIsGalleriesShowVisable(true);
    setCurrentGallery(gallery);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsGalleriesShowVisable(false);
  };

  const handleUpdateGallery = (id, params) => {
    console.log("handleUpdateGallery");
    axios.patch(`https://artist-website-api.com/galleries/${id}.json`, params).then((response) => {
      setGalleries(
        galleries.map((gallery) => {
          if (gallery.id === response.data.id) {
            return response.data;
          } else {
            return gallery;
          }
        })
      );
      handleClose();
    });
  };

  const handleDestroyGallery = (gallery) => {
    console.log("handleDestroyGallery", gallery);
    axios.delete(`https://artist-website-api.com//galleries/${gallery.id}.json`).then((response) => {
      setGalleries(galleries.filter((g) => g.id !== gallery.id));
      handleClose();
    });
  };

  const [isZoomVisable, setIsZoomVisable] = useState(false);
  const [currentZoom, setCurrentZoom] = useState({});

  const handleShowZoom = (gallery) => {
    console.log("handleShowZoom");
    setIsZoomVisable(true);
    setCurrentZoom(gallery);
  };

  const handleCloseZoom = () => {
    console.log("handleCloseZoom");
    setIsZoomVisable(false);
  };

  return (
    <div id="galleries-index">
      <br />

      <Modal show={isGalleriesShowVisable} onClose={handleClose}>
        <GalleriesShow
          gallery={currentGallery}
          onUpdateGallery={handleUpdateGallery}
          onDestroyGallery={handleDestroyGallery}
        />
      </Modal>

      <Modal show={isZoomVisable} onClose={handleCloseZoom}>
        <ImageZoom gallery={currentZoom} />
      </Modal>

      <h3 className="row justify-content-center">Gallery</h3>
      <br />

      <Row s={1} md={2} className="g-4">
        {galleries
          .sort((a, b) => (a.id < b.id ? 1 : -1))
          .map((gallery) => (
            <div key={gallery.id}>
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col className="row justify-content-center">
                  <Card className="row justify-content-center" style={{ width: "40rem" }}>
                    <br />
                    <Card.Img variant="top" src={gallery.image} />
                    <Card.Body>
                      <Card.Title className="row justify-content-center">{gallery.title}</Card.Title>
                      <Card.Text className="row justify-content-center">{gallery.materials} </Card.Text>
                      <Card.Text className="row justify-content-center">{gallery.description} </Card.Text>
                      <Card.Text className="row justify-content-center">
                        {gallery.size}&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; {gallery.price}
                      </Card.Text>
                      <button className="button1" onClick={() => handleShowZoom(gallery)}>
                        View
                      </button>

                      <br />

                      {localStorage.jwt === undefined ? (
                        <></>
                      ) : (
                        <>
                          <div className="row justify-content-center">
                            <button className="button1" onClick={() => handleShowGallery(gallery)}>
                              Edit Info
                            </button>
                          </div>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </div>
          ))}
      </Row>
    </div>
  );
}
