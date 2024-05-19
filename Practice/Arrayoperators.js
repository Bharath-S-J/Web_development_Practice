let frnds=[]
function frndcircle(newfrnd)
{
    frnds.push(newfrnd)
    console.log(frnds)
    console.log("Currently my frndcircle has "+frnds.length+" members\n")
}

frndcircle("Bharath")
frndcircle("Abhi")
frndcircle("Amogh")
frndcircle("Abdul")
frnds.pop()
console.log("May be after college ends it might hv " + frnds.length +" members as last frnd might go\n")
frnds.pop()
console.log("May be after  that it might hv " + frnds.length +" members as last frnd might go\n") 
frnds.pop()
console.log("May be after  that it might hv " + frnds.length +" members as last frnd might go\n") 
frnds.pop()
console.log("May be lastly I would hv no one in my current friend circle as past friends would be : " + frnds.length+"\n") 

