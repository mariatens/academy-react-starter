import PlaceEntry from "./PlaceEntry";

function MainContent(): JSX.Element{
    return(
        <main>
       <PlaceEntry 
        title = {"Kowloon"}
        placeName = {"Hong Kong"}
        countryName = {"China"}
        mainImg = {"https://images.unsplash.com/photo-1616394158624-a2ba9cfe2994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
        locationLink = {"https://goo.gl/maps/ZJycWjboJtWQFuzC7"}
        reason = {" Nice weather, nature and city closeby, cheap and delicious food"}
       />

       <PlaceEntry 
       title = {"Mirador de Chipeque"}
       placeName = {"Tenerife"}
       countryName = {"Spain"}
       mainImg = {"https://thumbs.dreamstime.com/b/panorama-el-teide-volcano-orotava-valley-mirador-de-chipeque-tenerife-canary-islands-spain-75527426.jpg"}
       locationLink = {"https://goo.gl/maps/mZM5oEpjKQSXpTQu9"}
       reason = {" Lovely view, fresh air, calm"}
       />
       <PlaceEntry 
       title = {"Goatfell"}
       placeName = {"Isle of Arran"}
       countryName = {"Scotland"}
       mainImg = {""}
       locationLink = {"https://goo.gl/maps/u4Zoj9HYeExQNFJ96"}
       reason = {""}
       />
       <PlaceEntry 
       title = {""}
       placeName = {""}
       countryName = {""}
       mainImg = {""}
       locationLink = {""}
       reason = {""}
       />
    </main>
    )
}

export default MainContent;