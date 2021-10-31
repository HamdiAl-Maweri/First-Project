function scroll() {
    if (document.documentElement.scrollTop > 40) {
        document.getElementById("content").style.cssText =
        "margin-top: 98px;";
        document.getElementById("upper-navbar").style.cssText =
        "position: fixed; width:100%; top:0;";
    }
    else{
        document.getElementById("content").style.cssText =
         "margin-top: 0px;";
         document.getElementById("upper-navbar").style.cssText =
         "position: relative; width:100%;";
    }
if (document.documentElement.scrollTop > 40) {
    document.getElementById("Side-content").style.cssText="position:fixed; top:98px;";
}
else{
    document.getElementById("Side-content").style.cssText="position:relative; top:0px;";
}
}
function showDetails1(){
    window.details1.style.cssText="visibility: visible;";
    window.detailsImg1.style.cssText=" min-width:500px !important;";
}
function hideDetails1(){
    window.details1.style.cssText="visibility: hidden;";
    window.detailsImg1.style.cssText=" min-width:500px !important;";
}
function showDetails2(){
    window.details2.style.cssText="visibility: visible;";
    window.detailsImg2.style.cssText=" min-width:500px !important;";
}
function hideDetails2(){
    window.details2.style.cssText="visibility: hidden;";
    window.detailsImg2.style.cssText=" min-width:500px !important;";
}
function showDetails3(){
    window.details3.style.cssText="visibility: visible;";
    window.detailsImg3.style.cssText=" min-width:500px !important;";
}
function hideDetails3(){
    window.details3.style.cssText="visibility: hidden;";
    window.detailsImg3.style.cssText=" min-width:500px !important;";
}
function showDetails4(){
    window.details4.style.cssText="visibility: visible;";
    window.detailsImg4.style.cssText=" min-width:500px !important;";
}
function hideDetails4(){
    window.details4.style.cssText="visibility: hidden;";
    window.detailsImg4.style.cssText=" min-width:500px !important;";
}
function showDetails5(){
    window.details5.style.cssText="visibility: visible;";
    window.detailsImg5.style.cssText=" min-width:500px !important;";
}
function hideDetails5(){
    window.details5.style.cssText="visibility: hidden;";
    window.detailsImg5.style.cssText=" min-width:500px !important;";
}
function showDetails6(){
    window.details6.style.cssText="visibility: visible;";
    window.detailsImg6.style.cssText=" min-width:500px !important;";
}
function hideDetails6(){
    window.details6.style.cssText="visibility: hidden;";
    window.detailsImg6.style.cssText=" min-width:500px !important;";
}
function withFamily(){
    window.withfamily.style.cssText="visibility: visible; position: relative;";
}
function alone(){
    window.withfamily.style.cssText="visibility: hidden; position: absolute;";
}