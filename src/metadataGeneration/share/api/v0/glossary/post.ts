import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { Glossary } from "@localization-share/entities/Glossary";


type RequestPayload = Pick<Glossary, "name" | "sourceLanguage" | "targetLanguage">
type ResponsePayload = EntityOID

const CreateGlossary = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.POST,
  "/api/v0/glossary",
);


export default CreateGlossary;
