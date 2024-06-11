// export default function Fruits() {
//   const fruits = ["Apple", "Mango", "Banana", "Watermelon", "Orange"];

//   return (
//     <>
//       <ul>
//         <h1>Fruits</h1>
//         {fruits.map((value) => (
//           <li key={value}>{value}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default function Fruits() {
//   const fruits = [
//     { name: "Orange", price: 10, emoji: "🍑" },
//     { name: "Strawberry", price: 12, emoji: "🍓" },
//     { name: "Apple", price: 8, emoji: "🍎" },
//     { name: "Banana", price: 8, emoji: "🍌" },
//   ];
//   return (
//     <>
//       <ul>
//         <h1>Fruits</h1>
//         {fruits.map((value) => (
//           <li key={fruits.name}>
//            {value.emoji} {value.name} ${value.price} 
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

import Fruit from "./Fruit";

export default function Fruits() {
    const fruits = [
        { name: "Orange", price: 10, emoji: "🍊", soldOut: true },
        { name: "Strawberry", price: 12, emoji: "🍓", soldOut: false },
        { name: "Apple", price: 8, emoji: "🍎", soldOut: true },
        { name: "Banana", price: 3, emoji: "🍌", soldOut: false },
    ];

    return (
        <div>
            <h1>Fruits</h1>
            <ul>
                {fruits.map(fruit => (
                    <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldOut={fruit.soldOut} />
                ))}
            </ul>
        </div>
    );
}
