import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


export type NewProjectRawFileItem = {
  key: string;
  url?: string;
}
type RequestPayload = NewProjectRawFileItem[]

type ResponsePayload = void

const CreateProjectRawFiles = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.POST,
  (entityOID) => `/api/v0/project/${entityOID}/raw-file`,
);


export default CreateProjectRawFiles;
