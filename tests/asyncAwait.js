async function demo(){
console.log("Line1");
const response = await fetch('https://api.sampleapis.com/coffee/hot');
console.log(response);
}

demo()