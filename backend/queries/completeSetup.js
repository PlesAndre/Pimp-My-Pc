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

const updateSetup = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateSet = await PcSetup.findByIdAndUpdate(id, req.body);
    res.status(200).json("Configurazione aggiornata correttamente");
  } catch (error) {
    console.log(error);
  }
};

const deleteSetup = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteSet = await PcSetup.findByIdAndDelete({ _id: id });
    res.status(200).json("Configurazione cancellata corretamente");
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

export { getAllSetups, createSetup, updateSetup, deleteSetup, getSetupById };
