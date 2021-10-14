import axios, { AxiosResponse } from "axios";
import moment from "moment";

// Daily Forecast 16 days
// Climatic Forecast 30 days <- untuk yang ini tidak bisa digunakan padahal udah subscriber mungkin karena limit subscriber

axios
  .post(
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fd500b81fcd74cb5b304b00539a8a6f0",
    {},
    {}
  )
  .then((res: AxiosResponse<any>) => {
    const custom = [];
    res.data.list.map((x) => {
      if (
        !(parseInt(x.dt_txt.split("-")[2].split(" ")[0]) / 2)
          .toString()
          .split(".")[1]
      ) {
        custom.push({
          ...x,
          dt_txt: `${moment(x.dt_txt).format("ddd, D MMM YYYY")} ${
            x.wind.speed
          }ªC`,
        });
      }
      return x;
    });
    console.log(custom);
  });
