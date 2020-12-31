let reviews:number[] = [4, 5, 6, 45, 58, 2.3];
let total:number=0;

for (let index = 0; index < reviews.length; index++) {
   
    console.log(reviews[index]);

    total +=reviews[index];
    
}

let average:number=total/reviews.length;

console.log("Review average = "+average);