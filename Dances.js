var buttonnums, style, toggleOpen, toggleName, toggleClose,subOpen,subName,subLink,subMid,subClose,toggleEnd, x;

var names=["2016", "2017"];
var under = [["Work (S)", "HipHop (F)", "Christmas Mix"],["Put Your Hands Up (S)", "HO HO HO HOLD UP", "Bruh (F)", "Boss (S)"]];
var links ="#";

//toggleOpen,*toggleName*,toggleClose
//(toggleClose includes sublinks opening)

//subOpen, *subLink*,subMid, *subName*, subClose

//toggleEnd

buttonnums = names.length;
style;
x = "";

toggleOpen = "<div class=\"dropdown show\"><a class=\"btn btn-secondary dropdown-toggle hvr-float\"href=\"#\" role=\"button\"id=\"dropdownMenuLink\" data-toggle=\"dropdown\"aria-haspopup=\"true\"aria-expanded=\"false\">";
toggleClose = "</a><div class=\"dropdown-menu\"aria-labelledby=\"dropdownMenuLink\">";
subOpen="<a class=\"dropdown-item\" href=\"";
subMid = "\">";
subClose = "</a>";
toggleEnd ="</div></div>";


for (var i = 0; i < buttonnums; i++){
    toggleName = names[i];
    x = x.concat(toggleOpen,toggleName,toggleClose);
    
    var subNum = under[i].length;
    
    for (var j =0 ; j < subNum; j++){
        subName = under[i][j];
        subLink = links;
        x = x.concat(subOpen,subLink,subMid,subName,subClose);
    }
    x = x.concat(toggleEnd);
}

style = "<style>#submenu{height:  " + (buttonnums*8) + "vh;}</style>";
x += style;
document.write(x);
localStorage.setItem("Dance_submenu", x);