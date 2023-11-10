let card = {
    arrayOfCards : document.querySelectorAll(".card"),
    rating : {
        ratingActive : null,
        ratingValue : null, 
        ratingActiveWidth : null,
    },
    cardElements : {
        image : null,
        type : null,
        article : null,
        time : null,
        tripRating : null,
        reviews : null,
        price : null,
    },
    standartValues : {
        cardNumber : 0,
    },
    arrayOfCardsText : [
        {
            image : "Cards/img/interlaken.jpg",
            type : "Day trip",
            article : "From Zurich: Day-Trip to Interlaken",
            time : "9 hours",
            tripRating : 4.1,
            reviews : 21,
            price : "2,200",
        },{
            image : "Cards/img/lugano.jpg",
            type : "Gudided tour",
            article : "Express Walk of Lugano with a Local",
            time: "1 hour",
            tripRating : 4.8,
            reviews : 16,
            price : "1,054",
        },{
            image : "Cards/img/swiss_riviera.jpg",
            type : "Day trip",
            article : "From Lausanne: Swiss Riviera Tour",
            time : "11 hours",
            tripRating : 4.4,
            reviews : 33,
            price : "3,487",
        }
    ],
    setCard : function(cardID){
        this.standartValues.cardNumber = cardID.id - 1;
        //image
        this.cardElements.image = cardID.querySelector(".card__image");
        //type
        this.cardElements.type = cardID.querySelector(".card__type");
        //article
        this.cardElements.article = cardID.querySelector(".card__article");
        //time
        this.cardElements.time = cardID.querySelector(".card__time");
        //rating
        this.rating.ratingActive = cardID.querySelector(".rating__active");
        this.rating.ratingValue = cardID.querySelector(".rating__value");
        //reviews
        this.cardElements.reviews = cardID.querySelector(".rating__reviews");
        //price
        this.cardElements.price = cardID.querySelector(".card__price");
        this.changeCardData(this.cardElements.image, this.cardElements.type, this.cardElements.article, this.cardElements.time, this.rating.ratingValue, this.cardElements.reviews,  this.cardElements.price, this.standartValues.cardNumber);
    },
    changeCardData: function(image,type,article,time,tripRating,reviews,price, index){
        image.src = this.arrayOfCardsText[index].image;
        type.innerHTML = this.arrayOfCardsText[index].type;
        article.innerHTML = this.arrayOfCardsText[index].article;
        time.innerHTML = this.arrayOfCardsText[index].time;
        tripRating.innerHTML = this.arrayOfCardsText[index].tripRating;
        reviews.innerHTML = `(${this.arrayOfCardsText[index].reviews} reviews)`;
        price.innerHTML = `From ${this.arrayOfCardsText[index].price} Kč per person`;
        this.setRating(Number(tripRating.innerHTML));
    },

    setRating : function(value){
        //set rating active width
        this.rating.ratingActiveWidth = value / 0.131;
        this.rating.ratingActive.style.width = `${this.rating.ratingActiveWidth}%`;
    }
}

card.setCard(card.arrayOfCards[0]);
card.setCard(card.arrayOfCards[1]);
card.setCard(card.arrayOfCards[2]);







// const ratings = document.querySelectorAll(".card__rating");
// if(ratings.length > 0){
//     initRatings();
// }
// //основная функция
// function initRatings(){
//     let ratingActive, ratingValue;
//     // Бегаем по всем рейтингам на странице
//     for(let index = 0; index < ratings.length; index++){
//         const rating = ratings[index];
//         initRating(rating);
//     }
//     //Инициализируем конкретный рейтинг
//     function initRating(rating){
//         initRatingVars(rating);
//         setRatingActiveWidth();
//     }
//     //Инициализируем переменные
//     function initRatingVars(rating){
//         ratingActive = rating.querySelector('.rating__active');
//         ratingValue = rating.querySelector('.rating__value');
//     }
//     //Изменяем ширину активных звёзд
//     function setRatingActiveWidth(index = ratingValue.innerHTML){
//         const ratingActiveWidth = index / 0.05;
//         ratingActive.style.width = `${ratingActiveWidth}%`;
//     }
// }