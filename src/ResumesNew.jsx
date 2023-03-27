import axios from "axios";

export function ResumesNew() {
  const handleCreateResume = (params) => {
    axios.post("http://localhost:3000/resumes.json", params).then((response) => {
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
      <form onSubmit={handleSubmit}>
        <h2>Add to Press & Awards:</h2>
        <div>
          <div>Summary:</div>
          <input type="text" name="summary" />
        </div>
        <div>
          <div>Press Link/URL:</div>
          <input type="text" name="url" />
        </div>
        <div>
          <div>Date of Event:</div>
          <input type="text" name="date" />
        </div>

        <button type="submit">Add Item to Resume</button>
      </form>
    </div>
  );
}
