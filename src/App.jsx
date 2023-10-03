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
     
     <main>
      <Card/>
     </main>
    
    </>
   );
}
 
export default App;
