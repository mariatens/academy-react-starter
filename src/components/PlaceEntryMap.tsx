import "./style.css";

interface PlaceProps {
  title: string;
  placeName: string;
  countryName: string;
  mainImg: string;
  alt: string;
  locationLink: string;
  reason: string;
}

function PlaceEntry(props: PlaceProps): JSX.Element {
  return (
    <section className="body">
      <h2 className="app-title">{props.title}</h2>
      <p>
        One of my favourite places is {props.placeName} in {props.countryName}.
        {props.reason}.
      </p>
      <div>
        <img
          src={props.mainImg}
          alt={props.alt}
          width="600px"
          height="300px"
        ></img>
      </div>
      <br></br>
      <a href={props.locationLink} target="blank">
        Location
      </a>
    </section>
  );
}

export default PlaceEntry;
