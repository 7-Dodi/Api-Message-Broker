// ***Importações
import express from "express";
import cors from "cors";
import { route } from "./routes/routes";

// ***Definição do Dashboard
import { serverAdapter } from "./dashboard/taskDashboard";

// ***Definição do app
const app = express();

// ***Configurações do app
app.use(express.json());
app.use(cors());
app.use(route);
app.use("/admin/queues", serverAdapter.getRouter());

// ***Exportando rotas
export { app };