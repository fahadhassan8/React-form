import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent(){
    // const display = true;
    // if(display){
    //     return(
    //         <Code/>
    //     )
    // }
    // else{
    //     return(
    //         <Welcome/>
    //     )
    // }
    
    // Element variable
    // const display = true;
    // let msg;
    // if(display){
    //     msg = "Hi there"
    // }else{
    //     msg = "Bye there"
    // }
    // return msg

    // Ternary Operator
    let display = true;
    // return display ? <h1>Hi there!</h1> : <h1>Bye there!</h1>
    return display ? <Code /> : <Welcome/>
}