//by get element id
//var liNode = document.getElementById('one');

//by query selectors
// var liNode = document.querySelector('#one');

// liNode.textContent = 'cool';

// liNode.className = 'cool'; //this changes its class to cool

// var hotList = document.body.getElementsByClassName('hot');
// var hotList = document.querySelectorAll('hot');
// console.log(hotList)
// if (hotList.length > 2) {
// hotList[2].className = 'cool';
// }

// for (var i = 0; i < hotList.length; i++){
//     hotList[i].className = 'cool';
// }

// var unorderedList = document.createElement('ul');
// var body = document.querySelector('body')

// body.append(unorderedList)

// var li1 = document.createElement('li');
// li1.textContent('hello');
// unorderedList.append(li1)

function createHTMLElement(tagName, parentNode, innerText) {
    var tag = document.createElement(tagName);
    if (innerText.length > 0) {
        tag.textContent = innerText;
    }
    parentNode.append(tag);
    return tag;
} 

var body = document.querySelector('body'); //this is the partent we want to attach our ul to
var ul = createHTMLElement('ul', body, ''); //this will attach it to our body

for (var i = 1; i <= 5; i++) {
    createHTMLElement('li', ul, 'hello'); //this will attach the individual li elements
}
