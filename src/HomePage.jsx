import homeImage from "./assets/images/NewBrightonBeach.jpeg";
export function HomePage() {
  return (
    <div id="homePage" className="row justify-content-center">
      <br />
      <p></p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, backgroundColor: "#787255", height: "3px" }} />

        <h3 style={{ margin: "0 10px" }}>Impressionist Painter in Pastel</h3>

        <div style={{ flex: 1, backgroundColor: "#787255", height: "3px" }} />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <img src={homeImage} style={{ width: "60%" }} />
      <p className="row justify-content-center">
        New Brighton Beach, Santa Cruz CA &nbsp;&nbsp;|&nbsp;&nbsp; Pastel &nbsp;&nbsp;|&nbsp;&nbsp; 11 x
        14&nbsp;&nbsp;|&nbsp;&nbsp; $750.00
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
