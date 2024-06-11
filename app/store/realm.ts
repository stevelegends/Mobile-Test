import Realm from "realm";

// config
import Config from "app/config";

// schema
import {NoteSchema} from "app/store/notes/notes.storage";

export const realm = new Realm({schema: [NoteSchema as any], schemaVersion: Config.schemaVersion});
