//first object and its properties
const Africa = {
    northAfrica: 'egypt, libya, morrocco, tunisia',
    westAfrica: 'nigeria, ghana, benin, togo',
    southAfrica: 'namibia, lesotho, southafrica, botswana',
} 

//second object and its properties
const Europe = {
    northEurope: 'denmark, finland, iceland, estonia',
    westEurope: 'austria, belgium, germany, france',
    eastEurope: 'russia, ukraine, poland, slovakia'
}

//using the Object.assign merges the two objects and puts them into the empty bracket before them
let afriEurope = Object.assign({}, Africa, Europe);
console.log(afriEurope);