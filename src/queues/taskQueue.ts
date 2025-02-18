/*** Importações */
import { Queue } from "bullmq";
import { redis } from "../connection/redisConnections";

/*** Defining task queue */
export const taskQueue = new Queue("task-queue", {
  connection: redis,
});
