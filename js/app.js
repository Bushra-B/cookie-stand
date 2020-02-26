'usestrict';
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
//-------------------------------------------
// helper function :
function getRandomCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.round(Math.random() * (max - min)) + min);
}
var dayHours = ['6:00am', ' 7:00am', ' 8:00am', ' 9:00am', ' 10:00am', ' 11:00am', ' 12:00pm', ' 1:00pm', ' 2:00pm', ' 3:00pm', ' 4:00pm', ' 5:00pm', ' 6:00pm', ' 7:00pm'];
var totalsSum = [];
var allTotals = [];
// creating the constructor :
function ShopLocation (name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.custNumPerHour = [];
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.numOfCookiesPerHour = [];
  this.totalNumOfCookies = 0;
}
ShopLocation.prototype.getCustNumPerHour = function (minCustPerHour, maxCustPerHour){
  for (var i =0; i<dayHours.length; i++) {
    this.custNumPerHour.push(getRandomCust(this.minCustPerHour, this.maxCustPerHour));}
};
ShopLocation.prototype.getNumOfCookiesPerHour = function (custNumPerHour, avgCookiesPerCust){
  for (var j=0; j<dayHours.length; j++) {
    this.numOfCookiesPerHour.push(Math.floor(this.custNumPerHour[j]*this.avgCookiesPerCust)); //pushing values to numOfCookiesPerHour array
    this.totalNumOfCookies = this.totalNumOfCookies + this.numOfCookiesPerHour[j]; //adding values to totalNumOfCookies
  }
  allTotals.push(this.totalNumOfCookies);
};
// creating the table header :
var tableId = document.getElementById('table'); //table ID : tableId
var tableEl = document.createElement('table'); //table element : tableEl
tableId.appendChild(tableEl);
var theadEl = document.createElement('thead'); //thead element for header : theadEl
tableEl.appendChild(theadEl);
var trHeadEl = document.createElement('tr'); //first tr element : trHeadEl
theadEl.appendChild(trHeadEl);
var thHeadEl = document.createElement('th'); //th element : thHeadEl ---> first block
thHeadEl.textContent = ' ';
trHeadEl.appendChild(thHeadEl);
function createTableHeader(){
  for (var i = 0; i<dayHours.length; i++) { //generating th elements and appendeng values
    thHeadEl = document.createElement('th');
    thHeadEl.textContent = dayHours[i];
    trHeadEl.appendChild(thHeadEl);
  }
  thHeadEl = document.createElement('th'); // total th block
  thHeadEl.textContent = 'Daily Location Total';
  trHeadEl.appendChild(thHeadEl);
}
var tbodyEl = document.createElement('tbody'); //tbody element : tbodyEl
tableEl.appendChild(tbodyEl);
// the render method :
ShopLocation.prototype.render = function () {
  this.getCustNumPerHour();
  this.getNumOfCookiesPerHour();
  var tr1El = document.createElement('tr'); //2nd tr element : tr1El
  tbodyEl.appendChild(tr1El);
  var th1El = document.createElement('th'); //th element for body : th1El
  th1El.textContent = this.name+'  ';
  tr1El.appendChild(th1El);
  for (var j=0; j<dayHours.length;j++) { //generating td elements and appending values
    var tdEl = document.createElement('td');
    tdEl.textContent = this.numOfCookiesPerHour[j];
    tr1El.appendChild(tdEl);
  }
  tdEl = document.createElement('td'); //total td block
  tdEl.textContent = this.totalNumOfCookies;
  tr1El.appendChild(tdEl);
};
// creating the totals maethod :

//*****************************//
var tfootEl = document.createElement('tfoot'); //tfoot element : tfootEl
tableEl.appendChild(tfootEl);
// creating the table footer :
function createTableFooter(){
  var tr2El = document.createElement('tr'); ////3rd tr element : tr2El
  tfootEl.appendChild(tr2El);
  var th2El = document.createElement('th'); //th element for foot : th2El
  th2El.textContent = 'Totals';
  tr2El.appendChild(th2El);
  var resCalc = calculateTotals();
  for (var k=0; k<dayHours.length;k++) { //generating td elements and appending values
    var tdEl = document.createElement('td');
    tr2El.appendChild(tdEl);
    tdEl.textContent = resCalc[k];
  }
  function calculateTotals (){
    var locationsArray = [seattleLocation,tokyoLocation,dubaiLocation,parisLocation,limaLocation]; //store the objects in an array
    var locationsNumOfCookies = []; //store number of cookies for each location at one hour
    var resCalc = [];
    for (var N=0; N <dayHours.length; N++){
      for (var i= 0; i < locationsArray.length; i++){
        locationsNumOfCookies.push(locationsArray[i]['numOfCookiesPerHour'][N]); //to access the nth value of numOfCookiesPerHour in the ith object of locationsArray
      }
      var calc = 0;
      for (var x = 0; x < locationsNumOfCookies.length; x++){
        calc += locationsNumOfCookies[x];
      }
      resCalc.push(calc);
      locationsNumOfCookies = [];
    }
    console.log(resCalc);
    return resCalc;
  }
  var calc2 = 0;
  for (var y = 0; y < allTotals.length; y++){
    calc2 += allTotals[y];
  }
  allTotals = calc2;
  tdEl = document.createElement('td');
  tr2El.appendChild(tdEl);
  tdEl.textContent = allTotals;
}
// creating the objects using the construtor function :
createTableHeader();
var seattleLocation = new ShopLocation('Seatle', 23, 65, 6.3);
seattleLocation.render();
var tokyoLocation = new ShopLocation('Tokyo', 3, 24, 1.2);
tokyoLocation.render();
var dubaiLocation = new ShopLocation('Dubai', 11, 38, 3.7);
dubaiLocation.render();
var parisLocation = new ShopLocation('Paris', 20, 38, 2.3);
parisLocation.render();
var limaLocation = new ShopLocation('Lima', 2, 16, 4.6);
limaLocation.render();
createTableFooter();
//-----------------------------
