import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type UploadItem = {
  sourceURL: string
}
type RequestPayload = UploadItem[];

export type UploadResultItem = UploadItem & {
  destinationURL: string;
}
type ResponsePayload = UploadResultItem[]

const UploadFileToS3UnderChapter = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (chapterOID) => `/api/v0/chapter/${chapterOID}/upload-file-to-s3`,
);

export default UploadFileToS3UnderChapter;
