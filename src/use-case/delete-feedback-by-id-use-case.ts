import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface DeleteFeedbackByIDUseCaseRequest{
    id: string;
}

export class DeleteFeedbackByIdUseCase{
    constructor(
        private feedbacksRepository: FeedbacksRepository
    ){}

    async execute(request: DeleteFeedbackByIDUseCaseRequest){
        const {id} = request;
        await this.feedbacksRepository.delete({id})
    }
}