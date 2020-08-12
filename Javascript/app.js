'useStrict'
console.log('I am a webpage that is being built by a student, so be patient');

var maxArr = [65,24,38,38,16]
var storeHourArr = ['6am', '7am', '8am', '9 am', '10am' '11am', '12pm', '1pm', '2pm' , '3pm' , '4pm' , '5pm' , '6pm', '7pm'];
//create seperate JS object literals for each of the 5 shop location that outputs the following to the sales.html file//

//Seattle//
var seattle = {
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
  calculatecookiesSoldEachHour: function(){
    for(var i-0; i<this.customerEachhour.length; i++){
      var averageCookieSale = Math.ceil (this.averageCookieSale * this.customerEachhour[i];
      this.cookiesSoldEachHour.push(averageCookieSale);
      this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldEachHour;
    }
  },
  //function that renders cookiesSoldEachHour
  render: function(){

  }
}


seattle.calculateCustomersEachHour();
seattle.calculateCookiesSoldEachHour();


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

// helper function section

// I got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random//
function getRandomNumber(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}