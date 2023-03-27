export function ResumesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateResume(props.resume.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyResume(props.resume);
  };

  return (
    <div>
      <p>{props.resume.summary}</p>
      <a href={props.resume.url}>Link to article </a>

      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <h1>Edit Resume Entry:</h1>
          <form onSubmit={handleSubmit}>
            <div>Summary</div>
            <div>
              <input type="text" name="summary" defaultValue={props.resume.summary} />
            </div>
            <div>Link to Event site:</div>
            <div>
              <input type="text" name="url" defaultValue={props.resume.url} />
            </div>
            <div>Date:</div>
            <div>
              <input type="text" name="date" defaultValue={props.resume.date} />
            </div>

            <button type="submit">Update Entry</button>
          </form>
          <div>
            <button onClick={handleClick}>Delete resume Entry</button>
          </div>
        </>
      )}
    </div>
  );
}
