import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { TextPreset } from "@localization-share/entities/TextPreset";


interface RequestParams {
  projectOID: EntityOID;
  textPresetOID: EntityOID
}
type RequestPayload = Partial<Pick<TextPreset, "name" | "description" | "payload">>;
type ResponsePayload = void

const UpdateProjectTextPreset = new ApiMethod<RequestParams, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  ({ projectOID, textPresetOID }) => `/api/v0/project/${projectOID}/text-preset/${textPresetOID}`,
);


export default UpdateProjectTextPreset;
