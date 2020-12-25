const foods = [
    {
        name: `Apples`,
        month: ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
        photo: `https://images.pexels.com/photos/2966150/pexels-photo-2966150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Mushrooms`,
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        photo: `https://images.pexels.com/photos/6033778/pexels-photo-6033778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Potatoes`,
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        photo: `https://images.pexels.com/photos/4110462/pexels-photo-4110462.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Mung Beans`,
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        photo: `https://images.pexels.com/photos/5988202/pexels-photo-5988202.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Blueberries`,
        month: ['July', 'August'],
        photo: `https://images.pexels.com/photos/2539177/pexels-photo-2539177.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Cantaloupes`,
        month: ['August'],
        photo: `https://images.pexels.com/photos/4051441/pexels-photo-4051441.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Cranberries`,
        month: ['September', 'October', 'November', 'December'],
        photo: `https://images.pexels.com/photos/6087130/pexels-photo-6087130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Peaches`,
        month: ['July', 'August', 'September'],
        photo: `https://images.pexels.com/photos/1520624/pexels-photo-1520624.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Pears`,
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        photo: `https://images.pexels.com/photos/5645133/pexels-photo-5645133.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Raspberries`,
        month: [ 'July', 'August', 'September'],
        photo: `https://images.pexels.com/photos/326131/pexels-photo-326131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Strawberries`,
        month: ['June', 'July', 'August', 'September', 'October'],
        photo: `https://images.pexels.com/photos/1998893/pexels-photo-1998893.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Watermelons`,
        month: [ 'August', 'September', 'October'],
        photo: `https://images.pexels.com/photos/1070858/pexels-photo-1070858.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Asparagus`,
        month: ['May'],
        photo: `https://images.pexels.com/photos/4050984/pexels-photo-4050984.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Cucumbers`,
        month: ['June', 'July', 'August'],
        photo: `https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Corns`,
        month: ['July', 'August', 'September', 'October'],
        photo: `https://images.pexels.com/photos/872483/pexels-photo-872483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Tomatoes`,
        month: ['September', 'October'],
        photo: `https://images.pexels.com/photos/2718416/pexels-photo-2718416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Pumpkins`,
        month: ['September', 'October', 'November'],
        photo: `https://images.pexels.com/photos/5634600/pexels-photo-5634600.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Radishes`,
        month: ['June', 'July', 'August', 'September'],
        photo: `https://images.pexels.com/photos/4963542/pexels-photo-4963542.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Sprouts`,
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        photo: `https://images.pexels.com/photos/4057823/pexels-photo-4057823.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    },
    {
        name: `Spinach`,
        month: ['May', 'June', 'July', 'August', 'September', 'October'],
        photo: `https://images.pexels.com/photos/5940111/pexels-photo-5940111.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    }
    
]
const allMonth = document.querySelectorAll('.month');
const slides = document.querySelector('.swiper-wrapper');
const homeCalendar = document.getElementsByName('home-calendar');

let shuffledFood

homeCalendar.addEventListener('click', accessFood(foods,"January"))

function clickMonth(){
    while (slides.firstChild){
        slides.removeChild(slides.firstChild);
    }
    var selectedMonth = document.querySelector('input[name="input-month"]:checked').value;
    shuffledFood = foods.sort(() => Math.random() - .5);
    accessFood(shuffledFood, selectedMonth);
}

function accessFood(food, selected) {
    food.forEach((foodItem) => {
        if (foodItem.month.indexOf(selected) !== -1) {
            const li = document.createElement('li');
            li.setAttribute('class', 'swiper-slide');
            const img = document.createElement('img');
            img.setAttribute('class','fruit-photo');
            img.setAttribute('src', foodItem.photo);
            img.setAttribute('alt', foodItem.name);
            const h3 = document.createElement('h3');
            h3.setAttribute('class', 'fruit-handwriting');
            h3.textContent = `${foodItem.name}`;
            const h5 = document.createElement('h5');
            h5.textContent = 'Growing Season:';
            const p = document.createElement('p');
            p.setAttribute('class', 'fruit-month');
            p.textContent = `${foodItem.month[0]} - ${foodItem.month[foodItem.month.length - 1]}`
            slides.appendChild(li);
            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(h5);
            li.appendChild(p);
        }
    });
};





