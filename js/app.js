/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
//-------------------------------------------
// helper function :
function getRandomCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.round(Math.random() * (max - min)) + min);
}
// locations object literals:
var seattleLocation = {
  name : 'Seatle',
  minCustPerHour : 23,
  maxCustPerHour : 65,
  custNumPerHour : [],
  avgCookiesPerCust : 6.3,
  dayHours : ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  numOfCookiesPerHour : [],
  totalNumOfCookies :0,
  getCustNumPerHour : function (minCustPerHour, maxCustPerHour) {
    for (var i =0; i<this.dayHours.length; i++) {
      this.custNumPerHour.push(getRandomCust(this.minCustPerHour, this.maxCustPerHour));
    }
    console.log(this.custNumPerHour);
    console.log(this.custNumPerHour.length);
  },
  getNumOfCookiesPerHour : function (custNumPerHour, avgCookiesPerCust) {
    for (var j=0; j<this.dayHours.length; j++) {
      var floorAvgCookies = Math.floor(this.avgCookiesPerCust);
      this.numOfCookiesPerHour.push(this.custNumPerHour[j]*floorAvgCookies);
      this.totalNumOfCookies = this.totalNumOfCookies + this.numOfCookiesPerHour[j];
    }
    console.log(this.numOfCookiesPerHour);
    console.log('total sum is '+this.totalNumOfCookies);
  },
  render : function () {
    var container = document.getElementById('location');
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var k = 0; k < this.dayHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.dayHours[k]} : ${this.numOfCookiesPerHour[k]}`;
      ulEl.appendChild(liEl);
    }
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = `total : ${this.totalNumOfCookies}`;
    ulEl.appendChild(totalLiEl);
    var brEl = document.createElement('br');
    container.appendChild(brEl);
  }
};
seattleLocation.getCustNumPerHour();
seattleLocation.getNumOfCookiesPerHour();
seattleLocation.render();
//------
var tokyoLocation = {
  name : 'Tokyo',
  minCustPerHour : 3,
  maxCustPerHour : 24,
  custNumPerHour : [],
  avgCookiesPerCust : 1.2,
  dayHours : ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  numOfCookiesPerHour : [],
  totalNumOfCookies :0,
  getCustNumPerHour : function (_minCustPerHour, _maxCustPerHour) {
    for (var i =0; i<this.dayHours.length; i++) {
      this.custNumPerHour.push(getRandomCust(this.minCustPerHour, this.maxCustPerHour));
    }
    console.log(this.custNumPerHour);
    console.log(this.custNumPerHour.length);
  },
  getNumOfCookiesPerHour : function (_custNumPerHour, _avgCookiesPerCust) {
    for (var j=0; j<this.dayHours.length; j++) {
      var floorAvgCookies = Math.floor(this.avgCookiesPerCust);
      this.numOfCookiesPerHour.push(this.custNumPerHour[j]*floorAvgCookies);
      this.totalNumOfCookies = this.totalNumOfCookies + this.numOfCookiesPerHour[j];
    }
    console.log(this.numOfCookiesPerHour);
    console.log('total sum is '+this.totalNumOfCookies);
  },
  render : function () {
    var container = document.getElementById('location');
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var k = 0; k < this.dayHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.dayHours[k]} : ${this.numOfCookiesPerHour[k]}`;
      ulEl.appendChild(liEl);
    }
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = `total : ${this.totalNumOfCookies}`;
    ulEl.appendChild(totalLiEl);
    var brEl = document.createElement('br');
    container.appendChild(brEl);

  }
};
tokyoLocation.getCustNumPerHour();
tokyoLocation.getNumOfCookiesPerHour();
tokyoLocation.render();
//-------
var dubaiLocation = {
  name : 'Dubai',
  minCustPerHour : 11,
  maxCustPerHour : 38,
  custNumPerHour : [],
  avgCookiesPerCust : 3.7,
  dayHours : ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  numOfCookiesPerHour : [],
  totalNumOfCookies :0,
  getCustNumPerHour : function (_minCustPerHour, _maxCustPerHour) {
    for (var i =0; i<this.dayHours.length; i++) {
      this.custNumPerHour.push(getRandomCust(this.minCustPerHour, this.maxCustPerHour));
    }
    console.log(this.custNumPerHour);
    console.log(this.custNumPerHour.length);
  },
  getNumOfCookiesPerHour : function (_custNumPerHour, _avgCookiesPerCust) {
    for (var j=0; j<this.dayHours.length; j++) {
      var floorAvgCookies = Math.floor(this.avgCookiesPerCust);
      this.numOfCookiesPerHour.push(this.custNumPerHour[j]*floorAvgCookies);
      this.totalNumOfCookies = this.totalNumOfCookies + this.numOfCookiesPerHour[j];
    }
    console.log(this.numOfCookiesPerHour);
    console.log('total sum is '+this.totalNumOfCookies);
  },
  render : function () {
    var container = document.getElementById('location');
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var k = 0; k < this.dayHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.dayHours[k]} : ${this.numOfCookiesPerHour[k]}`;
      ulEl.appendChild(liEl);
    }
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = `total : ${this.totalNumOfCookies}`;
    ulEl.appendChild(totalLiEl);
    var brEl = document.createElement('br');
    container.appendChild(brEl);

  }
};

dubaiLocation.getCustNumPerHour();
dubaiLocation.getNumOfCookiesPerHour();
dubaiLocation.render();
//-------
var parisLocation = {
  name : 'Paris',
  minCustPerHour : 20,
  maxCustPerHour : 38,
  custNumPerHour : [],
  avgCookiesPerCust : 2.3,
  dayHours : ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  numOfCookiesPerHour : [],
  totalNumOfCookies :0,
  getCustNumPerHour : function (_minCustPerHour, _maxCustPerHour) {
    for (var i =0; i<this.dayHours.length; i++) {
      this.custNumPerHour.push(getRandomCust(this.minCustPerHour, this.maxCustPerHour));
    }
    console.log(this.custNumPerHour);
    console.log(this.custNumPerHour.length);
  },
  getNumOfCookiesPerHour : function (_custNumPerHour, _avgCookiesPerCust) {
    for (var j=0; j<this.dayHours.length; j++) {
      var floorAvgCookies = Math.floor(this.avgCookiesPerCust);
      this.numOfCookiesPerHour.push(this.custNumPerHour[j]*floorAvgCookies);
      this.totalNumOfCookies = this.totalNumOfCookies + this.numOfCookiesPerHour[j];
    }
    console.log(this.numOfCookiesPerHour);
    console.log('total sum is '+this.totalNumOfCookies);
  },
  render : function () {
    var container = document.getElementById('location');
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var k = 0; k < this.dayHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.dayHours[k]} : ${this.numOfCookiesPerHour[k]}`;
      ulEl.appendChild(liEl);
    }
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = `total : ${this.totalNumOfCookies}`;
    ulEl.appendChild(totalLiEl);
    var brEl = document.createElement('br');
    container.appendChild(brEl);

  }
};

parisLocation.getCustNumPerHour();
parisLocation.getNumOfCookiesPerHour();
parisLocation.render();
//-------
var limaLocation = {
  name : 'Lima',
  minCustPerHour : 2,
  maxCustPerHour : 16,
  custNumPerHour : [],
  avgCookiesPerCust : 4.6,
  dayHours : ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  numOfCookiesPerHour : [],
  totalNumOfCookies :0,
  getCustNumPerHour : function (_minCustPerHour, _maxCustPerHour) {
    for (var i =0; i<this.dayHours.length; i++) {
      this.custNumPerHour.push(getRandomCust(this.minCustPerHour, this.maxCustPerHour));
    }
    console.log(this.custNumPerHour);
    console.log(this.custNumPerHour.length);
  },
  getNumOfCookiesPerHour : function (_custNumPerHour, _avgCookiesPerCust) {
    for (var j=0; j<this.dayHours.length; j++) {
      var floorAvgCookies = Math.floor(this.avgCookiesPerCust);
      this.numOfCookiesPerHour.push(this.custNumPerHour[j]*floorAvgCookies);
      this.totalNumOfCookies = this.totalNumOfCookies + this.numOfCookiesPerHour[j];
    }
    console.log(this.numOfCookiesPerHour);
    console.log('total sum is '+this.totalNumOfCookies);
  },
  render : function () {
    var container = document.getElementById('location');
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var k = 0; k < this.dayHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.dayHours[k]} : ${this.numOfCookiesPerHour[k]}`;
      ulEl.appendChild(liEl);
    }
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = `total : ${this.totalNumOfCookies}`;
    ulEl.appendChild(totalLiEl);
    var brEl = document.createElement('br');
    container.appendChild(brEl);

  }
};

limaLocation.getCustNumPerHour();
limaLocation.getNumOfCookiesPerHour();
limaLocation.render();


















