user = {
    id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age: 17,
    scores: { english: 10, math: 19.5, physics: 14 },
    };

function addScore(user,score,course){
    user.scores[course]=score;
    return user;
}

console.log(addScore(user,12,'chemistry'));

//2
function newRole(user){
    let ages = user.age;
    if(ages < 18) 
        (user.roles).push("very young");
    return user;
}

 console.log(newRole( user)); 

 //3

let entries = Object.entries(user); 
let newArray = entries.concat([['fatherName','ali']]);
let obj={};
//newArray.reduce((i)=>obj[newArray[i][0]]= newArray[i][1])
for(let i=0;i<newArray.length;i++){
    obj[newArray[i][0]]= newArray[i][1]};
console.log(obj);