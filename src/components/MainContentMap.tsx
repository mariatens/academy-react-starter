import PlaceEntry from "./PlaceEntryMap"

interface PlaceProps {
    title: string;
    placeName: string;
    countryName: string;
    mainImg: string;
    alt: string;
    locationLink: string;
    reason: string;
  }

const places:PlaceProps[] = [
    {
         title: "Hong Kong",
         placeName: "Hong Kong", 
         countryName:"China", 
         mainImg: "https://images.unsplash.com/photo-1616394158624-a2ba9cfe2994?ixlib:rb-4.0.3&ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto:format&fit:crop&w:687&q:80", 
         locationLink: "https://goo.gl/maps/ZJycWjboJtWQFuzC7", 
         reason:"Nice weather, nature and city closeby, cheap and delicious food", 
         alt: "View of Kowloon in Hong Kong at night"
    },
    {
        title:"Mirador de Chipeque",
        placeName:"Tenerife",
        countryName:"Spain",
        mainImg:
          "https://thumbs.dreamstime.com/b/panorama-el-teide-volcano-orotava-valley-mirador-de-chipeque-tenerife-canary-islands-spain-75527426.jpg",
        
        locationLink:"https://goo.gl/maps/mZM5oEpjKQSXpTQu9",
        reason:" Lovely view, fresh air, calm",
        alt:"View of El Teide from Mirador de Chipeque"
    }
]

//.map over this array to return an instance of the Place component for each element
function MainContentMap(): JSX.Element {
    return(
        <section>
        places.map(PlaceEntry)
        </section>
    )
}

export default MainContentMap