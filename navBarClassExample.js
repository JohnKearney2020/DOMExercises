//create our overall header div
var headerDiv = document.createElement('div');
// headerDiv.setAttribute('class', 'header d-flex flex-row align-items-center');
headerDiv.setAttribute('class', 'header row mb-4 align-items-center');

//div1, left div, will cotain 'High on Coding'
var headerNestedDiv1 = document.createElement('div');
headerNestedDiv1.setAttribute('class', 'header col-4 mr-3');
headerNestedDiv1.innerHTML = '<h1><strong>High On Coding</strong></h1>';
headerDiv.append(headerNestedDiv1);



function createNavItem(elementName, elementType, linkText, classNames, attributeKey, attributeValue, parentAppendName) {
	var elementName = document.createElement(elementType);
	elementName.textContent = linkText;
	elementName.className = classNames;
	elementName.setAttribute(attributeKey, attributeValue);
    parentAppendName.append(elementName);
    return elementName;
}

var link1 = document.createElement('a');
link1.textContent = 'HighOnCoding';
link1.className = 'nav-item nav-link active';
link1.setAttribute('href', '#');

createNavItem('link1', 'a', 'HighOnCoding', 'nav-item nav-link active', 'href', '#', 'headerDiv');

//add the compleyte header to the container
var containerDiv = document.querySelector('.container'); //this selects the overall container we created in our HTML document
containerDiv.append(headerDiv);














//--------------------------------------------------------------------------------------------------------------
//Veronicas's links




// function createNavItem(elementName, elementType, linkText, classNames, attributeKey, attributeValue, parentAppendName) {
// 	var elementName = document.createElement(elementType);
// 	elementName.textContent = linkText;
// 	elementName.className = classNames;
// 	elementName.setAttribute(attributeKey, attributeValue);
// 	parentAppendName.append(elementName);
// }

// var headerDiv = document.createElement('div');
// headerDiv.className = 'headerDiv nav nav-bar h3';
// headerDiv.textContent = 'test content';
// // // headerDiv.append(link1);
// // // headerDiv.append(link2);
// // // headerDiv.append(link2);

// createNavItem('link1', 'a', 'HighOnCoding', 'nav-item nav-link active', 'href', '#', 'headerDiv');

// var headerNav = document.createElement('nav');
// headerNav.className = "navbar navbar-expand navbar-dark p-4";
// headerNav.style = "background-color: rgb(82, 167, 250); ";
// headerNav.append(headerDiv);


// //add the compleyte header to the container
// var containerDiv = document.querySelector('.container'); //this selects the overall container we created in our HTML document;
// containerDiv.append(headerNav);


// var link1 = document.createElement('a');
// link1.textContent = 'HighOnCoding';
// link1.className = 'nav-item nav-link active';
// link1.setAttribute('href', '#');

// var link2 = document.createElement('a');
// link2.textContent = 'Home';
// link2.className = 'nav-item nav-link active small pl-5';
// link2.setAttribute('href', '#');

// var link3 = document.createElement('a');
// link3.textContent = 'Categories';
// link3.className = 'nav-item nav-link active small pl-5';
// link3.setAttribute('href', '#');



//--------------------------------------------------------------------------------------------------------------