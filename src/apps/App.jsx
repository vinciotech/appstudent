
import '../assets/App.css';
import { Contatore } from '../components/Contatore';
import { Pannello } from '../components/Pannello';
import { ListaNomi } from '../components/ListaNomi';
 
function App() {
  // destructuring
  // const [stato, setStato] = useState(null);
  
  const lista = ["Giuseppe Folli", "Manlio Reverberi","Ottorino Oppi"];
  const lista2 = ["Rosario ricci","Flavia Oferi","Stefania, Carlucci","Claudio Mori"];
  return (
    <div className="App">
       
      <p>Elenco di studenti</p>
      <ListaNomi nomi={lista} />         
    </div>
  );
}

export default App;
