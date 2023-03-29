import homeImage from "./assets/images/pelicans.jpeg";

export function HomePage() {
  return (
    <div id="homePage" className="row justify-content-center">
      <br />
      <p></p>
      <img src={homeImage} style={{ width: "60%" }} alt="image" />
      <p className="row justify-content-center">
        Pelicans in Cypress Trees &nbsp;&nbsp;|&nbsp;&nbsp; Pastel &nbsp;&nbsp;|&nbsp;&nbsp; 11 x
        14&nbsp;&nbsp;|&nbsp;&nbsp; $750.00
      </p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "-200px" }}>
        <div style={{ flex: 1, backgroundColor: "#787255", height: "3px" }} />

        <p style={{ fontSize: "45px", margin: "0 25px" }}>Impressionist Painter in Pastel</p>

        <div style={{ flex: 1, backgroundColor: "#787255", height: "3px" }} />
      </div>
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
