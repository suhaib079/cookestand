'use stirct'
var Seattle = {
    shopname :'Seattle',
    mincost : 23,
    maxcost : 65,
    avgcookie : 6.3,
    costmerperhour :[],
    cookiesperhour :[],
    totalcookies: 0 ,
    cost: function () {
        for (let i = 0; i < 14; i++) {
            this.costmerperhour.push(Math.floor(Math.random() * (this.maxcost - this.mincost + 1) + this.mincost)); 
        }
        
    },
    cookiessales: function () {
        for (let i = 0; i < 14; i++) {
            this.cookiesperhour.push(this.costmerperhour[i] * this.avgcookie);
        }
        console.log(this.cookiesperhour)
    },
    total: function () {
        for (let i = 0; i < 14; i++) {
            this.totalcookies = this.totalcookies + this.cookiesperhour[i];
        }
    },

}

var tokyo = {
    shopname :'tokyo',
    mincost : 3,
    maxcost : 24,
    avgcookie : 1.2,
    costmerperhour :[],
    cookiesperhour :[],
    totalcookies: 0,
    cost: function () {
        for (let i = 0; i < 14; i++) {
            this.costmerperhour.push(Math.floor(Math.random() * (this.maxcost - this.mincost + 1) + this.mincost));
    
        }
    },
    cookiessales: function () {
        for (let i = 0; i < 14; i++) {
            this.cookiesperhour.push(this.costmerperhour[i] * this.avgcookie);
        }
    },
    total: function () {
        for (let i = 0; i < 14; i++) {
            this.totalcookies = this.totalcookies + this.cookiesperhour[i];
        }
    }

}
var dubai = {
    shopname : 'dubai',
    mincost : 11,
    maxcost : 38,
    avgcookie : 3.7,
    costmerperhour :[],
    cookiesperhour :[],
    totalcookies: 0,
    cost: function () {
       for (let i = 0; i < 14; i++) {
    this.costmerperhour.push(Math.floor(Math.random() * (this.maxcost - this.mincost + 1) + this.mincost));
        }
    },
    cookiessales: function () {
       for (let i = 0; i < 14; i++) {
    this.cookiesperhour.push(this.costmerperhour[i] * this.avgcookie);
        }
    },
    total: function () {
        for (let i = 0; i < 14; i++) {
            this.totalcookies = this.totalcookies + this.cookiesperhour[i];
        }
    }

}
var paris = {
    shopname : 'paris',
    mincost : 20,
    maxcost : 38,
    avgcookie : 2.3,
    costmerperhour :[],
    cookiesperhour :[],
    totalcookies: 0,
    cost: function () {
       for (let i = 0; i < 14; i++) {
    this.costmerperhour.push(Math.floor(Math.random() * (this.maxcost - this.mincost + 1) + this.mincost));
        }
    },
    cookiessales: function () {
       for (let i = 0; i < 14; i++) {
    this.cookiesperhour.push(this.costmerperhour[i] * this.avgcookie);
        }
    },
    total: function () {
        for (let i = 0; i < 14; i++) {
            this.totalcookies = this.totalcookies + this.cookiesperhour[i];
        }
    }

}
var lima = {
    shopname : 'lima',
    mincost : 3,
    maxcost : 24,
    avgcookie : 1.2,
    costmerperhour :[],
    cookiesperhour :[],
    totalcookies: 0,
    cost: function () {
       for (let i = 0; i < 14; i++) {
    this.costmerperhour.push(Math.floor(Math.random() * (this.maxcost - this.mincost + 1) + this.mincost));
        }
    },
    cookiessales: function () {
        for (let i = 0; i < 14; i++) {
            this.cookiesperhour[i] = this.costmerperhour[i] * this.avgcookie;
        }

    },

    total: function () {
      for (let i = 0; i < 14; i++) {
    this.cookiesperhour.push(this.costmerperhour[i] * this.avgcookie);
        }
    }

}

Seattle.cost()
Seattle.cookiessales()
Seattle.total()
console.log(Seattle.costmerperhour)
tokyo.cost()
tokyo.cookiessales()
tokyo.total
dubai.cost()
dubai.cookiessales()
dubai.total
paris.cost()
paris.cookiessales()
paris.total
lima.cost()
lima.cookiessales()
lima.total
 var seattlecity = document.getElementById('seattle');
 var seattleaddres = document.createElement('h4');
 console.log(seattlecity);
 seattlecity.appendChild(seattleaddres);
 seattleaddres.textContent=('seattle');
 var seattlelist = document.createElement('ul');
 seattlecity.appendChild(seattlelist);
for(let i =0;i <15; i++){
    var seattledata=document.createElement('li');
    seattlelist.appendChild(seattledata)
    if (i<6){
        seattledata.textContent=(i+1)+' am:'+Seattle.cookiesperhour[i]+' cookies'
    }else {
        if (i==6){
            seattledata.textContent=(i+6)+' pm: '+Seattle.cookiesperhour[i]+' cookies'
        }else {
            seattledata.textContent=(i-1)+' pm:'+Seattle.cookiesperhour[i]+' cookies'
        }
    }
};
seattledata.textContent='total: '+Seattle.avgcookie+' cookies';
var tokyocity = document.getElementById('tokyo');
 var tokyoaddres = document.createElement('h4');
 console.log(tokyocity);
 tokyocity.appendChild(tokyoaddres);
 tokyoaddres.textContent=('tokyo');
 var tokyolist = document.createElement('ul');
 tokyocity.appendChild(tokyolist);
for(let i =0;i <15; i++){
    var tokyodata=document.createElement('li');
    tokyolist.appendChild(tokyodata)
    if (i<6){
        tokyodata.textContent=(i+1)+' am:'+tokyo.cookiesperhour[i]+' cookies'
    }else {
        if (i==6){
            tokyodata.textContent=(i+6)+' pm: '+tokyo.cookiesperhour[i]+' cookies'
        }else {
            tokyodata.textContent=(i-1)+' pm:'+tokyo.cookiesperhour[i]+' cookies'
        }
    }
};
tokyodata.textContent='total: '+tokyo.avgcookie+' cookies';
var dubaicity = document.getElementById('dubai');
 var dubaiaddres = document.createElement('h4');
 dubaicity.appendChild(dubaiaddres);
 dubaiaddres.textContent=('dubai');
 var dubailist = document.createElement('ul');
 dubaicity.appendChild(dubailist);
for(let i =0;i <15; i++){
    var dubaidata=document.createElement('li');
    dubailist.appendChild(dubaidata)
    if (i<6){
        dubaidata.textContent=(i+1)+' am:'+dubai.cookiesperhour[i]+' cookies'
    }else {
        if (i==6){
            dubaidata.textContent=(i+6)+' pm: '+dubai.cookiesperhour[i]+' cookies'
        }else {
            dubaidata.textContent=(i-1)+' pm:'+dubai.cookiesperhour[i]+' cookies'
        }
    }
};
dubaidata.textContent='total: '+dubai.avgcookie+' cookies';

var pariscity = document.getElementById('paris');
 var parisaddres = document.createElement('h4');
 console.log(pariscity);
 pariscity.appendChild(parisaddres);
 parisaddres.textContent=('paris');
 var parislist = document.createElement('ul');
 pariscity.appendChild(parislist);
for(let i =0;i <15; i++){
    var parisdata=document.createElement('li');
    parislist.appendChild(parisdata)
    if (i<6){
        parisdata.textContent=(i+1)+' am:'+paris.cookiesperhour[i]+' cookies'
    }else {
        if (i==6){
            parisdata.textContent=(i+6)+' pm: '+paris.cookiesperhour[i]+' cookies'
        }else {
            parisdata.textContent=(i-1)+' pm:'+paris.cookiesperhour[i]+' cookies'
        }
    }
};
parisdata.textContent='total: '+paris.avgcookie+' cookies';

var limacity = document.getElementById('lima');
 var limaaddres = document.createElement('h4');
 console.log(limacity);
 limacity.appendChild(limaaddres);
 limaaddres.textContent=('lima');
 var limalist = document.createElement('ul');
 limacity.appendChild(limalist);
for(let i =0;i <15; i++){
    var limadata=document.createElement('li');
    limalist.appendChild(limadata)
    if (i<6){
        limadata.textContent=(i+1)+' am:'+lima.cookiesperhour[i]+' cookies'
    }else {
        if (i==6){
            limadata.textContent=(i+6)+' pm: '+lima.cookiesperhour[i]+' cookies'
        }else {
            limadata.textContent=(i-1)+' pm:'+lima.cookiesperhour[i]+' cookies'
        }
    }
};
limadata.textContent='total: '+lima.avgcookie+' cookies';



