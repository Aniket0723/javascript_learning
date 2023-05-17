// Objects insisde array 

let blocklist = [{userName:"John",reason:"Abusive Content"}
                ,{userName:"Aniket",reason:"CopyWrite"}]
console.log(blocklist)

for(let i=0;i<blocklist.length;i++){
    console.log(` ${blocklist[i].userName} blocked due to ${blocklist[i].reason}`)
}

