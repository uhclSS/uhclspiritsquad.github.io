/*<div class="btn-group" role="group"><a href = "LINK"><button type="button" class="btn btn-default about"><p>NAME</p></button></a></div>*/
var ans = prompt("Do you want to edit the submenu?", "Yes or no");

/*function WriteToFile(addition) { 
     var txtFile = new File("");
	txtFile.open("w");
	txtFile.writeln(addition);
	txtFile.close();
}*/

if (ans === "Yes") {
    var buttonnums, style, f, m, e, x, link, name;
    buttonnums = prompt("How many links do you need?", "Enter number here");
    style;
    f = "<div class=\" sub-btn btn-group\" role=\"group\"><a href = \"";
    m = "\"><button type=\"button\" class=\"hvr-float btn btn-default about\"><p>";
    e = "</p></button></a></div>";
    x = "";
    for (var i = 0; i < buttonnums; i++){
        link = prompt("What is the link to the video?", "Enter link");
        name = prompt("What is the title of the link?", "enter the title here");
        x = x.concat(f,link,m,name,e);
    }

    style = "<style>#submenu{height:  " + (buttonnums*8) + "vh;}</style>";
    alert(style);
    x += style;
    document.write(x);
    //WriteToFile(x);
    //Set
    localStorage.setItem("submenuSetup", x);
}
else{
    //Get
    document.write(localStorage.getItem("submenuSetup"));
}