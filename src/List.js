import "./List.css";

function List({ people }) {
    return (
        <>
            {people.map((person) => (
                <div className="person-wrap" key={person.id}>
                    <div>
                        <img src={person.image} alt={person.name} />
                    </div>
                    <div className="info">
                        <h5>{person.name}</h5>
                        <p>{person.age}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default List;
