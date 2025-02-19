/***Importações */
import { Worker } from "bullmq";
import { prisma } from "../config/prisma";
import { redis } from "../connection/redisConnections";

const worker = new Worker(
  "task-queue",
  async (job) => {
    try {
      console.log(`Processando tarefa: ${job.name}`);

      if (job.name === "create-letter") {
        await prisma.letter.create({
          data: job.data,
        });
        console.log("Tarefa processada com sucesso!");
      }
    } catch (error) {
      console.error(`Erro ao processar a tarefa ${job.id}:`, error);
      throw error;
    }
  },
  { connection: redis }
);

worker.on("completed", (job) => {
  console.log(`Tarefa ${job.id} concluída!`);
});

worker.on("failed", (job, err) => {
  console.log(`Tarefa ${job?.id} falhou: ${err.message}`);
});
