document.getElementById('js').addEventListener('click', JsNone);
function JsNone() {
 document.getElementById('jsNone').classList.toggle('jsNone');
}
document.getElementById('window').addEventListener('click', windowNone);
function windowNone() {
 document.getElementById('windowNone').classList.toggle('windowNone');
}
document.getElementById('dom').addEventListener('click', domNone);
function domNone() {
 document.getElementById('domNone').classList.toggle('domNone');
}
document.getElementById('events').addEventListener('click', eventNone);
function eventNone() {
 document.getElementById('eventNone').classList.toggle('eventNone');
}
document.getElementById('api').addEventListener('click', apiNone);
function apiNone() {
 document.getElementById('apiNone').classList.toggle('apiNone');
}

//******************************************************* */ array

document.getElementById('array').addEventListener('click', array);
function array () {
  document.getElementById('section').style.display= 'none';
  document.getElementById('sectionArray').style.display = 'initial';
}

// **************************html documents
let htmlDocumentButton = document.getElementById('htmlDocumentsButton').addEventListener('click', htmlDocumentBUtton);
function htmlDocumentBUtton () {
    document.getElementById('htmlDocumentHeader').style.display = 'initial';
    document.getElementById('htmlDocumentBoddy').style.display = 'none';
}

document.getElementById('htmlDocuments').addEventListener('click', htmlDocumnets);

function htmlDocumnets () {
  document.getElementById('section').style.display = 'none';
  document.getElementById('sectionHtmlDocument').style.display = 'initial';
}

//8*************************8 html document***activeElement
document.getElementById('activeElementButton').addEventListener('click', activeElementFunction);
function activeElementFunction() {
  document.getElementById('htmlDocumentHeader').style.display = 'none';
  document.getElementById('htmlDocumentBoddy').style.display = 'initial';

   document.getElementById('activeElement').style.display = 'initial';
}
