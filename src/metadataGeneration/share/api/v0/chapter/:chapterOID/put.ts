import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Chapter } from "@localization-share/entities/Chapter";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = Partial<Pick<Chapter, "name" | "status" | "setting">>
type ResponsePayload = void

const UpdateChapterInfo = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (chapterOID) => `/api/v0/chapter/${chapterOID}`,
);

export default UpdateChapterInfo;
