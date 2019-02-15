function triangleChecker(){
  var height = document.getElementById("length1").value;
  var newHeight = parseFloat(height);
  var length = document.getElementById("length2").value;
  var newLength = parseFloat(length);
  var width = document.getElementById("length3").value;
  var newWidth = parseFloat(width);
  var triangle = [];

  triangle = [newHeight,newLength,newWidth];

  if((triangle[0] > 0) && (triangle[1] > 0) && (triangle[2] > 0)){
    if ((triangle[0] + triangle[1]) <= triangle[3]) || (triangle[0] + triangle[2] <= triangle[1]) || (triangle[1] + triangle[2]) <= triangle[0]){
      alert("A triangle cannot be formed");
    } else {
      if(triangle[0] === triangle[1] && triangle[1] === triangle[2]){
        alert("Your measurements form an equilateral triangle");
      }else if(triangle[0] === triangle[1] || triangle[0] === triangle[2] || triangle[1] === triangle[2]){
        alert("Your measurements form an isosceles triangle");
      }else{
        alert("Your measurements form a scalene triangle");
      }
    }
  } else {
  alert("kindly enter values above zero");
  }
}
