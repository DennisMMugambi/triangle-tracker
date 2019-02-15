function triangleChecker(){
  var height = document.getElementById("length1").value;
  var newHeight = parseInt(height);
  var length = document.getElementById("length2").value;
  var newLength = parseInt(length);
  var width = document.getElementById("length3").value;
  var newWidth = parseInt(width);
  var triangle = [];
  triangle = [newHeight,newLength,newWidth];

  if ((triangle[0] + triangle[1]) <= triangle[3] || (triangle[0] + triangle[2] <= triangle[1])){
    alert("a triangle cannot be formed");
  } else if ((triangle[1] + triangle[2]) <= triangle[0]){
    alert("a triangle cannot be formed");
  } else {
    alert("a triangle can be formed");
  }
}
