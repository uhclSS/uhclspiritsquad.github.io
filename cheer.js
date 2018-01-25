var buttonnums, style, f, m, e, x, link, name, i;

var recieved = JSON.parse(localStorage.getItem('cheers_Object'));

var names = recieved.sub_SingleNames;
var links = recieved.sub_SingleLinks;
buttonnums = names.length;
style;
f = "<div class=\" sub-btn btn-group\" role=\"group\"><a href = \"";
m = "\"><button type=\"button\" class=\"hvr-float btn btn-default about\"><p>";
e = "</p></button></a></div>";
x = "";
for (i = 0; i < buttonnums; i++){
    link = links;
    name = names[i];
    x = x.concat(f,link[i],m,name,e);
}

style = "<style>#submenu{height:  " + (buttonnums*8) + "vh;}</style>";
x += style;
document.write(x);
localStorage.setItem("Cheer_submenu", x);