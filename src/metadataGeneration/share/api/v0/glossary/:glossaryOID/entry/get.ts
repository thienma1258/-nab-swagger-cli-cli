import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type GlossentryOID = EntityOID

type RequestPayload = void
interface ResponsePayload {
  oids :GlossentryOID[],
  totalCount:number,
}

const GetGlossentryByGlossaryID = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (glossaryOID) => `/api/v0/glossary/${glossaryOID}/entry`,
);

export default GetGlossentryByGlossaryID;
