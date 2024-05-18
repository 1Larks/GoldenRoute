import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import operationRouter from "./Routers/operationRouter.js";
import planeRouter from "./Routers/planeRouter.js";

const App = Express();
const PORT = 7878;


App.use(bodyParser.json());
App.use(cors());

App.listen(PORT, () => {
    console.log("Listening on port " + PORT);

    App.use("/operation", operationRouter);
    App.use("/plane", planeRouter);

});