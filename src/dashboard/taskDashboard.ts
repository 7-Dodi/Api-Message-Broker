/*** Importações */
import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import express from "express";

/*** Queue */
import { taskQueue } from "../queues/taskQueue";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

createBullBoard({
  queues: [new BullMQAdapter(taskQueue)],
  serverAdapter,
});

export { serverAdapter };