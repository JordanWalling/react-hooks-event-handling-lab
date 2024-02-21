// Code Keypad Component Here

function Keypad() {
  function handleInputChange() {
    console.log("Entering password...");
  }
  return <input type="password" onChange={handleInputChange} />;
}

export default Keypad;
