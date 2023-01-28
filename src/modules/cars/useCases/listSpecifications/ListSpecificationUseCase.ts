import { Specification } from "../../models/Specification";
import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationsRepository";

class ListSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) { }

    execute(): Specification[] {
        const specifications = this.specificationRepository.list();
        
        return specifications;
    }
}

export { ListSpecificationUseCase };