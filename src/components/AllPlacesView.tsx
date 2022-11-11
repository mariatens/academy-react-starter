import PlaceView from "./PlaceView";
import { places, OnePlace } from "./myPlaces";

function AllPlacesView(): JSX.Element {
  return (
    <ul>
      {places.map((place: OnePlace) => {
        return <PlaceView place={place} key={place.key} />;
      })}
    </ul>
  );
}
export default AllPlacesView;
