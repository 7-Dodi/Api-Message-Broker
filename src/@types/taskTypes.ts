/** Definindo um interface para as tarefas */
export interface Latter{
    id: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
};

/** Definindo um type para as tarefas */
export type createLatterDTO = Omit<Latter, 'id' | "createdAt" | "updatedAt">;