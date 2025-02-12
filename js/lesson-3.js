
const users = [
    {
      id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      id: "249b6175-5c30-44c6-b154-f120923736f5",
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    },
    {
      id: "150b00fb-dd82-427d-9faf-2879ea87c695",
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      skills: ["non", "amet", "ipsum"],
      gender: "male",
      age: 38,
    },
    {
      id: "e1bf46ab-7168-491e-925e-f01e21394812",
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      skills: ["lorem", "veniam", "culpa"],
      gender: "female",
      age: 39,
    },
  ];
  // Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); 
// // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

function getUsersWithEyeColor(users,color){
    const newArray = users.filter((user)=>{
        return user.eyeColor === color;
            
    })
    return newArray;
}

//console.log(getUsersWithEyeColor(users, 'blue'));


// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); 
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
const getUsersWithGender = (users, gender) => {
  return users
   .filter(user => user.gender === gender)
   .map(user => user.name)
}
// console.log(getUsersWithGender(users, 'male'))



// Масив імен всіх користувачів які мають один із зазначеним ім'ям.
// console.log(getUsersWithFriend(users, 'Briana Decker'))); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getUsersWithFriend = (users, friendName)=>{
    return users
    .filter(user => user.friends.includes(friendName))
    .map((user)=>user.name);
    
}
//console.log(getUsersWithFriend(users, 'Briana Decker'));

// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => {
    total += user.balance
    return total
  } ,0 )
  
}
// console.log(calculateTotalBalance(users))



//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

class Client{
    #login;
    #email;

    constructor(login,email){
        this.#login = login;
        this.#email =email;
    }
    set login(login){
        this.#login = login;
     }
    set email(email){
        this.#email = email;
    }
    get login(){
        return this.#login;
         
    }
    get email(){
        return this.#email;
    }
}

const clientClas = new Client('Taras','taras@gmail.com');
clientClas.login = 'Ivan';
//console.log(clientClas.login);

//console.log(clientClas);

// Напиши клас Notes який управляє колекцією нотаток у приватній властивості items.
//Нотатка це об'єкт із властивостями id, text і priority
//Додай класу статичну властивість Priopity,
//у якій зберігатиметься об'єкт із пріоритетами HIGHT, LOW.
//Додай методи addNote(note), removeNote(id) updatePriority(id, newPriority) getMotes()

class Notes {
  #items
  constructor() {
    this.#items = [];
  }
  static Priority = {
    HIGHT:"Hight",
   LOW:"Low",
  }
  addNote(note) {
   this.#items.push(note)
  }
  removeNote(id) {
    this.#items = this.#items.filter(note => note.id !== id)
  }
  updatePriority(id, newPriority) {
   const current =  this.#items.find(note => note.id === id)
    if (current) {
      current.priority = newPriority
    }

  }
}
const note = {
    id: 3
}
