import homeImage from "./assets/images/NewBrightonBeach.jpeg";
export function HomePage() {
  return (
    <div id="homePage" className="row justify-content-center">
      <p></p>
      <img src={homeImage} style={{ width: "60%" }} />
      <p className="row justify-content-center">
        New Brighton Beach, Santa Cruz CA &nbsp;&nbsp;|&nbsp;&nbsp; Pastel &nbsp;&nbsp;|&nbsp;&nbsp; 11 x
        14&nbsp;&nbsp;|&nbsp;&nbsp; $750.00
      </p>
    </div>
  );
}
