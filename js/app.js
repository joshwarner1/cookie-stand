'user strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let seattleSection = document.getElementById('Seattle');

let sum = 0;

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customersPerHr: [],
  cookiesPerHr: [],
  totalCookiesInDay: 0,
  randomCustGenerator: function(){
    for(let i = 0; i < hours.length;i++){
      this.customersPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1))); }
  },
  getCalCookiesPerHr: function(){
    this.randomCustGenerator();
    console.log(this.customersPerHr);
    for(let i = 0; i < hours.length;i++)
    { 
      let hourCookies = (Math.ceil(this.customersPerHr[i] * this.avgCookieSale));
      this.cookiesPerHr.push(hourCookies)
      this.totalCookiesInDay += hourCookies
    }
  },

  render: function(){
    this.getCalCookiesPerHr();
    console.log(this.cookiesPerHr);
    let articleElement = document.getElementById('seatlleArt');

    let seattleH1 = document.createElement('h1');
    seattleH1.innerText = this.location;
    articleElement.appendChild(seattleH1);

    let seattleList = document.createElement('ul');
    articleElement.appendChild(seattleList);

    for(let i = 0; i < hours.length; i++){
      let cookisList = document.createElement('li');
      cookisList.innerText = `${hours[i]}: ${this.cookiesPerHr[i]} cookies`;
      seattleList.appendChild(cookisList);

    }

  }
};

seattle.render();






let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  customersPerHr: [],
  cookiesPerHr: [],
  randomCustGenerator: function(min, max){
    return (Math.floor(Math.random()) * (max - min + 1)) ;
  },
  getCalCookiesPerHr: function(){
    this.randomCustGenerator();
    for(let i = 0; i < hours.length;i++)
    { this.cookiesPerHr.push(Math.ceil(this.customersPerHr[i] * this.avgCookieSale));
    }
  }
};

let Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  customersPerHr: [],
  cookiesPerHr: [],
  randomCustGenerator: function(min, max){
    return (Math.floor(Math.random()) * (max - min + 1)) ;
  },
  getCalCookiesPerHr: function(){
    this.randomCustGenerator();
    for(let i = 0; i < hours.length;i++)
    { this.cookiesPerHr.push(Math.ceil(this.customersPerHr[i] * this.avgCookieSale));
    }
  }
};

let paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  customersPerHr: [],
  cookiesPerHr: [],
  randomCustGenerator: function(min, max){
    return (Math.floor(Math.random()) * (max - min + 1)) ;
  },
  getCalCookiesPerHr: function(){
    this.randomCustGenerator();
    for(let i = 0; i < hours.length;i++)
    { this.cookiesPerHr.push(Math.ceil(this.customersPerHr[i] * this.avgCookieSale));
    }
  }
};


let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  customersPerHr: [],
  cookiesPerHr: [],
  randomCustGenerator: function(min, max){
    return (Math.floor(Math.random()) * (max - min + 1)) ;
  },
  getCalCookiesPerHr: function(){
    this.randomCustGenerator();
    for(let i = 0; i < hours.length;i++)
    { this.cookiesPerHr.push(Math.ceil(this.customersPerHr[i] * this.avgCookieSale));
    }
  }
};
