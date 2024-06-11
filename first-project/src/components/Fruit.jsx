export default function Fruit({ name, price, emoji, soldOut }) {
    return (
        <>
            {/* <li>
            {emoji} {name} ${price}
            </li> */}
            {/* soldOut Condition */}
        <li>
            {emoji} {name} ${price} {soldOut ? "Sold Out" : ""}
        </li>

            {/* using statement */}
            {/* {price > 5 ? ( <li>{emoji} {name} ${price}</li> ) : ( "" )} */}
        </>
    );
}