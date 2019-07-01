import Axios from "axios";

const weatherAPI = Axios.create({
  baseURL:
    "http://api.meteomatics.com/2019-07-01T15:30:00ZP2D:PT1H/t_2m:C/50,10/json?model=mix"
});

function getWeather() {
  weatherAPI
    .get()
    .then(apiRes => {
      console.log(apiRes);
    })
    .catch(err => console.log(err));
}
