'useStrict'
console.log('I am a webpage that is being built by a student, so please be kind');
var parentElement = document.getElementById('table');
var maxArr = [65,24,38,38,16]
var storeHourArr = ['6am', '7am', '8am', '9 am', '10am' '11am', '12pm', '1pm', '2pm' , '3pm' , '4pm' , '5pm' , '6pm', '7pm'];
//create seperate JS object literals for each of the 5 shop location that outputs the following to the sales.html file//

//Seattle//
var seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBuy 6.3,
  totalCookiesForTheDay[],
  customerEachhour: [],
  cookiesSoldEachHour:[],

  //function gives user calculatesCustomersEachHour arrary
  calculateCustomersEachHour: function(){
    for(var i=0; i<storeHourArr.length; i=={
      var customers = getRandomNumber(this.minCust, this.maxCust);
      this.customerEachhour.push(customers);
    }

  }
  //function produces calculateCookiesSoldEachHour array
  calculateCookiesSoldEachHour: function(){
    for(var i-0; i<this.customerEachhour.length; i++){
      var averageCookieSale = Math.ceil (this.averageCookieSale * this.customerEachhour[i];
      this.cookiesSoldEachHour.push(averageCookieSale);
      this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldEachHour;
    }
  },
  //function that renders cookiesSoldEachHour
  render: function(){
    var seattleStoreName = document.getElementById('seattle-name');
    seattleStoreName.textContent = this.location;
    var parent = document.getElementById('seattle');
    for (var i=0; i<this.cookiesSoldEachHour.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = '${storeHourArr [i]}: ${this.cookiesSoldEachHour[i]} cookies';
      parentElement.appendChild(listItem);
    }
    // displays the total on the page
  listItem = document.createElement('li');
    listItem.textContent = 'Totals: ${this.totalCookiesForTheDay} cookies';
    parentElement.appendChild(listItem);
    }
}


seattle.calculateCustomersEachHour();
seattle.calculateCookiesSoldEachHour();
seattle.render();


//Tokyo//
var Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieBuy 1.2,
  customerEachhour: [],
  cookiesSoldEachHour:[],

}

//Dubai//
var Dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieBuy 3.7,
  customerEachhour: [],
  cookiesSoldEachHour:[],

}

//Paris//
var Paris = {
  minCust: 20,
  maxCust: 38,
  avgCookieBuy 2.3,
  customerEachhour: [],
  cookiesSoldEachHour:[],
}



//Lima//
var Lima = {
  minCust: 2,
  maxCust: 16,
  avgCookieBuy 4.6,
  customerEachhour: [],
  cookiesSoldEachHour:[],
}

//location constructor
function Location (minCust,maxCust,avgCookieBuy,customerEachhour,cookiesSoldEachHour){
  this.location = location;
  this.minCust = minCust;
  this.avgCookieBuy = avgCookieBuy;
  this.customerEachhour = customerEachhour;
  this. cookiesSoldEachHour = cookiesSoldEachHour;
}

Location.prototype.sales = function(){
    console.log('${this.location} is selling');
}


//table

var allLocations = [];

var myObj = {
  key:
}

//location constructor
function Location (minCust,maxCust,avgCookieBuy,customerEachhour,cookiesSoldEachHour){
  this.location = location;
  this.minCust = minCust;
  this.avgCookieBuy = avgCookieBuy;
  this.customerEachhour = customerEachhour;
  this. cookiesSoldEachHour = cookiesSoldEachHour;
  //hopefully this pushes the object instance into my allLocations array
  allLocations.push(this);
}
location.prototype.renderTablelist = function(){
  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow);
  var tableData = document.createElement('td');
  tableData.textContent = this.location;
  tableRow.appendChild(tableData);

  var tableData = document.createElement('td');
  tableData.textContent = this.minCust;
  tableRow.appendChild(tableData);

  var tableData = document.createElement('td');
  tableData.textContent = this.avgCookieBuy;
  tableRow.appendChild(tableData);

  var tableData = document.createElement('td');
  tableData.textContent = this.customerEachhour;
  tableRow.appendChild(tableData);

  var tableData = document.createElement('td');
  tableData.textContent = this.cookiesSoldEachHour;
  tableRow.appendChild(tableData);
}

var new Location('Seattle', 23,65,6.3);
new location('Tokyo',3,24,1.2);
new location('Dubai',11,38,3.7);
new location('Paris', 20,38,2.3);
new location('Lima', 2,16,4.6)

function generateHeader(){
  var parentElement = document.getElementById('table');
  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow);
  var tableHead = document.createElement('th');
  tableHead.textContent = "Location";
  tableRow.appendChild(tableHead);

  var tableHead = document.createElement('th');
  tableHead.textContent = "Min Customers";
  tableRow.appendChild(tableHead);

  var tableHead = document.createElement('th');
  tableHead.textContent = "Max Customers";
  tableRow.appendChild(tableHead);

  var tableHead = document.createElement('th');
  tableHead.textContent = "avgCookieBuy";
  tableRow.appendChild(tableHead);

}
parent.appendChild(tableRow);

generateHeader();
for(var i=0; i<allLocations.length; i++){
  allLocations[i].renderTablelist();

for(var i=0; i<allminCust.length; i++){
    minCust[i].renderTablelist();

for(var i=0; i<maxCust.length; i++){
    maxCust[i].renderTablelist();

for(var i=0; i<avgCookieBuy.length; i++){
      avgCookieBuy[i].renderTablelist();

}



// helper function section

// I got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random//
function getRandomNumber(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}