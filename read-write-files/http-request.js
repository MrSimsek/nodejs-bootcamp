/**
 * Sending a GET request
 */
const https = require("https");
const fs = require("fs");

const options = {
  hostname: "api.spacexdata.com",
  path: "/v3/info",
  method: "GET"
};

https
  .request(options, response => {
    // console.log(`statusCode: ${response.statusCode}`);

    let dataString = "";

    response.on("data", data => {
      dataString += data;
    });

    response.on("end", () => {
      const dataJSON = JSON.parse(dataString);
      fs.writeFileSync('./spacex.json', JSON.stringify(dataJSON));
    });
  })
  .end();
  
