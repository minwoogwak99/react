import Note from "./components/Note";

const Header = (props) => {
  return <h1>{props.header}</h1>;
};

const App = ({ notes }) => {
  return (
    <div>
      <Header header="Notes" />
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default App;
