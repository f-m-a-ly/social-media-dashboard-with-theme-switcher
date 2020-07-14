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

    var background = document.getElementsByTagName("body");
    var mainTitle = document.getElementsByClassName("main-title");
    var mainSubtitle = document.getElementsByClassName("main-subtitle");
    var mainDarkSubtitle = document.getElementsByClassName("main-dark-subtitle");
    var overviewTitle = document.getElementsByClassName("overview-title");
    var footer = document.getElementsByClassName("attribution");
    if (checkToggle.checked) {
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)"
        mainTitle[0].style.color = "white";
        mainSubtitle[0].style.color = "hsl(230, 49%, 74%)";
        mainDarkSubtitle[0].style.color = "hsl(230, 49%, 74%)";
        overviewTitle[0].style.color = "white";
        footer[0].style.color = "white"
        $(document).ready(function () {
            $(".card").hover(function () {
                $(this).css("background-color", "hsl(228, 26%, 27%)");
            }, function () {
                $(this).css("background-color", "hsl(228, 29%, 20%)");
            });
        });

    }
    else {
        document.body.style.backgroundColor = ""
        mainTitle[0].style.color = "";
        mainSubtitle[0].style.color = "";
        mainDarkSubtitle[0].style.color = "";
        overviewTitle[0].style.color = "";
        footer[0].style.color = ""
        $(document).ready(function () {
            $(".card").hover(function () {
                $(this).css("background-color", "");
            }, function () {
                $(this).css("background-color", "");
            });
        });
    }

    if (checkToggle.checked) {
    }
    else {
    }
}