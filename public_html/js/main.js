var cur;
var curImg;
var table;
var divIdent;
var clickCount = 0;
tetrisPics = new Array();
crawlPics = new Array();
wordPics = new Array();

var rArrow = new Image();
rArrow.src = 'css/img/slider-right.png';
rArrow.alt = 'right arrow';

var lArrow = new Image();
lArrow.src = 'css/img/slider-left.png';
lArrow.alt = 'left arrow';

var tet0 = new Image(); // HTML5 Constructor
tet0.src = 'css/img/tetris0.JPG';
tet0.alt = 'tet0';

var tet1 = new Image(); // HTML5 Constructor
tet1.src = 'css/img/tetris1.JPG';
tet1.alt = 'tet1';

var tet2 = new Image(); // HTML5 Constructor
tet2.src = 'css/img/tetris2.JPG';
tet2.alt = 'tet2';

var tet3 = new Image(); // HTML5 Constructor
tet3.src = 'css/img/tetris3.JPG';
tet3.alt = 'tet3';

var tet4 = new Image(); // HTML5 Constructor
tet4.src = 'css/img/tetris4.JPG';
tet4.alt = 'tet4';

var cra1 = new Image();
cra1.src = 'css/img/crawl0.JPG';
cra1.alt = 'cra1';

var cra2 = new Image();
cra2.src = 'css/img/crawl1.JPG';
cra2.alt = 'cra2';

var cra3 = new Image();
cra3.src = 'css/img/crawl2.JPG';
cra3.alt = 'cra3';

var cra4 = new Image();
cra4.src = 'css/img/crawl3.JPG';
cra4.alt = 'cra4';

var cra5 = new Image();
cra5.src = 'css/img/crawl4.JPG';
cra5.alt = 'cra5';

var word0 = new Image();
word0.src = 'css/img/wordPic1.PNG';
word0.alt = 'word0';

var word1 = new Image();
word1.src = 'css/img/wordPic2.PNG';
word1.alt = 'word1';

var word2 = new Image();
word2.src = 'css/img/wordPic3.PNG';
word2.alt = 'word2';

var word3 = new Image();
word3.src = 'css/img/wordPic4.PNG';
word3.alt = 'word3';

var word4 = new Image();
word4.src = 'css/img/wordPic5.PNG';
word4.alt = 'word4';

tetrisPics.push(tet0, tet1, tet2, tet3, tet4);
crawlPics.push(cra1, cra2, cra3, cra4, cra5);
wordPics.push(word0, word1, word2, word3, word4);
arrPicArrs = {tetris: tetrisPics, crawl: crawlPics, word: wordPics};



function OpenSliderPopup(projectName, idx) {
    
    var slider = document.createElement('div');
    var sliderID = "sliderDiv";
    slider.setAttribute('id', sliderID);
    document.body.appendChild(slider);
    var popupSetting = {title: 'Project Picture Slider',isFixed:true };
    ShowPopup(sliderID, popupSetting, projectName, idx);
}

// Function to Show Div Popup
function ShowPopup(divId, popupSetting, projectName, idx) {
    divIdent = divId;
    index = idx;
    cur = arrPicArrs[projectName][index];
    var curWidth = cur.width;
    var curHeight = cur.height;
    var screenHeight = window.screen.height;
    var screenWidth = window.screen.width;

    var popUpTop = screenHeight/2 - curHeight/8;
    var popUpLeft = screenWidth/2;

    var sliderDiv = document.getElementById(divId);
    sliderDiv.style.display = 'block';
    sliderDiv.style.position = 'relative';
    var element = sliderDiv.parentElement;
    popupSetting = popupSetting || {};

    if (!popupSetting.width) { popupSetting.width = curWidth; };
    if (!popupSetting.height) { popupSetting.height = curHeight; };
    if (!popupSetting.title) { popupSetting.title = 'Project Picture Slider'; };

    table = document.createElement('div');
    table.setAttribute('id', 'table' + divId);

    curImg = document.createElement("img");
    curImg.src = cur.src;
    var curStyle = curImg.style;
    curStyle.position = 'relative';
    curStyle.top = 0;
    curStyle.left = 0;    

    var rightButton = document.createElement("input");
    rightButton.type = "image";
    rightButton.src = rArrow.src;
    var rbStyle = rightButton.style;
    rbStyle.position = 'absolute';
    rbStyle.top = (curHeight/2 - (lArrow.height/2)) +'px';
    rbStyle.right = 0;
    rbStyle.zIndex = 20;
    rbStyle.opacity = .6;
    rightButton.onclick = nextPic;

    var leftButton = document.createElement("input");
    leftButton.type = "image";
    leftButton.src = lArrow.src;
    var lbStyle = leftButton.style;
    lbStyle.position = 'absolute';
    lbStyle.top = (curHeight/2 - (lArrow.height/2)) +'px';
    lbStyle.left = 0;
    lbStyle.zIndex = 20;
    lbStyle.opacity = .6;
    leftButton.onclick = prevPic;

    var closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.value = "close";
    var cbStyle = closeButton.style;
    cbStyle.color = "red";
    closeButton.onclick = ClosePopupDiv;

    function nextPic() {
    index++;
    if (index > 4) {
        index = 0;
    }
    cur = arrPicArrs[projectName][index];
    curImg.src = cur.src;
    };

    function prevPic() {
    index--;
    if (index < 0) {
        index = 4;
    }
    cur = arrPicArrs[projectName][index];
    curImg.src = cur.src;
    };


    tempElt = document.createElement('div');
    tempElt.setAttribute('id', 'tempElt' + sliderDiv.id);
    sliderDiv.parentElement.insertBefore(tempElt, sliderDiv);

 
    sliderDiv.appendChild(curImg);
    sliderDiv.appendChild(leftButton);
    sliderDiv.appendChild(rightButton);
    table.appendChild(sliderDiv);


    var cssText = 'display: block; z-index:12; background-color:white; top:'+popUpTop+'px; left:'+popUpLeft+'px;';
    cssText += 'width: ' + popupSetting.width + 'px; height: ' + popupSetting.height + 'px; margin-left: -' + Math.round(popupSetting.width / 2) + 
            'px; margin-top: -' + Math.round(popupSetting.height / 2) + 'px;';
    
    if (popupSetting.isFixed === true) { 
        cssText += 'position: fixed;';
    }
    else { 
        cssText += 'position: absolute;'; 
    }

    table.setAttribute('style', cssText);
    element.appendChild(table);

    var shadeElt = document.createElement('div');
    shadeElt.id = "ShadedBG";
    shadeElt.className = "ShadedBG";
    tempElt.appendChild(shadeElt);
}

/*
 * Closes the popup picture slider and removes it's elements
 * from the DOM tree.
 * 
 * @returns {undefined}
 */
function ClosePopupDiv() {
    table.parentNode.removeChild(table);
    tempElt.parentNode.removeChild(tempElt);
    clickCount = 0;
};

/*
 * Detects mouse clicks and calls ClosePopupDiv() when the popup picture slider
 * is active and a click occurs outside the slider.
 */
document.onclick = function(event){
    clickCount++;
    var hasParent = false;

    for(var node = event.target; node !== document.body; node = node.parentNode) {
      if(node.id === ('tempElt' + divIdent)){
        hasParent = true;
        break;
      }
    }

    if(!hasParent) {
        return;
    } else {
        if (clickCount > 1) ClosePopupDiv();
    }
}; 
    
