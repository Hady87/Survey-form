document.getElementById("comment").defaultValue="Enter your comment here..";
function OtherOption(){
    var e = document.getElementById("selectBox");
var optionValue = e.options[e.selectedIndex].text;

  if(optionValue=="Other"){
    document.getElementById("other").style.display='block'
  }
    
  }
  document.getElementById("survey-form").submit();

  function emptyArea(){
    document.getElementById("comment").value="";
  }
  