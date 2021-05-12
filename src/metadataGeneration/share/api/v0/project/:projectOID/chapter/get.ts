import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type ChapterOID = EntityOID

type RequestPayload = void
type ResponsePayload = ChapterOID[]

const GetProjectChapters = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (projectOID) => `/api/v0/project/${projectOID}/chapter`,
);

export default GetProjectChapters;
