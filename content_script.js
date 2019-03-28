chrome.storage.sync.get("color", function (obj) {  
    var color = String(obj.color); 
    //change color of the body
    document.body.style.backgroundColor=color;

    //change color of all div elements
    var divs = document.getElementsByTagName("DIV");
    for(var i = 0; i < divs.length; i++) {
      divs[i].style.background = color;
      divs[i].style.fontStyle="bold"
    }
    //change color of children of body element
    var nodes = document.body.children;
    for(var i=0; i<nodes.length; i++) {
        nodes[i].style.background = color;
        nodes[i].style.fontStyle="bold";
    }
});

chrome.storage.sync.get("fontStyle",function (obj) {
    var style =String(obj.fontStyle);
    document.body.style.fontStyle=style;

    var divs = document.getElementsByTagName("DIV");
    for(var i = 0; i < divs.length; i++) {
        divs[i].style.fontStyle = style;
    }
    //change color of children of body element
    var nodes = document.body.children;
    for(var i=0; i<nodes.length; i++) {
        nodes[i].style.fontStyle=style;
    }

});