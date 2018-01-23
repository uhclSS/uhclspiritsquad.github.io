var buttonnums, style, f, m, e, x, link, name;

var names=["Don't worry we're here", "hey crowd", "S.P.I.R.I.T.", "We are here to have some fun"];
var links ="#";
buttonnums = names.length;
style;
f = "<div class=\" sub-btn btn-group\" role=\"group\"><a href = \"";
m = "\"><button type=\"button\" class=\"hvr-float btn btn-default about\"><p>";
e = "</p></button></a></div>";
x = "";
for (var i = 0; i < buttonnums; i++){
    link = links;
    name = names[i];
    x = x.concat(f,link,m,name,e);
}

style = "<style>#submenu{height:  " + (buttonnums*8) + "vh;}</style>";
x += style;
document.write(x);
localStorage.setItem("Cheer_submenu", x);