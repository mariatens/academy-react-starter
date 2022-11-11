import "./style.css";
import { OnePlace } from "./myPlaces";

interface PlaceViewProps {
  place: OnePlace;
}
// need to change props to onePlace? and then do onePlace.title etc
function PlaceView(props: PlaceViewProps): JSX.Element {
  return (
    <section className="body">
      <h2 key={props.place.key} className="app-title">
        {props.place.title}
      </h2>
      <p>
        One of my favourite places is {props.place.placeName} in{" "}
        {props.place.countryName}.{props.place.reason}.
      </p>
      <div>
        <img
          src={props.place.mainImg}
          alt={props.place.alt}
          width="600px"
          height="300px"
        ></img>
      </div>
      <br></br>
      <a href={props.place.locationLink} target="blank">
        Location
      </a>
    </section>
  );
}

export default PlaceView;
