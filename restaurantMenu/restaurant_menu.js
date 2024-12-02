const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
let mainCourseItem = '';
mainCourseItem.forEach((item, index) => {
    mainCourseItem += "<p>Item ${index + 1}: ${item}</p>";
});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItem;