import "./styles.css";
import data from "./data.js";
import List from "./List.js";
import Button from "./Button.js";
import { useState } from "react";

function App() {
    const [people, setPeople] = useState(data);

    const handleClick = () => {
        setPeople([]);
    };

    return (
        <div className="App">
            <div className="wrapper">
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                <Button title="Clear All" handleClick={handleClick} />
            </div>
        </div>
    );
}

export default App;
