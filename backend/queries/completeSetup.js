import PcSetup from "../models/completeSetup.js";

const getAllSetups = async (req, res, next) => {
  try {
    const getSetups = await PcSetup.find({});
    res.json(getSetups);
    return getSetups;
  } catch (error) {
    console.log(error);
  }
};

const createSetup = async (req, res, next) => {
  try {
    const newSetup = await PcSetup.create(req.body);
    res.status(201).json("Configurazione creata correttamente");
  } catch (error) {
    console.log(error);
  }
};


const getSetupById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const getSetup = await PcSetup.findById(id);
    res.json(getSetup);
    return getSetup;
  } catch (error) {
    console.log(error);
  }
};

export { getAllSetups, createSetup, getSetupById };
