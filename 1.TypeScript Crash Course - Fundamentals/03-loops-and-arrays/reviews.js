var reviews = [4, 5, 6, 45, 58, 2.3];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    console.log(reviews[index]);
    total += reviews[index];
}
var average = total / reviews.length;
console.log("Review average = " + average);
