import axios from "axios";

export function ResumesNew() {
  const handleCreateResume = (params) => {
    axios.post("https://artist-website-api.com/resumes.json", params).then((response) => {
      const newResume = response.data;
      console.log("New Resume item added", newResume);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateResume(params);
    event.target.reset;
  };

  return (
    <div id="Resume-new">
      <br />
      <form onSubmit={handleSubmit}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Add Event</h5>
            <p className="card-text">
              <div>
                Summary of Event: <input type="text" name="summary" />
              </div>
              <div>
                Date of Event: <input type="text" name="date" />
              </div>
              <div>
                Event Website: <input type="text" name="url" />
              </div>
              <button className="button1" type="submit">
                Add Item to Resume
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
