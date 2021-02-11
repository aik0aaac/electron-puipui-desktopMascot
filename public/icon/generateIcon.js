const icongen = require("icon-gen");

icongen("./public/icon/app.svg", "./public/icon/generatedIcon", {
  report: true,
})
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.error(err);
  });
