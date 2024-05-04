import Express from "express";
import cors from "cors";
import droneRouter from "./Routers/droneRouter.js";
import planeRouter from "./Routers/planeRouter.js";

const App = Express();

const PORT = 7878;

App.use(cors())

App.listen(PORT, () => {
    console.log("Listening on port " + PORT);

    App.use("/drone", droneRouter);
    App.use("/plane", planeRouter);

});