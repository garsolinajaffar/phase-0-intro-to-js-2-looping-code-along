// Birthday message
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  
  // Wrapping gifts
  const gifts = ["teddy bear", "drone", "doll"];
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts; // the function should return the wrapped gifts
  }
  wrapGifts(gifts); // call the function with the provided gifts array
  
  // Writing cards
  function writeCards(array, string) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
  }
  const cards = writeCards(["Alice", "Bob", "Carol"], "chocolate");
  console.log(cards); // print the generated cards
  
  // Counting down
  function countDown(n) {
    while (n >= 0) {
      console.log(n--); // decrease n and print it until 0
    }
  }
  countDown(5); // call the function with n=5
  




