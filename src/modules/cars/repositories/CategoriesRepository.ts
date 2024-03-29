import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./implementations/ICategoriesRepository";

// Singleton -> Cria UMA instância GLOBAL -> não se usa para tudo
// DTO => Data Transfer Object
class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);
    };

    list(): Category[] {
        return this.categories;
    };

    findByName(name: string): Category {
        const categoryAlreadyExists = this.categories.find(category => category.name === name);
        
        return categoryAlreadyExists;
    }
}

export { CategoriesRepository };