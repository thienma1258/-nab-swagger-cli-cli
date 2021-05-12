import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


export interface ImportGlossentryInput {
  s3FilePath : string
}

type RequestPayload = ImportGlossentryInput
type ResponsePayload = EntityOID[]

const ImportGlossentry = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.POST,
  (glossaryID) => `/api/v0/glossary/${glossaryID}/entry/import`,
);


export default ImportGlossentry;
