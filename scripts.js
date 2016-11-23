var count = 0;

function resetInput(id){
  var property = document.getElementById(id);
  count=3;
  property.style.backgroundColor="#FFFFFF";
  property.style.color="#000000";
  property.value="";
}



function setColor(id) {
    var property = document.getElementById(id);
    if (count == 0) {
        property.style.backgroundColor = "#0000FF";
        property.style.color = "#FFFFFF";
        count = 1;
    }
    else if (count == 1){
        property.style.backgroundColor = "#00FF00";
        property.style.color = "#FFFFFF";
        count = 2;
    }else if (count == 2){
        property.style.backgroundColor = "#FF0000";
        property.style.color = "#FFFFFF";
        count = 3;
    }else {
        property.style.backgroundColor = "#FFFFFF";
        property.style.color = "#000000";
        count = 0;
    }
}
