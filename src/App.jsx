import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Card from "./components/Card";

const App = () => {
  return ( 
    <>
     <Navbar/>
     <Header/>
     <Gallery/>
     
     <div className="App">
     <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
        />
        <Card
          imgAlt="Card Image 2"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
      </div>
     </div>
    
    </>
   );
}
 
export default App;
