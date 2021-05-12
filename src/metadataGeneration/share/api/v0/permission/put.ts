import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import PERMISSIONS from "@localization-share/permissions";


type RequestPayload = EntityOID[]
type ResponsePayload = Record<EntityOID, PERMISSIONS[]>

const GetUserPermissionWithGivenEntityOIDs = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  "/api/v0/permission",
);


export default GetUserPermissionWithGivenEntityOIDs;
