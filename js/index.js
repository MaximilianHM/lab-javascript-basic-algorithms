// Iteration 1: Names and Input
// 
let hacker1 = "Jose";
let hacker2 = "Max"

console.log("The driver's name is " + hacker1);

console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " +  hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops

// 3.1
let aux = ''

for (let i = 0; i < hacker1.length; i++) {
    aux += hacker1[i].toLocaleUpperCase() + " ";
}

console.log(aux);

// 3.2
let reverseName1 = hacker2.split('').reverse().join('');
console.log(reverseName1);


// 3.3

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}

// 3.BONUS #1

function WordCount(str) { 
    let words = str.split(" ").length - 2;
    let wordEt = str.split(" et ").length - 1;

    return `The total of words are ${words} and the totals of "et" is ${wordEt}!`
  }
  
  console.log(WordCount(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu augue malesuada turpis consectetur semper. Etiam nibh felis, pulvinar ac tortor sed, commodo tempus tortor. Aliquam tincidunt varius dolor, in tincidunt ante sollicitudin at. Nulla facilisi. Phasellus a magna pulvinar, finibus tellus quis, eleifend neque. Praesent rutrum et velit id venenatis. Phasellus sit amet turpis et sem viverra ultricies. Aenean non sem in purus gravida scelerisque in in nunc. Mauris vestibulum sapien elit, eget pharetra dolor fringilla vitae. Sed dapibus nisl sem, ac euismod diam dignissim vel. Aenean aliquam mi vitae nibh iaculis, vel finibus nibh vulputate. Mauris eu velit lectus. In hac habitasse platea dictumst.
  In hac habitasse platea dictumst. Etiam justo neque, ornare at turpis in, malesuada iaculis massa. Morbi a nisl efficitur, vehicula nulla maximus, vestibulum nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi fringilla finibus augue, ut consectetur elit maximus sit amet. Vivamus tincidunt tortor nec erat pellentesque, vel pulvinar mi hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  Vivamus sagittis iaculis sodales. Suspendisse pulvinar eros et est viverra lobortis. In at libero justo. Donec leo lectus, eleifend sed imperdiet ac, iaculis quis sapien. Duis ac nulla sapien. Cras luctus fermentum vulputate. Etiam at luctus sem. Integer venenatis ex neque, nec laoreet risus ultrices a. Nulla vulputate elit ut cursus eleifend.`));


//  3.BONUS #2

let phraseToCheck = `No 'x' in Nixon`

let justLetters = phraseToCheck.replace(/[^A-Z0-9]/ig, "").toLowerCase();
let reverLetters = justLetters.split('').reverse().join('').toLocaleLowerCase();

if (justLetters === reverLetters) {
    console.log(`This phrase is a polindrome.`);
} else {
    console.log(`This phrase isn't a polindrome.`);
}