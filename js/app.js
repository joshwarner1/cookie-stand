'use strict';

console.log('hello');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let table = document.getElementById('sales-table');

let allStores = [];

let grandTotal = [];

let locationTotals = [];



function tableHeader(){
  let table = document.getElementById('sales-table');
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  let headerElement = document.createElement('th');
  headerElement.textContent = 'Hours';
  headerRow.appendChild(headerElement);

  for(let i = 0; i < hours.length; i++){
    let headerElement = document.createElement('th');
    headerElement.textContent = hours[i];
    headerRow.appendChild(headerElement);
    locationTotals [i] = 0;
  }
  let dailyTotals = document.createElement('td');
  dailyTotals.textContent = 'Daily Location Totals';
  headerRow.appendChild(dailyTotals);
}

function locationRows(){
  for(let i = 0; i < allStores.length; i++){
    allStores[i].render();

  }
}

function CookieStores(location, minCust, maxCust, avgCookieSale) {

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.customersPerHr = [];
  this.cookiesPerHr = [];
  this.total = 0;
}

CookieStores.prototype.randomCustGenerator = function(){
  for(let i = 0; i < hours.length;i++){
    this.customersPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1))); }
  console.log(this.randomCustGenerator);
};

CookieStores.prototype.getCalCookiesPerHr = function(){
  this.randomCustGenerator();
  console.log(this.customersPerHr);
  for(let i = 0; i < hours.length;i++)
  {
    let hourCookies = (Math.ceil(this.customersPerHr[i] * this.avgCookieSale));
    this.cookiesPerHr.push(hourCookies);
    this.total += hourCookies;
  }
};

CookieStores.prototype.render = function(){
  this.getCalCookiesPerHr();
  console.log(this.cookiesPerHr);

  let rowHeading = document.createElement('tr');
  table.appendChild(rowHeading);

  let locationName = document.createElement('td');
  locationName.textContent = this.location;
  rowHeading.appendChild(locationName);
  for(let i = 0; i < hours.length; i++){

    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHr[i];
    rowHeading.appendChild(tableData);
    locationTotals[i] += this.cookiesPerHr[i];

  }
  let dailyLocationTotalsData = document.createElement('td');
  dailyLocationTotalsData.textContent = this.total;
  rowHeading.appendChild(dailyLocationTotalsData);
  console.log('TOTAL', this.total);

  grandTotal += this.total;
};

function tableFooter(){
  let totalFooter = document.createElement('tr');
  table.appendChild(totalFooter);

  let totalRowHeader = document.createElement('th');
  totalRowHeader.textContent = 'Totals';
  totalFooter.appendChild(totalRowHeader);
  grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let totalOfTotals = 0;
    for(let j = 0; j < allStores.length; j++) {
      totalOfTotals += allStores[j].cookiesPerHr[i];
    }
    let hourlyTotals = document.createElement('td');
    hourlyTotals.textContent = totalOfTotals;
    totalFooter.appendChild(hourlyTotals);
    locationTotals[i] += totalOfTotals;
    grandTotal += totalOfTotals;
  }
  let grandTotalCell = document.createElement('td');
  // for( let i = 0; i < locationTotals.length; i++){
  //   let locationTotalCell = document.createElement('td');
  //   locationTotalCell.textContent = locationTotals[i];
  //   totalFooter.appendChild(locationTotalCell);
  //   grandTotal += locationTotals[i];
  // }
  grandTotalCell.textContent = grandTotal;
  totalFooter.appendChild(grandTotalCell);
}

let seattle = new CookieStores('Seattle', 23, 65, 6.3);

let tokyo = new CookieStores('Tokyo', 3, 24, 1.2);

let dubai = new CookieStores('Dubai', 11, 38, 3.7);

let paris = new CookieStores('Paris', 20, 38, 2.3);

let lima = new CookieStores('Lima', 2, 16, 4.6);

allStores.push(seattle, tokyo, dubai, paris, lima );
console.log(allStores);

tableHeader();

locationRows();

tableFooter(); 

console.log('TOTAL', this.total);
// function renderAll(){
//   for(let i = 0; i < allStores.length; i++){
//     allStores[i].render(); 
//   }
// for(let j = 0; j < allStores.length; j++){
//   this.totalCookiesInDay += allStores[i][j];
// }



//renderAll();
