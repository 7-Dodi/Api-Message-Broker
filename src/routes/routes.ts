// ***Importações
import { Router } from "express";

// ***Importações de rotas
import { taskRoutes } from "./taskRoutes";

// ***Definição de rotas
const route = Router();
route.use("/tasks", taskRoutes);

// ***Exportando a rota
export { route };