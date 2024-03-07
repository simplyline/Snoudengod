// Helper function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
  }
  
  // Main code to use the helper function
  const number = 7; // You can change this number to check if different numbers are even
  const even = isEven(number);
  if (even) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
  