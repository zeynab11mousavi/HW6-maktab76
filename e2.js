let rate = [1,2,3,4,5];
function starRating(array){
    let average = array.reduce((item, cur) => item + cur);
    let result = rate.map(function(x, index){ 
    return array[index] * x ;}).reduce(function(x,y){
    return (x+y) });
    return result/average;}
//let ave= array.reduce((item, cur) => item + cur,0);




let final=starRating([0,2,0,1,23]);

let stars="";
for(let i=1;i<=Math.round(final);i++){
    stars+= '*'; 
}
console.log(`[${final.toFixed(2)}]  ${stars}`);