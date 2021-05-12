import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


export interface SearchPayload {
  name:string;
}

type RequestPayload = Pick<SearchPayload, "name">
type ResponsePayload = EntityOID[]

const PutSearchGlossaries = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  "/api/v0/glossary/search",
);


export default PutSearchGlossaries;
