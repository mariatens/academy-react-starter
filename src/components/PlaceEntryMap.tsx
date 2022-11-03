
interface PlaceProps {
    title: string;
    placeName: string;
    countryName: string;
    mainImg: string;
    alt: string;
    locationLink: string;
    reason: string;
  }
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
function PlaceEntry(props: PlaceProps): JSX.Element {
    return (
      <section>
        <h2 style = {styles}>{props.title}</h2>
        <p  style = {styles}>
          One of my favourite places is {props.placeName} in {props.countryName}.
          {props.reason}.
        </p>
        <div style = {styles}>
        <img
          style = {styles}
          src={props.mainImg}
          alt={props.alt}
          width="600px"
          height="300px"
        ></img>
        </div>
        <a href={props.locationLink}  style = {styles}>Location</a>
      </section>
    );
  }
  
  export default PlaceEntry;