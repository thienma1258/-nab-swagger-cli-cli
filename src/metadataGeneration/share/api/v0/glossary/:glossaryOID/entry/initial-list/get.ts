import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { Glossentry } from "@localization-share/entities/Glossentry";


type RequestPayload = void
type ResponsePayload = {
  entries: Glossentry[];
  latestUpdatedAt: string | null;
}

const GetGlossentryInitialListByGlossaryID = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (glossaryOID) => `/api/v0/glossary/${glossaryOID}/entry/initial-list`,
);

export default GetGlossentryInitialListByGlossaryID;
