function List(props) {
  if(!props.animals){
    return <div>Loading...</div>;
  }

  if(props.animals.length === 0) {
    return <div>There are no animals in the list</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        // return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null ;
        return animal.startsWith("L") && <li key={animal}>{animal}</li> ;
      })}
    </ul>
  );
}

export function MyAnimals() {
  const animals = ["Lion", "Spider", "Shark", "Leopard"];

  return (
    <>
      <h1>Animals: </h1>
      <List animals={animals} />
    </>
  );
}
