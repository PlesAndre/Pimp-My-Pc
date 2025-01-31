import { get } from "mongoose";
import Components from "../models/singleComponent.js";

const getAllComponents = async (req, res, next) => {
  try {
    const getComponents = await Components.find({});
    res.json(getComponents);
    return getComponents;
  } catch (error) {
    console.log(error);
  }
};

const createComponent = async (req, res, next) => {
  try {
    const newComponent = await Components.create(req.body);
    res.status(201).json("Componente aggiunto correttamente");
  } catch (error) {
    console.log(error);
  }
};

const updateComponent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateComp = await Components.findByIdAndUpdate(id, req.body);
    res.status(200).json("Componente aggiornato correttamente");
  } catch (error) {
    console.log(error);
  }
};

const deleteComponent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteComp = await Components.findByIdAndDelete({ _id: id });
    res.status(200).json("Componente cancellato correttamente");
  } catch (error) {
    console.log(error);
  }
};

const getComponentById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const component = await Components.findById({ _id: id });
    res.json(component);
    return component;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllComponents,
  createComponent,
  deleteComponent,
  getComponentById,
  updateComponent,
};
