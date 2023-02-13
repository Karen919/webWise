//****************************************** */ homeButtonsCall
document.getElementById('js').addEventListener('click',function () { none ('jsNone')});
document.getElementById('window').addEventListener('click',function () { none ('windowNone')});
document.getElementById('dom').addEventListener('click',function () { none ('domNone')});
document.getElementById('events').addEventListener('click', function () { none ('eventNone')});
document.getElementById('api').addEventListener('click', function(){ none('apiNone')  });
function none(x) {
 document.getElementById(x).classList.toggle(x);
}


let sectionHtmlDocument = document.getElementById('sectionHtmlDocument');
let htmlDocument = 'sectionHtmlDocument';
document.getElementById('htmlDocuments').addEventListener('click', function() { changemain(sectionHtmlDocument, htmlDocument); });

function changemain ( x, y) {
 
   document.getElementById('main').innerHTML = x.innerHTML;
   document.getElementById(y).classList.toggle(y);
};
// ******************************************************htmlDomMethodsCall

function htmlDomMethodsCall (x) {
 document.getElementById('htmlDocumentHeader').style.display = 'none';
 document.getElementById(x).classList.toggle('none');
 
};





//******************************************************* */ array

document.getElementById('array').addEventListener('click', array);
function array () {
  document.getElementById('section').style.display= 'none';
  document.getElementById('sectionArray').style.display = 'initial';
}