import Realm from "realm";

export class NoteSchema extends Realm.Object {
    _id!: string;
    title!: string;
    description!: string;
    isComplete!: boolean;
    createdAt!: Date;
    updatedAt!: Date;

    static schema = {
        name: 'Notes',
        primaryKey: '_id',
        properties: {
            _id: 'string',
            title: 'string',
            description: 'string',
            isComplete: { type: 'bool', default: false },
            createdAt: 'date',
            updatedAt: 'date'
        },
    }
}

