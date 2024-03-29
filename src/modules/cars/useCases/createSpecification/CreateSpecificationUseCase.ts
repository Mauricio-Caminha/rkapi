import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationRepository) { }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("This specification already exists!");
        }

        this.specificationsRepository.create({ name, description, });
    }
}

export { CreateSpecificationUseCase };