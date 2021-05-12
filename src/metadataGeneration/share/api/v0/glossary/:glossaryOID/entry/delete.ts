import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = EntityOID []
type ResponsePayload = void

const DeleteManyGlossentry = new ApiMethod<string, RequestPayload, ResponsePayload>(
  METHOD.DELETE,
  (glossaryOID) => `/api/v0/glossary/${glossaryOID}/entry/`,
);


export default DeleteManyGlossentry;
