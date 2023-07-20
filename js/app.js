'user strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let seattleSection = document.getElementById('Seattle');

let seattle = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    customersPerHr: [],
    cookiesPerHr: [],
    randomCustGenerator: function(min, max){
      for(let i = 0; i < hours.length;i++){
        this.customersPerHr.push(Math.floor(Math.random()) * (max - min + 1)) ;}
    },
    getCalCookiesPerHr: function(){
      this.randomCustGenerator();
      for(let i = 0; i < hours.length;i++)
      { this.cookiesPerHr.push(Math.ceil(this.customersPerHr[i] * this.avgCookieSale));
      }
    },
  },
  render: function(){
    this.cookiesPerHr();

    let seattleList = document.createElement('ul');
    
    for(let i = 0; i < this.interest.length; i++){ 
      let interestLI = document.createElement('li'); 
      interestLI.innerText = this.interest[i];
      seattleList.appendChild(interestLI);


  }







let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  randomCustGenerator: function(min, max){
    return (Math.floor(Math.random()) * (max - min + 1)) ;
  },
  getTokyo: function(){
    this.seattle = this.randomCustGenerator(this.minCust, this.maxCust);
  }
};

let Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  randomCustGenerator: function(min, max){
    return (Math.floor(Math.random()) * (max - min + 1)) ;
  },
  getDubai: function(){
    this.seattle = this.randomCustGenerator(this.minCust, this.maxCust);
  }
};

let paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  randomCustGenerator: function(min, max){
    return (Math.floor(Math.random()) * (max - min + 1)) ;
  },
  getParis: function(){
    this.seattle = this.randomCustGenerator(this.minCust, this.maxCust);
  }
};

let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  randomCustGenerator: function(min, max){
    return (Math.floor(Math.random()) * (max - min + 1)) ;
  },
  getLima: function(){
    this.seattle = this.randomCustGenerator(this.minCust, this.maxCust);
  }
};
