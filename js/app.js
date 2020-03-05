'use strict';
// helper function :
function getRandomCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.round(Math.random() * (max - min)) + min);
}
// global variables :
var dayHours = ['6:00am', ' 7:00am', ' 8:00am', ' 9:00am', ' 10:00am', ' 11:00am', ' 12:00pm', ' 1:00pm', ' 2:00pm', ' 3:00pm', ' 4:00pm', ' 5:00pm', ' 6:00pm', ' 7:00pm'];
var tableId = document.getElementById('table'); ///table ID : tableId
var tableEl = document.createElement('table'); ///table element : tableEl
tableId.appendChild(tableEl);
var tbodyEl = document.createElement('tbody'); ///tbody element : tbodyEl
tableEl.appendChild(tbodyEl);
var locations = [];
var totalOfTotalsArr = [];
// the constructor function :
function ShopLocations(name, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.numCustomerPerHour = [];
  this.numCookiesPerHour = [];
  this.totalNumOfCookies = 0;
  locations.push(this);
  this.getNumCustomerPerHour();
  this.getNumCookiesPerHour();
}
ShopLocations.prototype.getNumCustomerPerHour = function () { //to calculate the random number of customers per hour using the min and max number of customers
  for (var i = 0; i < dayHours.length; i++) {
    this.numCustomerPerHour.push(getRandomCust(this.minCustomerPerHour, this.maxCustomerPerHour));
  }
};
ShopLocations.prototype.getNumCookiesPerHour = function () { //to calculate the number of cookies per hour and the total number of cookies
  for (var i = 0; i < dayHours.length; i++) {
    this.numCookiesPerHour.push(Math.floor(this.numCustomerPerHour[i]*this.avgCookiesPerCustomer));
    this.totalNumOfCookies += this.numCookiesPerHour[i];
  }
  totalOfTotalsArr.push(this.totalNumOfCookies); //an array that stores totalNumOfCookies for each location
};
// creating objects :
new ShopLocations('Seatle', '23', '65', '6.3');
new ShopLocations('Tokyo', '3', '24', '1.2');
new ShopLocations('Dubai', '11', '38', '3.7');
new ShopLocations('Paris', '20', '38', '2.3');
new ShopLocations('Lima', '2', '16', '4.6');
// sales list :
ShopLocations.prototype.renderList = function(){
  var container = document.getElementById('location');
  var h2El = document.createElement('h2');
  container.appendChild(h2El);
  h2El.textContent = this.name;
  var ulEl = document.createElement('ul');
  container.appendChild(ulEl);
  for (var k = 0; k < dayHours.length; k++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${dayHours[k]} : ${this.numCookiesPerHour[k]}`;
    ulEl.appendChild(liEl);
  }
  var totalLiEl = document.createElement('li');
  totalLiEl.textContent = `total : ${this.totalNumOfCookies}`;
  ulEl.appendChild(totalLiEl);
  var brEl = document.createElement('br');
  container.appendChild(brEl);
};
// table header :
function tableHeader() {
  var theadEl = document.createElement('thead'); ///thead element : theadEl
  tableEl.appendChild(theadEl);
  var trEl = document.createElement('tr'); ///tr element : trEl
  theadEl.appendChild(trEl);
  var thEl = document.createElement('th'); ///th element : thEl
  trEl.appendChild(thEl);
  for (var i = 0; i < dayHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = dayHours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
}
// table body - render :
ShopLocations.prototype.render = function(){
  var trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);
  var thElBody = document.createElement('th');
  thElBody.textContent = this.name;
  trEl.appendChild(thElBody);
  for (var i = 0; i < dayHours.length; i++) {
    var tdEl = document.createElement('td'); ///td element : tdEl
    tdEl.textContent = this.numCookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  var tdElDailyTotoal = document.createElement('td');
  tdElDailyTotoal.textContent = this.totalNumOfCookies;
  trEl.appendChild(tdElDailyTotoal);
};
// form :
var newStandForm = document.getElementById('addStandForm');
newStandForm.addEventListener('submit' , function(event){
  event.preventDefault();
  var branchName = event.target.name.value;
  var min = event.target.minCustomerPerHour.value;
  var max = event.target.maxCustomerPerHour.value;
  var avg = event.target.avgCookiesPerCustomer.value;
  var newBranch = new ShopLocations(branchName , min ,max, avg);
  newBranch.render();
  tableEl.deleteRow(tableEl.rows.length-1);
  tableFooter();
  newStandForm.reset();
});
// table footer :
function tableFooter() {
  var tfootEl = document.createElement('tfoot'); ///tfoot element : tfootEl
  tableEl.appendChild(tfootEl);
  var trEl = document.createElement('tr');
  tfootEl.appendChild(trEl);
  var thElFooter = document.createElement('th');
  thElFooter.textContent = 'Totals';
  trEl.appendChild(thElFooter);
  var cookiesSumPerHour;
  for (var i = 0; i < dayHours.length; i++) { //to repeat 14 times
    cookiesSumPerHour = 0;
    for (var j=0; j < locations.length; j++) { ///to sum the number of cookies per hour for all locations at each hour
      cookiesSumPerHour += locations[j].numCookiesPerHour[i];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = cookiesSumPerHour;
    trEl.appendChild(tdEl);
  }
  // the last cell block in footer - sum of all totals :
  var totalOftotalsSum = 0;
  for (var k=0; k < totalOfTotalsArr.length; k++) { //totalOfTotalsArr.length = the number of locations
    totalOftotalsSum += totalOfTotalsArr[k]; //totalOftotalsSum sums the elements in the totalOfTotalsArr
  }
  //totalOfTotalsArr = totalOftotalsSum;
  tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = totalOftotalsSum;
}
// rendering :
for (var j=0; j < locations.length; j++){
  locations[j].renderList();
}
tableHeader();
for (var i=0; i < locations.length; i++){
  locations[i].render();
}
tableFooter();

