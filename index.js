// if even display even
// if odd display odd
// use number up to the one provided
function evenOdd(number) {
  for (let i = 0; i <= number; i++) {
    // if (i % 2 == 0) {
    //   // console.log("even");
    //   console.log(i, "EVEN");
    // } else {
    //   console.log(i, "ODD");
    // }
    result = i % 2 == 0 ? "EVEN" : "ODD";
    console.log(i, result);
  }
}
evenOdd(5);
