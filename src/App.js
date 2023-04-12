import logo from './logo.svg';
import './App.css';
import {useQuery } from "@apollo/client";
import {GET_ALL_CHARACTERS} from "./queries";
import Card from "./Card";

const App = () => {
  const {loading, error, data} = useQuery(
      GET_ALL_CHARACTERS,
      {variables: {page: 5}}
  )
  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <header className="text-center">
        Hello rick and morty!
      </header>
      <div className="row">
          {
              data?.characters?.results.map(character => <Card character={character} key={character.id}/> )
          }
      </div>
    </>
  );
}

export default App;
