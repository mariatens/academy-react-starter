interface PlaceProps {
    title: string;
    placeName: string;
    countryName: string;
    mainImg: string;
    locationLink: string;
    reason: string;
}
function PlaceEntry(props: PlaceProps): JSX.Element {
    return (
      <section>
        <h2>{props.title}</h2>
        <p>
          One of my favourite places is {props.placeName} in {props.countryName}.
          {props.reason}
        </p>
        <img src = "#"></img>
        <a href = "#"></a>
      </section>
    );
  }
  
export default PlaceEntry;
  