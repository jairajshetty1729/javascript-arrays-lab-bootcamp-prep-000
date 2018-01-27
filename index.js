const app = "I don't do much."
var kittens=["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}
function appendKitten(name){
 var new1= kittens;
 new1.push(name);
return new1.pop() ;

}