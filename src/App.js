
import './App.css';
import Adress from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilPhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <section className='App'>
    <div className="card">
  <ProfilPhoto/>
  <FullName/>
  <Adress/>
    </div>
    
    
</section>
  );
}

export default App;
