import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Card from "./components/Card";
import Section from "./components/Section";

const App = () => {
  return ( 
    <>
     <Navbar/>
     <Header/>
     <Gallery/>
     
     <main>
      <Card/>
      <Section/>
     </main>
    
    </>
   );
}
 
export default App;
