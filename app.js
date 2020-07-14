function DarkMode() {
    var checkToggle = document.getElementById("toggle-switch");
    var i;
    var j;

    var mainCards = document.getElementsByClassName("main-card");
    var socialName = document.getElementsByClassName("social-media-name");
    var followersNumber = document.getElementsByClassName("followers-number");
    var followersText = document.getElementsByClassName("followers-text");
    for (i = 0; i < mainCards.length; i++) {
      if (checkToggle.checked) {
        mainCards[i].style.background = "hsl(228, 29%, 20%)";
        followersNumber[i].style.color = "white";
        socialName[i].style.color = "hsl(230, 49%, 74%)"
        followersText[i].style.color = "hsl(230, 49%, 74%)"
      }
      else {
        mainCards[i].style.background = "";
        followersNumber[i].style.color = "";
        socialName[i].style.color = "";
        followersText[i].style.color = ""
      }
    }

    var overviewCards = document.getElementsByClassName("overview-card");
    var overviewName = document.getElementsByClassName("overview-name");
    var overviewNumber = document.getElementsByClassName("overview-number");
    for (k = 0; k < overviewCards.length; k++) {
      if (checkToggle.checked) {
        overviewCards[k].style.background = "hsl(228, 29%, 20%)";
        overviewName[k].style.color = "hsl(230, 49%, 74%)";
        overviewNumber[k].style.color = "white"        
      }
      else {
        overviewCards[k].style.background = "";
        overviewName[k].style.color = "" 
        overviewNumber[k].style.color = ""        
      }
    }

    if (checkToggle.checked) { 
      $(document).ready(function(){
        $(".card").hover(function(){
          $(this).css("background-color", "hsl(228, 26%, 27%)");
          }, function(){
          $(this).css("background-color", "hsl(228, 29%, 20%)");
        });
      });
    }

    else {
      $(document).ready(function(){
        $(".card").hover(function(){
          $(this).css("background-color", "");
          }, function(){
          $(this).css("background-color", "");
        });
      });
    }
  }