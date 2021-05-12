import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { TextPreset } from "@localization-share/entities/TextPreset";


type RequestPayload = Pick<TextPreset, "name" | "description" | "payload">[];
type ResponsePayload = EntityOID[]

const CreateProjectTextPresets = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.POST,
  (projectOID) => `/api/v0/project/${projectOID}/text-preset`,
);


export default CreateProjectTextPresets;
