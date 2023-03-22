/***************************
 * Create a program to display a list of Pokemon names
 * and there more recent encounters, optional is display
 * count of encounters
 * 
 * Display the encounters in a table with simple pagination
 * 
 
 * to get the list of pokemon you can use the following api
 *    https://pokeapi.co/api/v2/pokemon/?limit=10&offset=<offset>
 * 
 * to get the encounter use the following api
 *    https://pokeapi.co/api/v2/pokemon/<name>/encounters
 */
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Pokemon Encounters</h1>
      {/* Your table here */}

      {/* pagination */}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
