import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = void
type ResponsePayload = EntityOID[]

const GetGlossaries = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.GET,
  "/api/v0/glossary",
);


export default GetGlossaries;
