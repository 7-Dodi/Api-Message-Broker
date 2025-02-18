/***Importações */
import { prisma } from "../config/prisma";

/***Type */
import { createLatterDTO } from "../@types/taskTypes";

/***Queues */
import { taskQueue } from "../queues/taskQueue";

/*** Creating class */
export class TaskServices {

    async getLatters() {
        return await prisma.letter.findMany();
    };

    async createLatter(data: createLatterDTO) {
        // Adiciona a tarefa na fila
        await taskQueue.add("create-letter", data);
        return { message: "Tarefa enviada para processamento" };
    };
};