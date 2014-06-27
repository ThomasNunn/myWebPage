
function imgPopUp(source) {
    var screenHeight = window.screen.height;
    var windowParams = "";
    if (screenHeight <= 202) {
        windowParams = 'width=180,height=180,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0';
    } else if (screenHeight > 202 && screenHeight <= 352) {
        windowParams = 'width=330,height=330,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0';
    } else if (screenHeight > 352 && screenHeight <= 548) {
        windowParams = 'width=526,height=526,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0';
    } else {
        windowParams = 'width=740,height=740,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0';
    }   
    
    void window.open(source,'_blank', windowParams);
    return false;
}
