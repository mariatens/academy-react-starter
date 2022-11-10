import "./style.css";

interface PlaceProps {
  key: number;
  title: string;
  placeName: string;
  countryName: string;
  mainImg: string;
  alt: string;
  locationLink: string;
  reason: string;
}
interface PlaceMapItemProps {
  // the type of "place" is the defined interface "Place"
    place: PlaceProps;
  }
// need to change props to onePlace? and then do onePlace.title etc
function PlaceEntry(props: PlaceMapItemProps): JSX.Element {
  return (
    <section className="body">
      <h2 key={props.place.key} className="app-title">{props.place.title}</h2>
      <p>
        One of my favourite places is {props.place.placeName} in {props.place.countryName}.
        {props.place.reason}.
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

export default PlaceEntry;
