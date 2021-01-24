"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var mygolfCoach = new GolfCoach_1.GolfCoach();
//declare array of coach initially empty
var theCoaches = [];
// add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(mygolfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoach = theCoaches_1[_i];
    console.log(tempCoach.getDailyWorkOut());
}
