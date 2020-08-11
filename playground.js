const mydata = {
  "data": [
    {
      "id": 1,
      "username": "manish",
      "password": "instructor",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
      "id": 2,
      "username": "manas",
      "password": "mentor",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
      "id": 3,
      "username": "bhavleen",
      "password": "student",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    },
    {
      "id": 4,
      "username": "vikash",
      "password": "student",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      "id": 5,
      "username": "karan",
      "password": "student",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      "id": 6,
      "username": "amar",
      "password": "student",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }
  ]
}


let sonu = mydata.data.map(obj => {
  console.log(obj.value);
})

console.log(sonu);