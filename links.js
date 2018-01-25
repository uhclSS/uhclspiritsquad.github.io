var ans = prompt("Would you like to edit the body?", "Enter Yes or No");
var nums, ed;
function img(nums){
    var n="";
    var s = "<img class = \"img-body\" src=\"";
    var src;
    var e = "\">";
    for(var i =0; i< nums; i++){
        src = prompt("What is the image?", "Enter image here");
        n = n.concat(s,src,e);
    }
    return(n);
}
function vid(nums){
    /*https://lh6.googleusercontent.com/ZAkaT1_4WaghtN2oFPs_FdQE1Ak8468XONkI5hNCjc5PcbmOAXdJLcYBpxp3CxQkI0IicMk15KoADyqr9axwYQ=w1676-h1676-rw
    <iframe width="420" height="381"src="https://docs.google.com/file/d/0B1MVPyHggpkANEZrWkNHcHhMb00/preview" align = "middle">
            </iframe>*/
    var link;
    var n = "";
    var s ="<iframe width=\"420\" height=\"381\"src=\"";
    var e ="\" align = \"middle\"></iframe>";
    for (var i = 0; i<nums;i++){
        link = prompt("What is the link to the video?", "Enter link here");
        n = n.concat(s,link,e);
    }
    return(n);
}
function txt(nums){
    var n ="";
    var s = "<h1 class = \"body-txt\">";
    var e = "</h1>"
    for (var i = 0; i < nums; i++){
        fill = prompt("What text would you like to add?", "Enter text here");
        n = n.concat(s,fill,e);
    }
    return(n);
    
}
if (ans === "Yes"){var s = "";}
while(ans === "Yes"){
    
    ed = prompt("What would you like to add?", "Enter 1 for image, 2 for video, 3 for text");
    ed = parseInt(ed);
    nums = prompt("How many are you adding? ", "enter your number here");
    nums = parseInt(nums);
    
    switch(ed){
        case 1://image
            s = s.concat(img(nums));
            ans = prompt("Would you like to edit?", "Enter Yes or No");
            break;
        case 2://video
            s = s.concat(vid(nums));
            ans = prompt("Would you like to edit?", "Enter Yes or No");
            break;
        case 3://text
            s = s.concat(txt(nums));
            ans = prompt("Would you like to edit?", "Enter Yes or No");
            break;
    }
localStorage.setItem("linkSetup", s);
}
s=localStorage.getItem("linkSetup");
alert(s);
document.write(s);
