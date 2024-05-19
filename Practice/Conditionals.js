function voting(agee)
{
    if(agee >= 18){ return true }
    else { return false }
  
}

const eligibility = voting(34)
if (eligibility){
    console.log("U are elegible to vote please do vote!!!") 
}
else {
    console.log("U aren't elegible to vote please wait untill u turn 18 to vote!!!") 
}
