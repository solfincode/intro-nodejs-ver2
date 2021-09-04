const axios = require("axios");

const url = "https://reqres.in/api/users?page=2";

const userArr = [];
const fetchData = axios.get(url);

fetchData
  .then((res) => {
    const userArr = res.data.data;
    console.log(userArr);
  })
  .catch((err) => console.log(err));
