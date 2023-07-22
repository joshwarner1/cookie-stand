'user strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


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
      this.cookiesPerHr.push(hourCookies);
      this.totalCookiesInDay += hourCookies;
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
      let cookiesList = document.createElement('li');
      cookiesList.innerText = `${hours[i]}: ${this.cookiesPerHr[i]} cookies`;
      seattleList.appendChild(cookiesList);


    }
    const cookiesList = document.createElement('li');
    cookiesList.textContent = 'Total: ' + this.totalCookiesInDay + 'cookies';
    seattleList.appendChild(cookiesList);

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
      this.cookiesPerHr.push(hourCookies);
      this.totalCookiesInDay += hourCookies;
    }
  },

  render: function(){
    this.getCalCookiesPerHr();
    console.log(this.cookiesPerHr);
    let articleElement = document.getElementById('tokyoArt');

    let tokyoH2 = document.createElement('h2');
    tokyoH2.innerText = this.location;
    articleElement.appendChild(tokyoH2);

    let tokyoList = document.createElement('ul');
    articleElement.appendChild(tokyoList);

    for(let i = 0; i < hours.length; i++){
      let cookiesList = document.createElement('li');
      cookiesList.innerText = `${hours[i]}: ${this.cookiesPerHr[i]} cookies`;
      tokyoList.appendChild(cookiesList);


    }
    const cookiesList = document.createElement('li');
    cookiesList.textContent = 'Total: ' + this.totalCookiesInDay + 'cookies';
    tokyoList.appendChild(cookiesList);

  }
};

tokyo.render();




let dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
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
      this.cookiesPerHr.push(hourCookies);
      this.totalCookiesInDay += hourCookies;
    }
  },

  render: function(){
    this.getCalCookiesPerHr();
    console.log(this.cookiesPerHr);
    let articleElement = document.getElementById('dubaiArt');

    let dubaiH3 = document.createElement('h3');
    dubaiH3.innerText = this.location;
    articleElement.appendChild(dubaiH3);

    let dubaiList = document.createElement('ul');
    articleElement.appendChild(dubaiList);

    for(let i = 0; i < hours.length; i++){
      let cookiesList = document.createElement('li');
      cookiesList.innerText = `${hours[i]}: ${this.cookiesPerHr[i]} cookies`;
      dubaiList.appendChild(cookiesList);


    }
    const cookiesList = document.createElement('li');
    cookiesList.textContent = 'Total: ' + this.totalCookiesInDay + 'cookies';
    dubaiList.appendChild(cookiesList);

  }
};


dubai.render();


let paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
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
      this.cookiesPerHr.push(hourCookies);
      this.totalCookiesInDay += hourCookies;
    }
  },

  render: function(){
    this.getCalCookiesPerHr();
    console.log(this.cookiesPerHr);
    let articleElement = document.getElementById('parisArt');

    let parisH4 = document.createElement('h4');
    parisH4.innerText = this.location;
    articleElement.appendChild(parisH4);

    let parisList = document.createElement('ul');
    articleElement.appendChild(parisList);

    for(let i = 0; i < hours.length; i++){
      let cookiesList = document.createElement('li');
      cookiesList.innerText = `${hours[i]}: ${this.cookiesPerHr[i]} cookies`;
      parisList.appendChild(cookiesList);


    }
    const cookiesList = document.createElement('li');
    cookiesList.textContent = 'Total: ' + this.totalCookiesInDay + 'cookies';
    parisList.appendChild(cookiesList);

  }
};

paris.render();


let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
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
      this.cookiesPerHr.push(hourCookies);
      this.totalCookiesInDay += hourCookies;
    }
  },

  render: function(){
    this.getCalCookiesPerHr();
    console.log(this.cookiesPerHr);
    let articleElement = document.getElementById('limaArt');

    let limaH5 = document.createElement('h5');
    limaH5.innerText = this.location;
    articleElement.appendChild(limaH5);

    let limaList = document.createElement('ul');
    articleElement.appendChild(limaList);

    for(let i = 0; i < hours.length; i++){
      let cookiesList = document.createElement('li');
      cookiesList.innerText = `${hours[i]}: ${this.cookiesPerHr[i]} cookies`;
      limaList.appendChild(cookiesList);


    }
    const cookiesList = document.createElement('li');
    cookiesList.textContent = 'Total: ' + this.totalCookiesInDay + 'cookies';
    limaList.appendChild(cookiesList);

  }
};

lima.render();
