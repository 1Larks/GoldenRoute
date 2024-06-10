const Express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const operationRouter = require("./Routers/operationRouter.js");
const planeRouter =  require("./Routers/planeRouter.js");

const App = Express();
const PORT = 1337;


App.use(bodyParser.json());
App.use(cors());

App.listen(PORT, () => {
    console.log("Listening on port " + PORT);

    App.use("/operation", operationRouter.router);
    App.use("/plane", planeRouter.router);

});