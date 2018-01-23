var buttonnums, style, f, m, e, x, link, name;
var type = [0,2,1,2,1];
var title = ["Upcoming news", "Events", "Tryouts", "Dances", "Cheers"];
var linknum = ["news.html", "#", "#", "#", "#"];

//news is a 1d dropdown
var newsLink = "news.html";
//end news

//events is a 3d dropdown
var events_sub = ["2016","2017"];
var events_inner = [["Cheer Camp"],["Cheer Camp"]];
var events_inner_links = '#';
//end events

//tryouts is a 2d dropdown
var try_sub = ["Information", "Cheer", "Dance", "Jumps","Tumbling", "Video submissions"];
var try_sub_links = '#';
//end tryouts


//Dances is a 3d dropdown
var dance_sub = ["2016","2017"];
var dance_inner =  [["Work (S)", "HipHop (F)", "Christmas Mix"],["Put Your Hands Up (S)", "HO HO HO HOLD UP", "Bruh (F)", "Boss (S)"]];
var dance_inner_links = '#';
//end Dances


buttonnums = 5;
style;
f = "<div class=\"dropdown-toggle btn-group menu-btn\" role=\"group\"><a href = \"";
m = "\"><button type=\"button\" class=\"hvr-float btn btn-default about\"><p>";
e = "</p></button></a></div>";
x = "";

//begin dropdown
toggleOpen = "<div class=\"dropdown show\"><a class=\"btn menu-btn btn-secondary dropdown-toggle hvr-float\"href=\"#\" role=\"button\"id=\"dropdownMenuLink\" data-toggle=\"dropdown\"aria-haspopup=\"true\"aria-expanded=\"false\">";
toggleClose = "</a><div class=\"dropdown-menu\"aria-labelledby=\"dropdownMenuLink\">";
subOpen="<a class=\"dropdown-item\" href=\"";
subMid = "\">";
subClose = "</a>";
toggleEnd ="</div></div>";
//end dropdown

var submenu_res = ["", "Events_submenu", "Tryouts_submenu", "Dance_submenu", "Cheer_submenu"];
for(var i = 0; i< buttonnums; i++){
    if(i != 0){
        x = x.concat(toggleOpen,title[i],toggleClose);
        x=x.concat(localStorage.getItem(submenu_res[i]));
        x=x.concat(toggleEnd);
    }
    else{
        x = x.concat(f,"news.html",m,title[0],e);
        alert(x);
    }
}

/*for (var i = 0; i < buttonnums; i++){
    link = linknum[i]
    name = title[i];
    if(type[i]==1){
         x = x.concat(toggleOpen,name,toggleClose);
        for (var j =0 ; j < subNum; j++){
        subName = under[i][j];
        subLink = links;
        x = x.concat(subOpen,subLink,subMid,subName,subClose);
    }
    x = x.concat(toggleEnd);
    }
    
    x = x.concat(f,link,m,name,e);
}*/



style = "<style>.menu-btn{width:" + ((70/buttonnums)) + "vw;}</style>";
x += style;
document.write(x);
//WriteToFile(x);
//Set
localStorage.setItem("menuSetup", x);