const cats=["Milo","Otis","Garfield"]
function  destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}
function  destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
// function appendCat(Broom) {
//     const copyOfCats = cats.slice();
//     copyOfCats.push(Broom);
//     return copyOfCats
// }
function appendCat(){
    let newCats = [...cats, "Broom"];
    return newCats
}
//  I use the spread operator because i wanted to add to the begining (non desctructive method)
function prependCat(){
    let newCats = ["Arnold", ...cats];
    return newCats
}
// I need to use slice here because i want to remove an element nondestructively 
function removeLastCat(){
    let differentCat = cats.slice(0, cats.length-1)
    return differentCat
    
}
function removeFirstCat(){
    let anotherCat=cats.slice(1)
    return anotherCat
}