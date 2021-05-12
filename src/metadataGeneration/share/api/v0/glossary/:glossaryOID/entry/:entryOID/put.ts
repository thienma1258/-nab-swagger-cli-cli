import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { Glossentry } from "@localization-share/entities/Glossentry";


type RequestParams = {
  glossaryOID: EntityOID;
  entryOID: EntityOID;
}

type RequestPayload = Pick<Glossentry, "name" | "value" | "aliasList" >
type ResponsePayload = void

const UpdateGlossentry = new ApiMethod<RequestParams, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  ({ glossaryOID, entryOID }) => `/api/v0/glossary/${glossaryOID}/entry/${entryOID}`,
);


export default UpdateGlossentry;
