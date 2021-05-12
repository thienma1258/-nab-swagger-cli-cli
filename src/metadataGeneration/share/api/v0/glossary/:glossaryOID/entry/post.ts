import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { Glossentry } from "@localization-share/entities/Glossentry";


type RequestPayload = Pick<Glossentry, "name" | "value" | "aliasList" >
type ResponsePayload = EntityOID

const CreateGlossentry = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.POST,
  (glossaryOID) => `/api/v0/glossary/${glossaryOID}/entry`,
);


export default CreateGlossentry;
