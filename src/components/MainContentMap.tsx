import PlaceEntry from "./PlaceEntryMap";

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

const places: PlaceProps[] = [
  {
    key: 1,
    title: "Hong Kong",
    placeName: "Hong Kong",
    countryName: "China",
    mainImg:
      "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    locationLink: "https://goo.gl/maps/ZJycWjboJtWQFuzC7",
    reason: " Nice weather, nature and city closeby, cheap and delicious food",
    alt: "View of Kowloon in Hong Kong at night",
  },
  {
    key: 2,
    title: "Mirador de Chipeque",
    placeName: "Tenerife",
    countryName: "Spain",
    mainImg:
      "https://thumbs.dreamstime.com/b/panorama-el-teide-volcano-orotava-valley-mirador-de-chipeque-tenerife-canary-islands-spain-75527426.jpg",

    locationLink: "https://goo.gl/maps/mZM5oEpjKQSXpTQu9",
    reason: " Lovely view, fresh air, calm",
    alt: "View of El Teide from Mirador de Chipeque",
  },
  {
    key: 3,
    title: "Goatfell",
    placeName: "Isle of Arran",
    countryName: "Scotland",
    mainImg:
      "https://images.unsplash.com/photo-1505486068253-af049774746c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2816&q=80",

    locationLink: "https://goo.gl/maps/u4Zoj9HYeExQNFJ96",
    reason: " Nice hike and views",
    alt: "View from Goatfell mountain in isle of Arran",
  },
  {
    key: 4,
    title: "Prague",
    placeName: "Prague",
    countryName: "Czech Republic",
    mainImg:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    locationLink: "https://goo.gl/maps/SSsHzjbQLSqVeMB28",
    reason: " Impressive architecture, cheap food, nice beer",
    alt: "View of Prague's bridge",
  },
];

//.map over this array to return an instance of the Place component for each element
function MainContentMap(): JSX.Element {
  return(
  <ul>
  {places.map((place) => {
    return <PlaceEntry place={place} key={place.key} />;
  })}
</ul>
  );
}
export default MainContentMap;
