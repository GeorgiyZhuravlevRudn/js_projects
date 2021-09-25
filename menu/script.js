const menu = [
{
        id:1,
        title:"French Chicken",
        price: 12.50,
        img:"img/menu-item.jpeg",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        category: "Lunch",
},
{
        id:2,
        title:"Burger",
        price: 5.00,
        img:"img/burger.jpg",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        category: "Lunch",
},
{
        id:3,
        title:"Fried Chicken",
        price: 10.99,
        img:"img/fried-chicken.jpg",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        category: "Breakfast",
},
{
        id:4,
        title:"Italian Belissimo",
        price: 22.22,
        img:"img/pizza.jpeg",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        category: "LowCarb",
},
{
        id:5,
        title:"French Chicken",
        price: 12.50,
        img:"img/menu-item.jpeg",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        category: "LowCarb",
},
{
        id:6,
        title:"Burger",
        price: 5.00,
        img:"img/burger.jpg",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        category: "LowCarb",
},
{
        id:7,
        title:"Fried Chicken",
        price: 10.99,
        img:"img/fried-chicken.jpg",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        category: "Breakfast",
},
{
        id:8,
        title:"Italian Belissimo",
        price: 22.22,
        img:"img/pizza.jpeg",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        category: "LowCarb",
},
];

const Items=document.querySelector('.items');
const Buttons=document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function(){
        console.log("check check");
        displayMenuItems(menu);
        displayButtons();
}
);
function displayMenuItems(menuItems)
{
        let displayItems = menuItems.map(function(item){ // displays all items 
                //console.log(item);
                //return `<h1>${item.title}</h1>`;//returns obj.value
                return `<arcticle class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title}>
                <div class="item-info">
                          <header>
                                  <h4 class="item-name">${item.title}</h4>
                                  <h4 class="item-price">$${item.price}</h4>        
                          </header>
                          <p class="item-description">
                          ${item.description}
                        </p>
                </div>
                </arcticle>`;
        })
        displayItems=displayItems.join('');
        Items.innerHTML=displayItems;
}

function displayButtons()
{
        const categories = menu.reduce(function(val,item)//categories=val["All",etc.]
        {
                if(!val.includes(item.category))
                        val.push(item.category);
                return val;
        },
        ["All"]
        ); // array of all categories
        console.log(categories);
        const display = categories.map(function(category)
        {
                return `<button type="button" class="filter-btn" data-id=${category}>
                ${category} 
                </button>`
        }).join('');//join code

        Buttons.innerHTML=display;

        const Fbtns= document.querySelectorAll('.filter-btn');//place in the end, to have an access
        Fbtns.forEach(function(btn)
        {
                btn.addEventListener('click', function(event)
                {
                        console.log(event.currentTarget.dataset.id);//dataset- we can add <data-smth="vlue">
                        const category= event.currentTarget.dataset.id;

                        const menuCategory=menu.filter(function(menuItem)
                        {
                                if (menuItem.category===category)
                                        return menuItem;
                        
                        })
                        if(category==='All')
                                displayMenuItems(menu);
                        else
                                displayMenuItems(menuCategory);
                })
        })
}

