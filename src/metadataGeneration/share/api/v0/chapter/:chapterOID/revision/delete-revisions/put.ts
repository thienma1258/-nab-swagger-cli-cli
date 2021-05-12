import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = {
  chapterRevisionOIDs: EntityOID[]
}
type ResponsePayload = void

const DeleteChapterRevisions = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (chapterOID) => `/api/v0/chapter/${chapterOID}/revision/delete-revisions`,
);

export default DeleteChapterRevisions;
