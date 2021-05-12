import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type MoveRawFileInput = {
  sourceKey: string;
  targetKey: string;
}

type RequestPayload = MoveRawFileInput[]
type ResponsePayload = void

const MoveProjectRawFiles = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (entityOID) => `/api/v0/project/${entityOID}/raw-file/move`,
);


export default MoveProjectRawFiles;
