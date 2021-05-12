import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type GlossaryOID = EntityOID

type RequestPayload = void
type ResponsePayload = GlossaryOID[]

const GetProjectGlossary = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (projectOID) => `/api/v0/project/${projectOID}/glossary`,
);

export default GetProjectGlossary;
