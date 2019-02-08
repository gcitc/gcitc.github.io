//백업용 사용안하는거에요
function Keep( number , kind , parts , price){
      document.getElementById('share').value += number + ","; 
      document.getElementById('rightIFrame').contentWindow.Keep(number , kind , parts , price);
    }
    function Delete( number ){
      parts = document.getElementById('share').value.split(",");
      newPartsArray = "";
      deleteCheck = false;
      for(i=0; i<parts.length; i++){
        if(parts[i] == number && deleteCheck == false){
          deleteCheck = true;
        }else if(parts[i] != ""){
          newPartsArray += parts[i] + ",";
        }
      }
      document.getElementById('share').value = newPartsArray;
    }
    function ReloadParts( kind ){
      document.getElementById('leftIFrame').contentWindow.ReloadParts(kind);
    }
    function share(){
      url = "https://gcit.kr/computer/index.php?parts=" + document.getElementById('share').value;
      prompt("다음 내용을 복사하세요.",url);
    }