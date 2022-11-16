export default function Home(props) {
  return (
    <main>
      <h1 className="home--title">You have No Notes</h1>
      <button className="new-note" onClick={props.createNewNote}>
        Create One
      </button>
    </main>
  );
}
