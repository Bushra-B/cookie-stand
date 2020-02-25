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
    this.numOfCookiesPerHour.push(Math.floor(this.custNumPerHour[j]*this.avgCookiesPerCust));
    this.totalNumOfCookies = this.totalNumOfCookies + this.numOfCookiesPerHour[j];}
};
// creating the table header :
function createTableHeader(){
  var tableHead = document.getElementById('table');
  var tableHeaderEl = document.createElement('table');
  tableHead.appendChild(tableHeaderEl);
  var theadEl = document.createElement('thead');
  tableHeaderEl.appendChild(theadEl);
  var trHeadEl = document.createElement('tr');
  theadEl.appendChild(trHeadEl);
  var thHeadEl = document.createElement('th');
  thHeadEl.textContent = ' Hours: ';
  trHeadEl.appendChild(thHeadEl);
  for (var i = 0; i<dayHours.length; i++) {
    thHeadEl = document.createElement('th');
    thHeadEl.textContent = dayHours[i];
    trHeadEl.appendChild(thHeadEl);
  }
  thHeadEl = document.createElement('th');
  thHeadEl.textContent = 'Daily Location Total';
  trHeadEl.appendChild(thHeadEl);
}
// the render method :
ShopLocation.prototype.render = function () {
  this.getCustNumPerHour();
  this.getNumOfCookiesPerHour();
  var tableBody = document.getElementById('table');
  var tbodyEl = document.createElement('tbody');
  tableBody.appendChild(tbodyEl);
  var tr1El = document.createElement('tr');
  tbodyEl.appendChild(tr1El);
  var th1El = document.createElement('th');
  th1El.textContent = this.name;
  tr1El.appendChild(th1El);
  for (var j=0; j<dayHours.length;j++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.numOfCookiesPerHour[j];
    tr1El.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalNumOfCookies;
  tr1El.appendChild(tdEl);
};
// creating the totals maethod :

//*****************************//

// creating the table footer :
function createTableFooter(){
  var tableFoot = document.getElementById('table');
  var tfootEl = document.createElement('tfoot');
  tableFoot.appendChild(tfootEl);
  var tr2El = document.createElement('tr');
  tfootEl.appendChild(tr2El);
  var th2El = document.createElement('th');
  th2El.textContent = 'Totals';
  tr2El.appendChild(th2El);
  for (var k=0; k<dayHours.length;k++) {
    var tdEl = document.createElement('td');
    // code not complete
  }
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
//-----------------------------
