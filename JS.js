// Задание 1
//ШАГИ 1-25:

// let item_1;
// item_1 = 5;
// console.log(item_1);

// let item_2;
// item_2 = 3;
// console.log(item_2);

// let item_3;
// item_3 = item_1 + item_2;
// console.log(item_3);

// let item_4;
// item_4 = "Yolochka";
// console.log(item_4);

// console.log(item_3+item_4);

// console.log(item_3*item_4);

// let item_5;
// item_5=item_3;

// let item_6;
// item_6=15;

// let item_6_type;

// item_6_type = typeof item_6;

// console.log("——","item_6 ==",item_6+",","item_6_type ==",item_6_type,"——");

// let item_7 = String(item_6);

// let item_7_type;
// item_7_type = typeof item_7;

// console.log("——","item_7 ==",item_7+",","item_7_type ==",item_7_type,"——")


// ШАГИ 26-33:

// let age_1 = 10;
// let age_2 = 18;
// let age_3 = 60;

// if (age_1 < age_2){
//     console.log("You don’t have access cause your age is " + age_1 + " It’s less then");
// } else if (age_1 >= age_2 && age_1 < age_3) {
//     console.log("Welcome !");
// } else if (age_1 > age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work");
//}


// Задача 1*
// const checkAge = function age(age_1, age_2, age_3) {
//     if (age_1 < age_2) {
//         console.log("You don’t have access cause your age is " + age_1 + " It’s less than " + age_2);
//     } else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log("Welcome !");
//     } else if (age_1 >= age_3) {
//         console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work");
//         }
// };

// checkAge(17, 18, 61);



// Задача 2*
// const checkAge = function age(age_1, age_2, age_3) {
//     if (typeof age_1 != "number" || typeof age_2 != "number" || typeof age_3 != "number") {
//         console.log("Error. Non valid type!");
//         return;
//     }
//     if (age_1 < age_2) {
//         console.log("You don’t have access cause your age is " + age_1 + " It’s less than " + age_2);
//     } else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log("Welcome !");
//     } else if (age_1 >= age_3) {
//         console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work");
//         }
// };

// checkAge(17, 18, 61);


// //Задача 3**
// const checkAge = function age(age_1, age_2, age_3) {
// age_1 = +age_1;
// age_2 = +age_2;
// age_3 = +age_3;
//     if (age_1 < age_2) {
//         console.log("You don’t have access cause your age is " + age_1 + " It’s less than " + age_2);
//     } else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log("Welcome !");
//     } else if (age_1 >= age_3) {
//         console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work");
//         }
// };

// checkAge("17", "18", "61");

// //Задача 4**
// const checkAge = function age(age_1) {
// const age_2 = 18;
// const age_3 = 61;
// age_1 = prompt();
// age_1 = +age_1;
//     if (age_1 < age_2) {
//          console.log("You don’t have access cause your age is " + age_1 + " It’s less than " + age_2);
//     } else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log("Welcome !");
//     } else if (age_1 >= age_3) {
//          console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work");
//         }
//     };

// checkAge();


// ЗАДАНИЕ 2

// Напишите валидационный скрипт используя функции 
//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой



function isNotEmpty(value) {
    return value.length > 0;
};

function isMinLength(value, minLength) {
    return value.length >= minLength;
};

function isMaxLength(value, maxLength) {
    return value.length <= maxLength;
};

function containLetters(value) {
    const regex = /[a-zA-Z]/;
    return regex.test(value);
};

function containUppercase(value) {
    const regex = /[A-Z]/;
    return regex.test(value);
};

function containDigit(value) {
    const regex = /\d/;
    return regex.test(value);
};

function containAtsymbols(value) {
    const regex = /@/;
    return regex.test(value);
};

const validator = function(yourString) {

    if (!isNotEmpty(yourString)) {
        console.log("Строка не должна быть пустой");
        return;
    };

    if (!isMinLength(yourString, 5)) {
        console.log("Строка должна быть не менее 5 символов");
        return;
    };

    if (!isMaxLength(yourString, 64)) {
        console.log("Строка должна быть не более 64 символов");
        return;
    };

    if (!containLetters(yourString)) {
        console.log("Строка должна содержать буквы");
        return;
    };

    if (!containUppercase(yourString)) {
        console.log("Строка должна содержать хотя бы 1 букву в верхнем регистре");
        return;
    };

    if (!containDigit(yourString)) {
        console.log("Строка должна содержать хотя бы 1 цифру");
        return;
    };

    if (!containAtsymbols(yourString)) {
        console.log("Строка должна содержать хотя бы 1 символ '@'");
        return;
    };

};   

validator("Oleg");