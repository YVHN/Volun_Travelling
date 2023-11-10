let slider = {
    //image
    slide: document.querySelector('.image'),
    image: {
        imageHeading: document.querySelector('.image__heading'),
        imageDescription: document.querySelector('.image__text'),
        imageCircle: document.querySelectorAll('.circle'),
        imageLink: document.querySelector('.button-link'),
    },
    //array with slides
    arrayOfSlides: [],
    arrayOfSlideText: [{
        background: "Slider/img/ChamonixBackground.jpg",
        heading: "Chamonix Full-Day Ski Trip",
        text: "Experience skiing in the French Alps, in the famous resort of Chamonix. It's a fabulous destination for beginners and advanced skiers. With your ski pass, you will have access to 3 different resorts.",
        link: "#Chamonix-trip",
    }, {
        background: "Slider/img/GenevaBackground.jpg",
        heading: "Geneva: 50-Minute Lake Geneva Cruise",
        text: "Discover the beauty of Lake Geneva’s shores on a fascinating sightseeing cruise. Take in glorious views of the Swiss Alps from the water and learn about local landmarks with the help of an audioguide.",
        link: "#Geneva-trip",
    }, {
        background: "Slider/img/BernBackground.jpg",
        heading: "Bern: 90-Minute Stroll Through the Old Town",
        text: "Explore the UNESCO World Heritage-listed Old Town of Bern.During a guided walk you’ll have the opportunity to admire its fountains, towers, quaint streets, arcades and more.Learn about the city’s 800 years of history from a local guide.",
        link: "#Bern-trip",
    }, {
        background: "Slider/img/BaselBackground.jpg",
        heading: "Basel City Center Private Walking Tour",
        text: "Spend a half-day in Basel with a private tour guide.Gain a complete overview of the spots of the city center on this 4-hour walking tour. Cross the river and explore both Kleinbasel and Grossbasel districts.",
        link: "#Basel-trip",
    }
],
    //move buttons
    buttons: {
        nextSlide: document.querySelector('.right-arrow'),
        previousSlide: document.querySelector('.left-arrow'),
    },
    //values
    standartValues: {
        currentSlide: 0,
        currentArrow: null,
        result: null,
    },
    //start carousel
    start: function () {
        let that = this;
        //add Event listeners
        this.buttons.nextSlide.addEventListener('click', function (event) {
            that.slideAction(event);
        });
        this.buttons.previousSlide.addEventListener('click', function (event) {
            that.slideAction(event);
        });
        //заполнение кругов листенарими
        for(let i = 0; i < this.image.imageCircle.length;){
            this.image.imageCircle[i].addEventListener('click', function(event){
                that.changeCircle(event.currentTarget.id - 1);
            });
            i++;
        }
        this.buttons.previousSlide.disabled = false;
        //текущий слайд
        this.setSlide(0);
        //уставнкоа на первый кружок активного класса
        this.image.imageCircle[0].classList.add('circle-active');
    },
    changeCircle : function(value){
        this.setSlide(value);

        for(let i = 0; i < this.image.imageCircle.length; i++){
            if(i == value){
                this.image.imageCircle[i].classList.add('circle-active');
            } else {
                this.image.imageCircle[i].classList.remove('circle-active');
            }
        }
    },
    // set slide
    setSlide: function(slideID){
        //set image
        this.slide.src = this.arrayOfSlideText[slideID].background;
        //set image text
        this.image.imageHeading.innerText = this.arrayOfSlideText[slideID].heading;
        this.image.imageDescription.innerHTML = this.arrayOfSlideText[slideID].text;
        //set button link
        this.image.imageLink.href = this.arrayOfSlideText[slideID].link;
    },
    //проверка слайда выходит ли он за границы
    checkBorders: function () {
        if (this.standartValues.currentSlide == this.arrayOfSlideText.length) {
            this.standartValues.currentSlide = 0;
            return false;
        } else if (this.standartValues.currentSlide < 0) {
            this.standartValues.currentSlide = this.arrayOfSlideText.length - 1;
            return false;
        } else {
            return true;
        }
    },
    slideAction: function (event) {
        if (event.srcElement.innerText == "<") {
            this.standartValues.currentSlide--;
        } else if (event.srcElement.innerText == ">") {
            this.standartValues.currentSlide++;
        }

        this.standartValues.result = this.checkBorders();
        if (this.standartValues.result) {
            this.setSlide(this.standartValues.currentSlide);
        }

        this.changeCircle(this.standartValues.currentSlide);
    },
    changeCircle : function(value){
        this.setSlide(value);
        this.standartValues.currentSlide = value;

        for(let i = 0; i < this.image.imageCircle.length; i++){
            if(i == value){
                this.image.imageCircle[i].classList.add('circle-active');
            } else {
                this.image.imageCircle[i].classList.remove('circle-active');
            }
        }
    },
}
