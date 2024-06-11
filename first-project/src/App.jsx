import Hello from "./components/Hello";
import Fruits  from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";

function App() {
  // const seatNumbers = [1,4,7];
  const person = {
    message: "Hi there!",
    emoji: "👋",
    name: "Fahad",
    seatNumbers: [1,4,7]
  }
  return (
    <>
      {/* <ConditionalComponent/> */}
      <Fruits />
      <Message />
      {/* <Hello person={person}/> */}
      {/* <Hello message="Hi there!" emoji="👋" name="Fahad" seatNumbers={seatNumbers} /> */}
      {/* <Hello message="Hi Dear" name="Anees"/> */}
      {/* <p>What's up!</p> */}
    </>
  );
}

export default App;
