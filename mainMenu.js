//*************************************** Objects *****************************************************
var news = {
    main_Name: "News",
    main_Link: "news.html",
    
    sub_DropNames: "null",
    sub_DropList: "null",
    sub_DropLinks: "null",
    
    sub_SingleNames: "null",
    sub_SingleLinks: "null"
};
localStorage.setItem('news_Object', JSON.stringify(news));
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var events = {
    main_Name: "Cheer Camp",
    main_Link: "#",
    
    sub_DropNames: ["2017", "2016"],
    sub_DropList: [["Ages 3-4", "Grades 3-5", "Grades 6-8", "Grades 9-12", "Grades K-2"], ["Ages 3-4", "Grades 3-5", "Grades 6-8", "Grades 9-12", "Grades K-2"]],
    sub_DropLinks: [["cc17_34.html", "cc17_35.html", "cc17_68.html", "cc17_912.html", "cc17_k2.html"],["cc16_34.html", "cc16_35.html", "cc16_68.html", "cc16_912.html", "cc16_k2.html"]],
    
    sub_SingleNames: "null",
    sub_SingleLinks: "null"
};
localStorage.setItem('events_Object', JSON.stringify(events));
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var tryouts = {
    main_Name: "Tryouts",
    main_Link: "#",
    
    sub_DropNames: "null",
    sub_DropList: "null",
    sub_DropLinks: "null",
    
    sub_SingleNames: ["Information", "Cheer", "Dance", "Jumps", "Tumbling", "Video submissions"],
    sub_SingleLinks: ["Tryout_Info.html", "tryout_cheer.html", "tryout_dance.html", "tryout_jumps.html", "tryout_tumbling.html", "tryout_sub.html"]
};
localStorage.setItem('tryouts_Object', JSON.stringify(tryouts));
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var dance = {
    main_Name: "Dances",
    main_Link: "#",
    
    sub_DropNames: ["2017", "2016"],
    sub_DropList: [["Put Your Hands Up (S)", "HO HO HO HOLD UP", "Bruh (F)", "Boss (S)","Gimme That Bass"], ["Work (S)", "HipHop (F)", "Christmas Mix"]],
    sub_DropLinks: [["dance17_0.html", "dance17_1.html", "dance17_2.html", "dance17_3.html", "dance17_4.html"], ["dance16_0.html", "dance16_1.html", "dance16_2.html"]],
    
    sub_SingleNames: "null",
    sub_SingleLinks: "null"
};
localStorage.setItem('dance_Object', JSON.stringify(dance));
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var cheers = {
    main_Name: "Cheers",
    main_Link: "#",
    
    sub_DropNames: "null",
    sub_DropList: "null",
    sub_DropLinks: "null",
    
    sub_SingleNames: ["Don't worry we're here", "hey crowd", "S.P.I.R.I.T.", "We are here to have some fun"],
    sub_SingleLinks: ["cheer_0.html", "cheer_1.html", "cheer_2.html", "cheer_3.html"]
};
localStorage.setItem('cheers_Object', JSON.stringify(cheers));
//*************************************** Objects End **********************************************
var x = "";// start of base write to doc

//no dropdown
function one_Dim(Name, Linked) {
    var Addition = "";
    var f = "<div class=\"dropdown-toggle btn-group menu-btn\" role=\"group\"><a href = \"";
    var m = "\"><button type=\"button\" class=\"btn-group menu-btn hvr-float btn btn-default about\"><p>";
    var e = "</p></button></a></div>";
    Addition = Addition.concat(f, Linked, m, Name, e);
    return (Addition);
}

//dropdown
function two_Dim(Name, subNames, subLinks) {
    var Addition, dropdownOpen, dropdownClose, dropdownItemsOpen, singleOpen, singleMid, singleEnd, dropdownItemsClose, dropdownFinal, sub_Buttons;
    Addition = "";
    dropdownOpen = "<div class=\"dropdown btn-group menu-btn\"><button class=\"hvr-float btn-group menu-btn btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">";
    //name of dropdown
    dropdownClose = "</button>";

    dropdownItemsOpen = "<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">"; //opening of sub items, not opening for individual items

    singleOpen = "<a class=\"dropdown-item\" href=\"";
    //link to individual dropdown item
    singleMid = "\">";
    //Name or title of individual dropdown item
    singleEnd = "</a>";

    dropdownItemsClose = "</div>";//only use if there are dropdown items

    dropdownFinal = "</div>"; //use every time
    Addition = Addition.concat(dropdownOpen, Name, dropdownClose, dropdownItemsOpen);
    for (sub_Buttons = 0; sub_Buttons < subNames.length; sub_Buttons += 1) {
        Addition = Addition.concat(singleOpen, subLinks[sub_Buttons], singleMid, subNames[sub_Buttons], singleEnd);
    }
    Addition = Addition.concat(dropdownItemsClose, dropdownFinal);
    return (Addition);
}

//dropdown w/ dropdown
function three_Dim(Name, dropnames, subNames, subLinks) {
    var Addition, Outer_Start, Outer_Mid, first_Layer_Start, first_Layer_Mid, second_Layer_Start,  second_Layer_End, first_Layer_MidEnd, first_Layer_final, Outer_End, k, l;
    Addition = "";
    /*for (var k = 0; k < dropnames.length; k++){
        Addition = Addition.concat(dropdownOpen, dropnames[k],dropdownClose,dropdownItemsOpen);
        for(var l = 0; l < subNames[k].length; l++){
            Addition = Addition.concat(singleOpen, subLinks, singleMid, subNames[k][l],singleEnd);
        }
        Addition = Addition.concat(dropdownItemsClose,dropdownFinal);
    }
    
    Addition = Addition.concat(dropdownItemsClose,dropdownFinal);
    return(Addition);*/
    Outer_Start = "<div class=\"container\"><div class=\"dropdown\"><button class=\"hvr-float menu-btn btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">";
    //Name of title
    Outer_Mid = "<span class=\"caret\"></span></button>";
    
    //1st layer begins
    
    first_Layer_Start = "<ul class=\"dropdown-menu\">";
    first_Layer_Mid = "<li class=\"dropdown-submenu\">";
    //links to 2nd layer dropdown go here
    
    second_Layer_Start = "<ul class=\"dropdown-menu sub-layer\">";
    //direct links to content here
    second_Layer_End = "</ul>";
    
    first_Layer_MidEnd = "</li>";
    first_Layer_final = "</ul>";
    
    Outer_End = "</div></div>";
    
    Addition = Addition.concat(Outer_Start, Name, Outer_Mid, first_Layer_Start);
    //have Name > dropnames > subNames > subLinks
    for (k = 0; k < dropnames.length; k += 1) {
        Addition = Addition.concat(first_Layer_Mid, "<a class=\"inner-links test\" tabindex=\"-1\" href=\"#\">", dropnames[k],"<span class=\"caret\"></span></a>", second_Layer_Start);
        
        for (l = 0; l < subNames[k].length; l += 1) {
            Addition = Addition.concat("<li><a  class=\"inner-links\" tabindex=\"-1\"href=\"", subLinks[k][l], "\">", subNames[k][l], "</a></li>");
        }
        Addition = Addition.concat(second_Layer_End, first_Layer_MidEnd);
    }
    Addition = Addition.concat(first_Layer_final, Outer_End);
    return (Addition);
}

function assigner(category) {
    //if has dropdown
    /*var exp = category.main_Name;
    exp += " 3d ";
    exp += Object.is(Object.is(category.main_Link, "#"),Object.is(category.sub_SingleNames, "null"));
    alert(exp);*/
    if (Object.is(category.main_Link, "#")) {
        //if has dropdowns in dropdown
        if (Object.is(category.sub_SingleNames, "null")) {
            return (three_Dim(category.main_Name, category.sub_DropNames, category.sub_DropList, category.sub_DropLinks));
        } else {//if single links in dropdown
            return (two_Dim(category.main_Name, category.sub_SingleNames, category.sub_SingleLinks));
        }
    } else {//if direct link
        return (one_Dim(category.main_Name, category.main_Link));
    }
}


x = x.concat(assigner(news));
//alert("News " + assigner(news));

x = x.concat(assigner(events));
//alert("Events " + assigner(events));

x = x.concat(assigner(tryouts));
//alert("Tryouts " + assigner(tryouts));

x = x.concat(assigner(dance));
//alert("Dance " + assigner(dance));

x = x.concat(assigner(cheers));
//alert("Cheers " + assigner(cheers));

var buttonnums = 5; //this is how many buttons are in the menu (how many have been assigned above)

var style = "<style>#menu .menu-btn{width:" + ((70 / buttonnums)) + "vw;}</style>";
x += style;

document.write(x);

$(document).ready(function() {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});



