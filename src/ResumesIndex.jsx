import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import { ResumesShow } from "./ResumesShow";
import { Modal } from "./Modal";

export function ResumesIndex() {
  const [resumes, setResumes] = useState([]);

  const handleIndexResumes = () => {
    axios.get("https://artist-website-api.com/resumes.json").then((response) => {
      console.log(response.data);
      setResumes(response.data);
    });
  };

  useEffect(handleIndexResumes, []);

  const [isResumesShowVisable, setIsResumesShowVisable] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  const handleShowResume = (resume) => {
    console.log("handleShowResume");
    setIsResumesShowVisable(true);
    setCurrentResume(resume);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsResumesShowVisable(false);
  };

  const handleUpdateResume = (id, params) => {
    console.log("handleUpdateResume");
    axios.patch(`https://artist-website-api.com/resumes/${id}.json`, params).then((response) => {
      setResumes(
        resumes.map((resume) => {
          if (resume.id === response.data.id) {
            return response.data;
          } else {
            return resume;
          }
        })
      );
      handleClose();
    });
  };

  const handleDestroyResume = (resume) => {
    console.log("handleDestroyResume", resume);
    axios.delete(`https://artist-website-api.com/resumes/${resume.id}.json`).then((response) => {
      setResumes(resumes.filter((r) => r.id !== resume.id));
      handleClose();
    });
  };

  return (
    <div className="row justify-content-center" id="resumes-index">
      <br />
      <h3>Events</h3>
      <Row s={0} md={1} className="g-4">
        {resumes
          .sort((a, b) => (a.id < b.id ? 1 : -1))
          .map((resume) => (
            <>
              <div key={resume.id}>
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col className="row justify-content-center">
                    <Card style={{ width: "30rem" }}>
                      <Card.Body>
                        <Card.Title>{resume.summary}</Card.Title>
                        <Card.Text>Date: {resume.date} </Card.Text>
                        <a target="_blank" rel="noopener noreferrer" href={resume.url}>
                          Link to external site
                        </a>
                        <br />
                        <br />
                        <br />

                        {localStorage.jwt === undefined ? (
                          <></>
                        ) : (
                          <>
                            <button className="button1" onClick={() => handleShowResume(resume)}>
                              Edit Info
                            </button>
                          </>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </div>
            </>
          ))}
      </Row>

      <Modal show={isResumesShowVisable} onClose={handleClose}>
        <ResumesShow resume={currentResume} onUpdateResume={handleUpdateResume} onDestroyResume={handleDestroyResume} />
      </Modal>
    </div>
  );
}
