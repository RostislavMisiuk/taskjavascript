const stih = `Унылая пора! Очей очарованье!
Приятна мне твоя прощальная краса —
Люблю я пышное природы увяданье,
В багрец и золото одетые леса.
А. С. Пушкин`;
alert(stih);
const stih2= `В тени сикомора бедняжка сидела, вздыхала,
Пойте про иву зеленую!
Рука на груди, голова на коленях лежала,
Пойте про иву, про иву, про иву!
Струи свежих вод перед ней ее пени роптали,
Пойте про иву, про иву, про иву!
Горючие капали слезы, и камни смягчали,
Пойте про иву, про иву, про иву!
Пойте: должна быть венком мне зеленая ива!
Шекспир`
alert(stih2);
let menu = prompt("Выберите салат");
let menu1 = prompt('Выберите первое блюдо');
let menu2 = prompt(`Второе блюдо`);
let menu3 = prompt(`Десерт`);
const allmenu = `Вы выбрали: 
${menu}-12.5грн.
${menu1}-18.2грн.
${menu2}-24.3грн.
${menu3}-10.5грн.
Итого:65.5грн.`
alert(allmenu);
let selectmoney = prompt("Введите вашу сумму в гривнях");
let courseeuro = prompt("Введите курс евро");
alert(`У вас выходит `+Math.floor(selectmoney/courseeuro) + ` евро`);
let selectmoneygrn = prompt("Введите вашу сумму в гривнях");
let coursedollar = prompt("Введите курс доллара");
alert(`У вас выходит `+Math.floor(selectmoneygrn/coursedollar) + ` доллара`);
let firstside = prompt("Введите 1 сторону");
let secondside = prompt("Введите 2 сторону");
alert(`Площадь вашего прямоугольника ` + (firstside/100) * (secondside/100)+` кв.м`);
alert(`Периметр вашего прямоугольника `+ ((firstside*2) + (secondside*2)/1000)+` м`);