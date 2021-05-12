import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = {
  name: string;
}
type ResponsePayload = EntityOID[]


@Route("Tag")
@Tags("Tag")
@Security("BearerJWT")
@MethodDescription("Search tags by names")
export class GetAllAccessibilityTagMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Request<RequestPayload>("body", "Request payload create new tags", {
    name: "search tags names",
  })
  body!: RequestPayload;

  @Response<ResponsePayload>("200", "OIDs of result tags", ["ls-tag-1", "ls-tag-2", "ls-tag-3"])
  res?: ResponsePayload;

}

const SearchTagsByName = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  "/api/v0/tag/search-by-name",
);

export default SearchTagsByName;
