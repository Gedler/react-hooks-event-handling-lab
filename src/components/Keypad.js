// Code Keypad Component Here
function KeyPad (){
    console.log("I am the keypad!")
    return (
    <input type="password" name="keypad" onChange={handleChange}/>
    )}

function handleChange() {
    console.log("Entering password...")
}
    
export default KeyPad; 

