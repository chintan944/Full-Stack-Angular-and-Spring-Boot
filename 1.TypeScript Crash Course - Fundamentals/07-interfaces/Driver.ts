import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let mygolfCoach = new GolfCoach();

//declare array of coach initially empty
let theCoaches:Coach[] = [];

// add the coaches to the array

theCoaches.push(myCricketCoach);
theCoaches.push(mygolfCoach);



for(let tempCoach of theCoaches){

console.log(tempCoach.getDailyWorkOut());

}