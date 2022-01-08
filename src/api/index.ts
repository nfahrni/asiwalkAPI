import { Router } from "express";
import nameList from "./person";
import tsUpstate from "./tsUpstate";
import uptimeRobot from "./uptimeRobot";

export default Router()
  .use("/tsupstate", tsUpstate)
  .use("/uptimerobot", uptimeRobot)
  .use("/person", nameList);
