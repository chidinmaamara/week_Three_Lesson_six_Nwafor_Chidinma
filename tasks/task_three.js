 const continents = {
    Asia: 'Indonesia, China, Singapore, Philipines',
    Africa: 'Nigeria, Ghana, Angola, Algeria',
    northAmerica: 'United States, Canada, Mexico, Cuba',
} 
// used the for...in loop to iterate over the object 
for(let output in continents){
    console.log(`${output} ${continents[output]}`);
}
//  logs  Asia: 'Indonesia, China, Singapore, Philipines',
   // Africa: 'Nigeria, Ghana, Angola, Algeria',
   // northAmerica: 'United States, Canada, Mexico, Cuba',