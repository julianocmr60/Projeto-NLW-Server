import { Feedback } from "@prisma/client";
import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackId, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create ({type, comment, screenshot}: FeedbackCreateData){
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    };
    async listall(){
        const feedbacks = await prisma.feedback.findMany();
        return feedbacks;
    }

    async getById({id}: FeedbackId){
        const feedback = await prisma.feedback.findUnique({where:{id}})
        return feedback;
    }

    async edit ({id,type, comment, screenshot}: FeedbackCreateData){
        await prisma.feedback.update({where:{id},
            data: {
                type,
                comment,
                screenshot,
            }
        });
    };

    async delete({id}: FeedbackId){
        const feedback = await prisma.feedback.delete({where:{id}})
        return feedback;
    }

}