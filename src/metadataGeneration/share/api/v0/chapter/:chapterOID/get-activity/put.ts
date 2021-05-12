import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { FetchActivityRequest, FetchActivityResponse } from "@localization-share/types/Activity";


type RequestPayload = FetchActivityRequest;
type ResponsePayload = FetchActivityResponse;

const GetChapterActivities = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (chapterOID) => `/api/v0/chapter/${chapterOID}/get-activity`,
);

export default GetChapterActivities;
