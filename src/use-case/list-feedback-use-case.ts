import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class ListFeedbackUseCase{
    constructor(
        private feedbacksRepository: FeedbacksRepository
    ){}
    
    async execute(){
        const feedback = await this.feedbacksRepository.listall();
        return feedback;
    }

}