/*Task 1.

Написать функцию, которая найдет и выведет в консоль юзеров,
    зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt*/

const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];
console.log(users.filter(Date => Date.registrationDate === "09.10.2021" || Date.registrationDate === "10.10.2021"))

/*Task 2*

Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).

Дан массив объектов. Каждый объект является идентификационной карточкой человека.
    Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.*/

const ID =
    [{
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
    {
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    },
    {
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    },
    {
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    }
    ];

let unique = Array.from(new Set(ID.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));

console.log(unique)

/*Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например,
модуля fs. для дальнейшего использования в функции, описанной в задании*/

const fs = require('fs')
let json_data = fs.readFileSync('task2.json')
const people = JSON.parse(json_data)
let unique_1 = Array.from(new Set(people.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
console.log(unique_1)

/*Task 3**
В файле task3.txt найдете структуру компании и задания, необходимые выполнить.
*/

const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
//     Для предприятия посчитать сумму всех сотрудников во всех отделах.

let sum = 0
//объявляем функцию, которая позволит склонять падежи в зависимости от поступающих значений
function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100
    let n1 = n % 10
    if (n === 0) {return text_forms[3]}
    if (n > 10 && n < 20) {return text_forms[2]}
    if (n1 > 1 && n1 < 5) {return text_forms[1]}
    if (n1 === 1) {return text_forms[0]}
    return text_forms[2]
}
for (let i = 0; i < enterprises.length; i++)
{
    //Суммируем количество сотрудников на предприятиях
    for (let k = 0; k< enterprises[i].departments.length; k++)
    {
        sum += enterprises[i].departments[k].employees_count
    }

    //Выводим число сотрудников для предприятий
    console.log(declOfNum(sum,
        [enterprises[i].name + " (" + sum + " сотрудник)",
        enterprises[i].name + " (" + sum + " сотрудника)",
        enterprises[i].name + " (" + sum + " сотрудников)",
        enterprises[i].name +  " (нет сотрудников)"]))

    //Выводим число струдников для отделов
    for (let k = 0; k< enterprises[i].departments.length; k++)
    {
        let empDepCount = enterprises[i].departments[k].employees_count
        let empDepNames = enterprises[i].departments[k].name

        console.log(declOfNum(empDepCount,
            ["- " + empDepNames + " (" + empDepCount + " сотрудник)",
            "- " + empDepNames + " (" + empDepCount + " сотрудника)",
            "- " + empDepNames + " (" + empDepCount + " сотрудников)",
            "- " + empDepNames + " (нет сотрудников)"]))
    }
    sum = 0
}

// 2. Написать функцию, которая будет принимать 1 аргумент
// (id отдела или название отдела и возвращать название предприятия, к которому относится)

function get_Enterprise_Name (name_1)
{
    if (typeof name_1 === "number")
    {
        //проверка перебором из первого задания, есть ли такой номер id отдела
        for (let i = 0; i < enterprises.length; i++)
        {
            for (let k = 0; k< enterprises[i].departments.length; k++)
            {
                if (name_1 === enterprises[i].departments[k].id)
                {
                    return enterprises[i].name
                }
            }
        }
    }
    else if (typeof name_1 === "string")
    {
        for (let i = 0; i < enterprises.length; i++)
        {
            for (let k = 0; k< enterprises[i].departments.length; k++)
            {
                if (name_1 === enterprises[i].departments[k].name)
                {
                    return enterprises[i].name
                }
            }
        }
    }
    else return "Проверьте вводимые значения"
}

console.log(get_Enterprise_Name("Отдел аналитики"))

//3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

function Add_New_Enterprise (New_Enterprise)
{
    let New_Enterprise_Obj =
        {
            id: enterprises.slice(-1)[0].departments.slice(-1)[0].id + 1,
            //ЧТО БУДЕТ, ЕСЛИ НЕТ ОТДЕЛОВ СОВСЕМ?
            name: New_Enterprise,
            departments: []
        }
    enterprises.push(New_Enterprise_Obj)
    return enterprises
}

console.log(Add_New_Enterprise("Предприятие 4"))

//4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

function Add_New_Department (Enterprise_ID, New_Department)
{
    let New_Department_Obj =
        {
            id: "ТУТ ПОДСЧИТЫВАЕТСЯ ПОСЛЕДНИЙ АЙДИШНИК И ПРИСВАИВАЕТСЯ НОВЫЙ",
            name: New_Department,
            employees_count: 0,
        }
        //TODO ЗДЕСЬ НУЖНО ВЫБИРАТЬ ПРЕДПРИЯТИЕ И ПУШИТЬ В САМЫЙ ЕГО КОНЕЦ
    enterprises.push(New_Department_Obj)
}

console.log(Add_New_Department(11, "Новый отдел"))

//5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

function Edit_Enterprise_Name (Enterprise_ID, New_Enterprise_Name)
{

}

console.log(Edit_Enterprise_Name(2, "Реданская армия"))

//6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

function Edit_Department_Name (Department_ID, New_Department_Name)
{

}

console.log(Edit_Department_Name(2, "Отряд Радовида"))

//7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

function Remove_Enterprise (Enterprise_ID)
{

}

console.log(Remove_Enterprise(2))

//8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

function Remove_Department (Department_ID)
{

}

console.log(Remove_Department(2))

//9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

function Employee_Move (ID_first, ID_second)
{

}

console.log(Employee_Move(1,2))

/*Task 4****

В файле task4.txt вы найдете разноуровневый массив объектов. Очень похожий на массив из 3го задания,
только количество вложенностей может быть не ограничено.


    Задание: написать функцию:

    Функция строит древовидный список компании.
    При ее вызове в консоль должен вывестись список подразделений компании
    с указанием количества сотрудников и с соблюдением вложенности подразделений.
 */

const company = [
    {
        id: 1,
        name: "Компания",
        parent: null,
        users_count: 10,
        children: [
            {
                id: 2,
                name: "Отдел тестирования",
                parent: 1,
                users_count: 7,
                children: [
                    {
                        id: 2,
                        name: "Тестирование Web",
                        parent: 2,
                        users_count: 5,
                    },
                    {
                        id: 3,
                        name: "Тестирование Mobile",
                        parent: 2,
                        users_count: 0,
                    },
                ]
            },
            {
                id: 4,
                name: "Отдел маркетинга",
                parent: 1,
                users_count: 30,
            },
            {
                id: 5,
                name: "Администрация",
                parent: 1,
                users_count: 25,
                children: [
                    {
                        id: 6,
                        name: "Бухгалтерия",
                        parent: 5,
                        users_count: 10,
                    },
                    {
                        id: 7,
                        name: "Менеджмент",
                        parent: 5,
                        users_count: 15,
                        children: [
                            {
                                id: 8,
                                name: "Подраздел менеджмента 1",
                                parent: 7,
                                users_count: 5,
                            },
                            {
                                id: 9,
                                name: "Подраздел менеджмента 2",
                                parent: 7,
                                users_count: 10,
                            }
                        ]
                    },
                    {
                        id: 10,
                        name: "HR",
                        parent: 5,
                        users_count: 1,
                    }
                ]
            },
        ]
    }
]

// function Tree(){
// return "список подразделений компании с указанием количества сотрудников и с соблюдением вложенности подразделений"
// }
//
// console.log(Tree())