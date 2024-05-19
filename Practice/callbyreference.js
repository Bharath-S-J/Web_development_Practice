const p1={
    name:'Sam',
    age:'23'
}

const p2={
    name:'Samuel',
    age:'43'
}

function mutate(obj){
    obj.age++
    
}
//when used primitive copy is passed
//when used objects address/reference is passed

mutate(p1)
console.log(p1)

let num=30
function premitivemutate(num){
    num++
    console.log(num)    
}


premitivemutate(num)
console.log(num)

