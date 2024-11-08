№ п/п | Задание  | Код
|:-----:| :---------:|:---------:
1 | Создать переменную “item_1” | let item_1;
2 |  Присвоить переменной item_1 цифру 5. | item_1 = 5;
3 |  Вывести в консоль item_1. | console.log(item_1);
4 |  Создать переменную “item_2” | let item_2;
5 |  Присвоить переменной item_2 цифру 3. | item_2 = 3;
6 |  Вывести в консоль item_2. | console.log(item_2);
7 |  Создать переменную “item_3” | let item_3;
8 |  Присвоить переменной item_3 сложение item_1 и item_2. | item_3 = item_1 + item_2;
9 |  Вывести в консоль item_3. | console.log(item_3);
10 |  Создать переменную “item_4” | let item_4;
11 |  Присвоить переменной item_4 строку “Yolochka” | item_4 = "Yolochka";
12 | Вывести в консоль item_4. | console.log(item_4);
13 |  Вывести в консоль сложение item_3 и item_4. | console.log(item_3+item_4);
14 |  Вывести в консоль умножение item_3 и item_4. | console.log(item_3*item_4);
15 |  Создать переменную “item_5” | let item_5;
16 |  Присвоить переменной item_5 переменную item_3 | item_5=item_3;
17 |  Создать переменную item_6. | let item_6;
18 | Создать переменную item_6_type | let item_6_type;
19 |  Присвоить переменной item_6 значение 15 | item_6=15;
20 |  Присвоить переменной item_6_type тип переменной item_6 | item_6_type = typeof item_6;
21 |  Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——   | console.log("——","item_6 ==",item_6+",","item_6_type ==",item_6_type,"——");
22 |  Создать переменную item_7 и в ней преобразовать item_6 в String. | let item_7 = String(item_6)
23 |  Создать переменную item_7_type | let item_7_type;
24 |  Присвоить переменной item_7_type тип переменной item_7 | item_7_type = typeof item_7;
25 | Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——   | console.log("——","item_7 ==",item_7+",","item_7_type ==",item_7_type,"——")
26 |  Создать переменную “age_1” и присвоить ей значение 10 | let age_1 = 10;
27 |  Создать переменную “age_2” и присвоить ей значение 18 | let age_2 = 18;
28 |  Создать переменную “age_3” и присвоить ей значение 60 | let age_3 = 60;
29 |  Создать if в котором будите проверять значение переменной age_1 | 
30 |  Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ” | if (age_1 < age_2){console.log("You don’t have access cause your age is " + age_1 + " It’s less then")}
31 | Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !” | else if (age_1 >= age_2 && age_1 < age_3) {console.log("Welcome !")}
32 |  Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”. | else if (age_1 > age_3) {console.log("Keep calm and look Culture channel")}
33 |  Иначе выводите “Technical work”. | else {console.log("Technical work");}

---  

**Задания с разным количеством звездочек**  

1. Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.  
Пример: const checkAge = function(age) {Ваши преобразования}  
Вывести в консоль результат работы функции с возрастами 17, 18, 61  

        const checkAge = function age(age_1, age_2, age_3) {
            if (age_1 < age_2) {
                console.log("You don’t have access cause your age is " + age_1 + " It’s less than " + age_2);
            } else if (age_1 >= age_2 && age_1 < age_3) {
                console.log("Welcome !");
            } else if (age_1 >= age_3) {
                console.log("Keep calm and look Culture channel");
            } else {
                console.log("Technical work");
                }
            };

            checkAge(17, 18, 61);

2. Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных.   
И если он не Number - кидалась ошибка.
        
        const checkAge = function age(age_1, age_2, age_3) {
            if (typeof age_1 != "number" || typeof age_2 != "number" || typeof age_3 != "number") {
                console.log("Error. Non valid type!");
                return;
            }
            if (age_1 < age_2) {
                console.log("You don’t have access cause your age is " + age_1 + " It’s less than " + age_2);
            } else if (age_1 >= age_2 && age_1 < age_3) {
                console.log("Welcome !");
            } else if (age_1 >= age_3) {
                console.log("Keep calm and look Culture channel");
            } else {
                console.log("Technical work");
                }
        };

        checkAge(17, 18, 61);

3. Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number.    

        const checkAge = function age(age_1, age_2, age_3) {
        age_1 = +age_1;
        age_2 = +age_2;
        age_3 = +age_3;
            if (age_1 < age_2) {
                console.log("You don’t have access cause your age is " + age_1 + " It’s less than " + age_2);
            } else if (age_1 >= age_2 && age_1 < age_3) {
                console.log("Welcome !");
            } else if (age_1 >= age_3) {
                console.log("Keep calm and look Culture channel");
            } else {
                console.log("Technical work");
                }
        };

        checkAge("17", "18", "61");

4. Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке  

        const checkAge = function age(age_1) {
        const age_2 = 18;
        const age_3 = 61;
        age_1 = prompt()("Your age?");
        age_1 = +age_1;
            if (age_1 < age_2) {
                console.log("You don’t have access cause your age is " + age_1 + " It’s less than " + age_2);
            } else if (age_1 >= age_2 && age_1 < age_3) {
                console.log("Welcome !");
            } else if (age_1 >= age_3) {
                console.log("Keep calm and look Culture channel");
            } else {
                console.log("Technical work");
                }
        };

        checkAge();  

---  

Напишите валидационный скрипт используя функции   
1. Скрипт должен на вход принимать строку.  
2. После проверки строки выводить в консоль сообщение, где будет конкретно написано, что не так в введённой строке.  
3. Минимум 5 символов в строке.  
4. Максимум 64 символа в строке.  
5. В строке должны быть буквы.  
6. Должна быть хотя бы одна буква в верхнем регистре.  
7. Должна быть хотя бы одна цифра.  
8. Должна быть хотя бы одна @.  
9. Строка не должна быть пустой.  

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