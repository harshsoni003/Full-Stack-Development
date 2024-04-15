const figlet = require("figlet");                        // code copy form npm site(search--->figlet )

figlet("HARSH SONI814", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});