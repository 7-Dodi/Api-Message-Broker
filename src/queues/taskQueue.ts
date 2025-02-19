/*** Importações */
import { Queue } from "bullmq";
import { redis } from "../connection/redisConnections";

/*** Defining task queue */
export const taskQueue = new Queue("task-queue", {
  connection: redis,
  defaultJobOptions: {
    attempts: 3, // Tenta 3 vezes antes de falhar
    backoff: {
      type: "exponential",
      delay: 5000,
    },
  },
});
