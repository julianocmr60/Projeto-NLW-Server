import express from 'express';
export const routes = express.Router();
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { DeleteFeedbackByIdUseCase } from './use-case/delete-feedback-by-id-use-case';
import { EditFeedbackUseCase } from './use-case/edit-feedback-by-id-use-case';
import { GetFeedbackByIdUseCase } from './use-case/get-feedback-by-id-use-case';
import { ListFeedbackUseCase } from './use-case/list-feedback-use-case';
import { SubmitFeedbackUseCase } from './use-case/submit-feedback-use-case';


routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

    return res.status(201).send();
});

routes.get('/feedbacks', async (req, res) => {

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const listFeedbackUseCase = new ListFeedbackUseCase(
        prismaFeedbacksRepository,
    )

    const feedbacks = await listFeedbackUseCase.execute()

    return res.status(201).send(feedbacks);
});

routes.get('/feedbacks/:id', async (req, res) => {

    const id = req.params.id;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

    const getFeedbackByIdUseCase = new GetFeedbackByIdUseCase(
        prismaFeedbacksRepository,
    )

    const feedback = await getFeedbackByIdUseCase.execute({id})
    return res.status(201).send(feedback);
});

routes.put('/feedback/:id', async (req, res) => {
    const id = req.params.id;
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const editFeedbackUseCase = new EditFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await editFeedbackUseCase.execute({
        id,
        type,
        comment,
        screenshot,
    })

    return res.status(201).send();
}); 

routes.delete('/feedback/:id', async (req, res) => {

    const id = req.params.id;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

    const deleteFeedbackByIdUseCase = new DeleteFeedbackByIdUseCase(
        prismaFeedbacksRepository,
    )

    const feedback = await deleteFeedbackByIdUseCase.execute({id})
    return res.status(201).send(feedback);
});
