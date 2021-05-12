import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Glossentry } from "@localization-share/entities/Glossentry";


type UpdatedAt = string | null

type SyncData = {
  forceReload: true,
} | {
  forceReload: false,
  latestUpdatedAt: UpdatedAt;
  updated: Glossentry[];
  deleted: string[];
}

type RequestPayload = Record<string, UpdatedAt>
type ResponsePayload = Record<string, SyncData>

const SyncGlossentryData = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  "/api/v0/glossary/entry/sync-data",
);


export default SyncGlossentryData;
