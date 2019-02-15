function triangleChecker(){
  var height = document.getElementById("length1").value;
  var newHeight = parseInt(height);
  var length = document.getElementById("length2").value;
  var newLength = parseInt(length);
  var width = document.getElementById("length3").value;
  var newWidth = parseInt(width);
  var triangle = [];
  triangle = [newHeight,newLength,newWidth];
  alert(triangle);
}
