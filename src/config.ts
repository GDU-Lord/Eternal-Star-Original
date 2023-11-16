import * as utils from "./utils";

// primary
export const API_PORT = "4040";
export const DEFAULT_GRID_IMAGE = "/assets/default-image.jpg";
export const FOLDER_GRID_IMAGE = "/assets/folder.png";
export const GRID_COLUMNS = 3;

// derived
export const API_URL = "http://" + utils.CURRENT_IP + ":" + API_PORT;