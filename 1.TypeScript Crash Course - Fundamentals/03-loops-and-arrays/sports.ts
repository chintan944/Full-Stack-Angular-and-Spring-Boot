let sportsOne: string[]=["Golf","Cricket","Tennis","Swiming"];

/*
for(let i=0;i<sportsOne.length;i++){
    console.log(sportsOne[i]);

}   
*/

for(let temp of sportsOne)
{
    if(temp == "Cricket")

    console.log(temp + " << My Favorite!");

    else
    console.log(temp);

}