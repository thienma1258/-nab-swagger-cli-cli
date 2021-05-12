import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = void
type ResponsePayload = void

const DeleteGlossary = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.DELETE,
  (glossaryOID) => `/api/v0/glossary/${glossaryOID}`,
);


export default DeleteGlossary;
