export class Tag {
    public id: number;
    public key: string;
    public value: string;
    public description: string;
    public createdAt: Date;
    public updatedAt: Date;

    public static create(model?: any): Tag {
        if (model != null) {
            return new Tag(model.id, model.key, model.value, model.description, model.createdAt, model.updatedAt);
        }
        return new Tag();
    }

    constructor();
    constructor(id: number, key: string, value: string, description: string, createdAt: Date, updatedAt: Date);

    constructor(id?: number, key?: string, value?: string, description?: string, createdAt?: Date, updatedAt?: Date) {
        this.id = id;
        this.key = key;
        this.value = value;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}