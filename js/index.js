var data = new Date();
console.log(data);

setTimeout(intr, 9000);

function intr(){
  console.log("--->"+data.getSeconds());
}
