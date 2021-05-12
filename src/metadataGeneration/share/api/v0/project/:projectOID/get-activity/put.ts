import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { FetchActivityRequest, FetchActivityResponse } from "@localization-share/types/Activity";


type RequestPayload = FetchActivityRequest;
type ResponsePayload = FetchActivityResponse;

const GetProjectActivities = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (projectOID) => `/api/v0/project/${projectOID}/get-activity`,
);

export default GetProjectActivities;
