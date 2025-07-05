/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

Regular Expressions | Fundamentals
*/

function validatePIN(pin) {
  const len = pin
    .trim()
    .split("")
    .filter((number) => !isNaN(Number(number)) && number !== " ").length;
  return (len === 4 || len === 6) && len === pin.length;
}
