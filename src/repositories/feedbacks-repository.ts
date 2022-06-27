import { Feedback } from "@prisma/client";

export interface FeedbackCreateData{
    id?: string;
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbackId{
    id: string;
}

export interface FeedbacksRepository{
    create: (data: FeedbackCreateData) => Promise<void>;
    listall: () => Promise<Feedback[]>;
    getById: (data: FeedbackId) => Promise<Feedback | null>;
    edit: (data: FeedbackCreateData) => Promise<void>;
    delete: (data: FeedbackId) => Promise<Feedback | null>;
}