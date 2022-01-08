import { Router } from "express";
import person from "./person";

export default Router().get("/person", person);
