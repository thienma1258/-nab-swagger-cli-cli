import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type RequestParams = {
  glossaryOID: EntityOID;
  entryOID: EntityOID;
}

type RequestPayload = void
type ResponsePayload = void

const DeleteGlossentry = new ApiMethod<RequestParams, RequestPayload, ResponsePayload>(
  METHOD.DELETE,
  ({ glossaryOID, entryOID }) => `/api/v0/glossary/${glossaryOID}/entry/${entryOID}`,
);


export default DeleteGlossentry;
