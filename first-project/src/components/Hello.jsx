// const name = "Fahad";
const func = () => "Whats up!";

// destructuring
// after adding this in func you can dlt this variable
// const {name,message} = props

// properties or props use to make component dynamic

// more precise way to use props in func parameter
// function Hello({ name, message, emoji, seatNumbers }) {
  // return (
    // <>
      {/* <h1>Hello Future AI Engineer {name}</h1>
      <p>{func()}</p> */}
      {/* <h1>Hello Future AI Engineer {8*8}</h1> */}

      {/* props */}
      {/* <h1>{props.message} {props.name}</h1> */}

      {/* destructuring of props */}
//       <h1>
//         {message} {emoji} {name} {seatNumbers}
//       </h1>
//     </>
//   );
// }

function Hello({person}){
  return (
    <>
    <h1>{person.message} {person.name} {person.emoji} {person.seatNumbers}</h1>
    </>
  )
}

export default Hello;
