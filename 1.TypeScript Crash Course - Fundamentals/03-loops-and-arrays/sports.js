var sportsOne = ["Golf", "Cricket", "Tennis", "Swiming"];
/*
for(let i=0;i<sportsOne.length;i++){
    console.log(sportsOne[i]);

}
*/
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var temp = sportsOne_1[_i];
    if (temp == "Cricket")
        console.log(temp + " << My Favorite!");
    else
        console.log(temp);
}
