/*** Importações */
import { Request, Response } from "express";

/*** Services */
import { TaskServices } from "../services/TaskServices";

/*** Defining class */
export class TaskControllers {

    private taskServices: TaskServices;

    constructor() {
        this.taskServices = new TaskServices();
    }

    async getLatters(req: Request, res: Response) {
        try {
            const latters = await this.taskServices.getLatters();
            return res.status(200).json(latters);
        } catch (error) {
            console.error("Erro ao buscar as cartas:", error);
            return res.status(500).json({ error: "Erro interno do servidor ao buscar as cartas." });
        }
    };

    async createLetter(req: Request, res: Response) {
        try {
            const { description } = req.body;

            if (!description) return res.status(400).json({ error: "O campo 'description' é obrigatório." });

            const data = { description };
            const latter = await this.taskServices.createLatter(data);
            return res.status(201).json(latter);
        } catch (error) {
            console.error("Erro ao criar a carta:", error);
            return res.status(500).json({ error: "Erro interno do servidor ao criar a carta." });
        }
    };
};