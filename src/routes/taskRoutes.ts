/** Importações */
import { Router } from "express";

/** Controllers */
import { TaskControllers } from "../controllers/TaskControllers";

/** Configurações */
const taskRoutes = Router();
const taskControllers = new TaskControllers();

/** Routes */
taskRoutes.get("/latters", taskControllers.getLatters.bind(taskControllers));
taskRoutes.post("/latters", taskControllers.createLetter.bind(taskControllers));

/** Exportando rotas */
export { taskRoutes };