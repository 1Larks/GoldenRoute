import {test} from "../Services/droneService.js"

const testHandler = (req, res) => {
    const string = test();
    return res.json(string);
};

const testNumHandler = (req, res) => {
    return res.json(`the number i got is ${req.params.number}`)
};

const fetchCoords = (req, res) => {
    return res.json(`The coords are: ${req.params.coords1} ${req.params.coords2}`)
};

export {testHandler, testNumHandler, fetchCoords};