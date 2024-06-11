export default function Message(){
    let handleClick = () => alert("Button Clicked");
    return(
        <>
        <button onClick={handleClick}>Click here to get a message</button>
        </>
    )
}