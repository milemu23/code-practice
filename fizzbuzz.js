//iterate from 1 to 100
//multiples of 3 - Fizz
//multiples of 5 - Buzz
//multiples of 3 and 5 - FizzBuzz

for (i = 0; i < 100; i++) {
  if (i%3 == 0 && i%5 == 0) {
      console.log('FizzBuzz');
  } else if (i%3 == 0) {
      console.log('Buzz');
  } else if (i%5 == 0){
      console.log('Fizz');
  }else {
      console.log(i);
  }
}