import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Chapter } from "@localization-share/entities/Chapter";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = (Pick<Chapter, "name"> & Partial<Pick<Chapter, "setting">>)[]
type ResponsePayload = EntityOID[]

const CreateProjectChapters = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.POST,
  (projectOID) => `/api/v0/project/${projectOID}/chapter`,
);

export default CreateProjectChapters;
