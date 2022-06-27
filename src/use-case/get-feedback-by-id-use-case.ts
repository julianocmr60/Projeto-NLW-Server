import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface GetFeedbackByIDUseCaseRequest{
    id: string;
}

export class GetFeedbackByIdUseCase{
    constructor(
        private feedbacksRepository: FeedbacksRepository
    ){}

    async execute(request: GetFeedbackByIDUseCaseRequest){
        const {id} = request;
        const feedback = await this.feedbacksRepository.getById({id})
        return feedback;
    }
    
}