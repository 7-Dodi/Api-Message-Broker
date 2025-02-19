/***Importações */
import { prisma } from "../config/prisma";

/***Type */
import { createLatterDTO } from "../@types/taskTypes";

/***Queues */
import { taskQueue } from "../queues/taskQueue";

/*** Creating class */
export class TaskServices {

    async getLatters() {
        try{
            return await prisma.letter.findMany();
        } catch (error) {
            console.error("Erro ao buscar cartas:", error);
            throw new Error("Erro ao buscar cartas no banco de dados.");
        }
    };

    async createLatter(data: createLatterDTO) {
        try{
            await taskQueue.add("create-letter", data);
            return { message: "Tarefa enviada para processamento" };
        } catch (error) {
            console.error("Erro ao adicionar tarefa na fila:", error);
            throw new Error("Erro ao adicionar a tarefa na fila para processamento.");
        }
    };
};