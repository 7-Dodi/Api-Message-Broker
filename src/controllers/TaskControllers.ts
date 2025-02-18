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
        const latters = await this.taskServices.getLatters();
        return res.status(200).json(latters);
    };

    async createLetter(req: Request, res: Response) {
        const { description } = req.body;
        const data = { description };
        const latter = await this.taskServices.createLatter(data);
        return res.status(201).json(latter);
    };
};