var cur;
var curImg;
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


function imgPopUp(source) {
    var screenHeight = window.screen.height;
    var windowParams = "";
    if (screenHeight <= 202) {
        windowParams = 'width=180,height=180,toolbar=0,menubar=0,location=0,\n\
status=1,scrollbars=1,resizable=1,left=0,top=0';
    } else if (screenHeight > 202 && screenHeight <= 352) {
        windowParams = 'width=330,height=330,toolbar=0,menubar=0,location=0,\n\
status=1,scrollbars=1,resizable=1,left=0,top=0';
    } else if (screenHeight > 352 && screenHeight <= 548) {
        windowParams = 'width=526,height=526,toolbar=0,menubar=0,location=0,\n\
status=1,scrollbars=1,resizable=1,left=0,top=0';
    } else {
        windowParams = 'width=740,height=740,toolbar=0,menubar=0,location=0,\n\
status=1,scrollbars=1,resizable=1,left=0,top=0';
    }   
    void window.open(source,'_blank', windowParams);
    return false;
}

//function imgSlider(projectName, idx) {
//    index = idx;
//    cur = arrPicArrs[projectName][index];
//    var curWidth = cur.width;
//    var curHeight = cur.height;
//    var sliderWindow = open("", "Slider", "width="+curWidth+",height="+curHeight+"location=no,menubar=no");
//    sliderWindow.document.title = "Project Picture Slider";
//    curImg = sliderWindow.document.createElement("img");
//    curImg.src = cur.src;
//    var curStyle = curImg.style;
//    curStyle.position = 'absolute';
//    curStyle.top = 0;
//    curStyle.left = 0;    
//    sliderWindow.document.body.appendChild(curImg);
//
//    var rightButton = sliderWindow.document.createElement("input");
//    rightButton.type = "image";
//    rightButton.src = rArrow.src;
//    var rbStyle = rightButton.style;
//    rbStyle.position = 'absolute';
//    rbStyle.top = curHeight/2 - (rArrow.height/2);
//    rbStyle.left = curWidth-(rArrow.width);
//    rightButton.onclick = nextPic;
//    sliderWindow.document.body.appendChild(rightButton);
//    
//    var leftButton = sliderWindow.document.createElement("input");
//    leftButton.type = "image";
//    leftButton.src = lArrow.src;
//    var lbStyle = leftButton.style;
//    lbStyle.position = 'absolute';
//    lbStyle.top = curHeight/2 - (lArrow.height/2);
//    lbStyle.left = 0;
//    leftButton.onclick = prevPic;
//    sliderWindow.document.body.appendChild(leftButton);
//    
//    function nextPic() {
//        index++;
//        if (index > 4) {
//            index = 0;
//        }
//        cur = arrPicArrs[projectName][index];
//        curImg.src = cur.src;
//    };
//    
//    function prevPic() {
//        index--;
//        if (index < 0) {
//            index = 4;
//        }
//        cur = arrPicArrs[projectName][index];
//        curImg.src = cur.src;
//    };
//}

//function imgSlider(projectName, idx) {
//    index = idx;
//    cur = arrPicArrs[projectName][index];
//    var curWidth = cur.width;
//    var curHeight = cur.height;
//    var screenHeight = window.screen.height;
//    var screenWidth = window.screen.width;
//    
//    curImg = document.createElement("img");
//    curImg.src = cur.src;
//    var curStyle = curImg.style;
//    curStyle.position = 'absolute';
//    curStyle.top = 0;
//    curStyle.left = 0;    
//    sliderDiv.appendChild(curImg);
//
//    var rightButton = document.createElement("input");
//    rightButton.type = "image";
//    rightButton.src = rArrow.src;
//    var rbStyle = rightButton.style;
//    rbStyle.position = 'absolute';
//    rbStyle.top = curHeight/2 - (rArrow.height/2);
//    rbStyle.left = curWidth-(rArrow.width);
//    rightButton.onclick = nextPic;
//    sliderDiv.appendChild(rightButton);
//    
//    var leftButton = document.createElement("input");
//    leftButton.type = "image";
//    leftButton.src = lArrow.src;
//    var lbStyle = leftButton.style;
//    lbStyle.position = 'absolute';
//    lbStyle.top = curHeight/2 - (lArrow.height/2);
//    lbStyle.left = 0;
//    leftButton.onclick = prevPic;
//    sliderDiv.appendChild(leftButton);
//    
//    function nextPic() {
//        index++;
//        if (index > 4) {
//            index = 0;
//        }
//        cur = arrPicArrs[projectName][index];
//        curImg.src = cur.src;
//    };
//    
//    function prevPic() {
//        index--;
//        if (index < 0) {
//            index = 4;
//        }
//        cur = arrPicArrs[projectName][index];
//        curImg.src = cur.src;
//    };
//}



function OpenSliderPopup(projectName, idx) {
    var divToOpen = "sliderDiv";
//            var popupSetting = { width: '250', height: '130', title: 'Project Picture Slider',isFixed:true };
    var popupSetting = {title: 'Project Picture Slider',isFixed:true };

    ShowPopup(divToOpen, popupSetting, projectName, idx);
}

// Function to Show Div Popup
function ShowPopup(divId, popupSetting, projectName, idx) {

    index = idx;
    cur = arrPicArrs[projectName][index];
    var curWidth = cur.width;
    var curHeight = cur.height;
    var screenHeight = window.screen.height;
    var screenWidth = window.screen.width;

    var popUpTop = screenHeight/2 - curHeight/8;
    var popUpLeft = screenWidth/2;

    var sliderDiv = document.getElementById(divId);
    //sliderDiv.setAttribute('style', 'display: block; position: fixed; top: 0; left: 0; border:3px solid yellow; z-index: 18;');
    sliderDiv.style.display = 'block';
    sliderDiv.style.position = 'relative';
    var element = sliderDiv.parentElement;
    popupSetting = popupSetting || {};

    if (!popupSetting.width) { popupSetting.width = curWidth; };
    if (!popupSetting.height) { popupSetting.height = curHeight; };
    if (!popupSetting.title) { popupSetting.title = 'Project Picture Slider'; };

    var table = document.createElement('div');
//    var table = document.createElement('table');
//    table.setAttribute('id', 'table' + divId);
//    table.setAttribute('cellspacing', '2');
//    table.setAttribute('cellpadding', '2');
//
//    var tr1 = document.createElement('tr'); tr1.className = 'PopupHeader';
//    var td1 = document.createElement('td'); td1.setAttribute('style', 'width: 90%; padding: 5px;');
//    var span = document.createElement('span'); span.innerHTML = popupSetting.title;
//    span.setAttribute('style', 'font-size: 14px; font-weight: bold; border:1px solid black');
//    td1.appendChild(span); tr1.appendChild(td1); table.appendChild(tr1);
//
//    var tr2 = document.createElement('tr');
//    var tdDynamic = document.createElement('td');
//    tdDynamic.setAttribute('align', 'center');
//    tdDynamic.setAttribute('style', 'padding-top: 10px; vertical-align:top; position: relative; border:1px solid black');
//
//    var tr3 = document.createElement('tr');
//    var tdCloseButton = document.createElement('td');
//    tdCloseButton.setAttribute('align', 'center');
//    tdCloseButton.setAttribute('style', 'padding-top: 10px; vertical-align:top; border:1px solid black');

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
//    cbStyle.position = 'absolute';
//    cbStyle.top = curHeight;
//    cbStyle.left = 200;
    cbStyle.color = "red";
    closeButton.onclick = ClosePopupDiv;
    //sliderDiv.appendChild(closeButton);

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


    var tempElt = document.createElement('div');
    tempElt.setAttribute('id', 'tempElt' + sliderDiv.id);
    sliderDiv.parentElement.insertBefore(tempElt, sliderDiv);

 
    sliderDiv.appendChild(curImg);
    sliderDiv.appendChild(leftButton);
    sliderDiv.appendChild(rightButton);
    table.appendChild(sliderDiv);
    
    
    
//    tdDynamic.appendChild(leftButton);
//    tdDynamic.appendChild(rightButton);
//    tdDynamic.appendChild(sliderDiv);
//
//    tr2.appendChild(tdDynamic);
//    table.appendChild(tr2);
//    
//    tdCloseButton.appendChild(closeButton);
//    tr3.appendChild(tdCloseButton);
//    table.appendChild(tr3);
    


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
    shadeElt.id = "ShadedBG";shadeElt.className = "ShadedBG";
    tempElt.appendChild(shadeElt);


    // Function to Close Div Popup
    function ClosePopupDiv() {
        var table = document.getElementById('table' + divId);
        var element = table.parentElement;
        var sliderDiv = document.getElementById(divId);
        sliderDiv.style.display = 'none';
        var tempElt = document.getElementById('tempElt' + divId);
        tempElt.parentElement.insertBefore(sliderDiv, tempElt);
        table.parentElement.removeChild(table);
        table.setAttribute('style', 'display: none');
        tempElt.parentElement.removeChild(tempElt);
    }
}

 

    
