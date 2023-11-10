let cities = {
    name : null,
    image : null,
    ID : null,
    arrayOfCities : null,
    arrayOfData : [{
        name : "Geneva",
        image : "img/cities/geneva.jpg",
    },{
        name : "Davos",
        image : "img/cities/davos.jpg",
    },{
        name : "Interlaken",
        image : "img/cities/interlaken.jpg",
    },{
        name : "Bern",
        image : "img/cities/bern.jpg",
    },{
        name : "Lugano",
        image : "img/cities/lugano.jpg",
    },{
        name : "Lausanne",
        image : "img/cities/lausanne.jpg",
    },{
        name : "Montreux",
        image : "img/cities/montreux.jpg",
    },{
        name : "Lucerne",
        image : "img/cities/lucerne.jpg",
    },{
        name : "Zurich",
        image : "img/cities/zurich.jpg",
    }],

    setCities : function(){
        this.arrayOfCities = document.querySelectorAll('.table__element');
        for (let i = 0; i < this.arrayOfCities.length; i++) {
            this.ID = i;
            this.takeData(this.arrayOfCities[i]);
        }
    },
    takeData: function(cityID){
        this.name = cityID.querySelector('.element__heading');
        this.image = cityID.querySelector('.element__background');

        this.changeData(this.name, this.image, this.ID);
    },
    changeData : function(name, image, index){
        name.innerHTML = this.arrayOfData[index].name;
        image.style.backgroundImage = `url(${this.arrayOfData[index].image})`;
    }
}
cities.setCities();