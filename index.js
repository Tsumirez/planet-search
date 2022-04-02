const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream("./cumulative_2022.04.02_04.42.57.csv").
on("data", (data) => {
    results.push(data);
  }
)
.on("error", (err) => {
    console.log(err);
})
.on("end", () => {
  console.log(results);
  console.log("done");
});
