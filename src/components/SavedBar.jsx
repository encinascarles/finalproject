import "./SavedBar.css";
import { state_saved } from "../state";
import { observer } from "mobx-react-lite";

function SavedCity({ city }) {
  return (
    <div className="saved-city">
      <h2>{city}</h2>
    </div>
  );
}


function SavedBar() {
    const savedCities = state_saved.getSaved();
    //const savedCities = ["London", "Paris", "New York"];
  return (
    <div className="saved-bar">
      <h1>Saved Cities</h1>
      {savedCities.map((city) => (
        <SavedCity city={city} />
      ))}
    </div>
  );
}


export default observer(SavedBar);