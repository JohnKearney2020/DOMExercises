//============================================================================
//                            Header
//============================================================================

//create our overall header div
var headerDiv = document.createElement('div');
// headerDiv.setAttribute('class', 'header d-flex flex-row align-items-center');
headerDiv.setAttribute('class', 'header row mb-4 align-items-center');

// function createDiv(elementName, elementType, attributeKey, attributeValue, innerHTML, parentAppendTo) {
// 	//div1, left div, will cotain 'High on Coding'
// 	var elementName = document.createElement(elementType);
// 	elementName.setAttribute(attributeKey, attributeValue);
// 	elementName.innerHTML = innerHTML;
// 	parentAppendTo.append(elementName);
// 	return elementName;
// }

// createDiv('headerNestedDiv1', 'div', 'class', 'header col-4 mr-3', '<h1><strong>High On Coding</strong></h1>', 'headerDiv');

// div1, left div, will cotain 'High on Coding'
var headerNestedDiv1 = document.createElement('div');
headerNestedDiv1.setAttribute('class', 'header col-4 mr-3');
headerNestedDiv1.innerHTML = '<h1><strong>High On Coding</strong></h1>';
headerDiv.append(headerNestedDiv1);

//div2, middle div, will contian 'Home'
var headerNestedDiv2 = document.createElement('div');
headerNestedDiv2.setAttribute('class', 'header col-2');
headerNestedDiv2.innerHTML = '<h3><strong>Home</strong></h3>';
headerDiv.append(headerNestedDiv2);

//div3, middle div, will contian 'Categories'
var headerNestedDiv3 = document.createElement('div');
headerNestedDiv3.setAttribute('class', 'header col-3 ');
headerNestedDiv3.innerHTML = '<h3>Categories</h3>';
headerDiv.append(headerNestedDiv3);

//add the compleyte header to the container
var containerDiv = document.querySelector('.container'); //this selects the overall container we created in our HTML document
containerDiv.append(headerDiv);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//                            END OF HEADER
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//============================================================================
//                            Grey Box
//============================================================================
var GreyBoxDiv = document.createElement('div');
GreyBoxDiv.setAttribute('class', 'greyBox column align-items-center');

//top text div
var GreyBoxDiv1 = document.createElement('div');
GreyBoxDiv1.setAttribute('class', 'greyBox col align-items-center justify-content-start');
GreyBoxDiv1.innerHTML = '<h2>Curse of the Current Reviews</h2>';
GreyBoxDiv.append(GreyBoxDiv1); //add our first child div to the GreyBoxDiv

var GreyBoxDiv1 = document.createElement('div');
GreyBoxDiv1.setAttribute('class', 'greyBox col align-items-center justify-content-start');
GreyBoxDiv1.innerHTML =
	'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot, and reviews.';
GreyBoxDiv.append(GreyBoxDiv1); //add our 2nd child div to the GreyBoxDiv

containerDiv.append(GreyBoxDiv); //add the grey box to our container

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//                           END OF GREY BOX
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//============================================================================
//                            Hello WatchKit
//============================================================================
var watchKitDiv = document.createElement('div');
watchKitDiv.setAttribute('class', 'watchKit column align-items-center my-1');

var topBlueTextDiv = document.createElement('div');
topBlueTextDiv.setAttribute('class', 'column align-items-center text-primary');
topBlueTextDiv.innerHTML = '<h4>Hello WatchKit</h4>';
watchKitDiv.append(topBlueTextDiv); //add the blue text div to the WatchKit Div

var midBlackTextDiv = document.createElement('div'); //add the middle black text
midBlackTextDiv.setAttribute('class', 'column align-items-center text-dark mb-1');
midBlackTextDiv.innerHTML =
	'Last month Apple released the anticipated WatchKit Framework for developers in the for of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.';
watchKitDiv.append(midBlackTextDiv); //add the middle black text div to the WatchKit Div

var bottomCommentsDiv = document.createElement('div'); //create the orange bar for comments
bottomCommentsDiv.setAttribute('class', 'row align-items-center text-light bg-warning mx-0');

var watchKitCommentsDiv = document.createElement('div'); //create the div for the comments
watchKitCommentsDiv.setAttribute('class', 'col-2 align-items-center text-light');
watchKitCommentsDiv.innerHTML = '<strong>12 comments</strong>';
bottomCommentsDiv.append(watchKitCommentsDiv); //add the comments div to the orange bar div

var watchKitLikesDiv = document.createElement('div'); //create the div for the comments
watchKitLikesDiv.setAttribute('class', 'col-2 align-items-center text-light');
watchKitLikesDiv.innerHTML = '<strong>124 likes</strong>';
bottomCommentsDiv.append(watchKitLikesDiv); //add the comments div to the orange bar div

watchKitDiv.append(bottomCommentsDiv); //add the middle black text div to the WatchKit Div

containerDiv.append(watchKitDiv);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//                           END OF HELLO WATCHKIT
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//============================================================================
//                       Introduction to Swift
//============================================================================
var swiftDiv = document.createElement('div');
swiftDiv.setAttribute('class', 'watchKit column align-items-center my-1');

var topBlueTextDiv = document.createElement('div');
topBlueTextDiv.setAttribute('class', 'column align-items-center text-primary');
topBlueTextDiv.innerHTML = '<h4>Introduction to Swift</h4>';
swiftDiv.append(topBlueTextDiv); //add the blue text div to the WatchKit Div

var midBlackTextDiv = document.createElement('div'); //add the middle black text
midBlackTextDiv.setAttribute('class', 'column align-items-center text-dark mb-1');
midBlackTextDiv.innerHTML =
	'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development bit it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.';
swiftDiv.append(midBlackTextDiv); //add the middle black text div to the WatchKit Div

var bottomCommentsDiv = document.createElement('div'); //create the orange bar for comments
bottomCommentsDiv.setAttribute('class', 'row align-items-center text-light bg-warning mx-0');

var watchKitCommentsDiv = document.createElement('div'); //create the div for the comments
watchKitCommentsDiv.setAttribute('class', 'col-2 align-items-center text-light');
watchKitCommentsDiv.innerHTML = '<strong>15 comments</strong>';
bottomCommentsDiv.append(watchKitCommentsDiv); //add the comments div to the orange bar div

var watchKitLikesDiv = document.createElement('div'); //create the div for the comments
watchKitLikesDiv.setAttribute('class', 'col-2 align-items-center text-light');
watchKitLikesDiv.innerHTML = '<strong>45 likes</strong>';
bottomCommentsDiv.append(watchKitLikesDiv); //add the comments div to the orange bar div

swiftDiv.append(bottomCommentsDiv); //add the middle black text div to the WatchKit Div

containerDiv.append(swiftDiv);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//                           END OF INTRODUCTION TO SWIFT
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
