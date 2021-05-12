import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = void
type ResponsePayload = EntityOID[]

@Route("Tag")
@Tags("Tag")
@Security("BearerJWT")
@MethodDescription("Get all accessibility tags")
export class GetAllAccessibilityTagMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Response<ResponsePayload>("200", "OIDs of result tags", ["ls-tag-1", "ls-tag-2", "ls-tag-3"])
  res?: ResponsePayload;

}


const GetAllAccessibleTags = new GetAllAccessibilityTagMethod(
  METHOD.GET,
  "/api/v0/tag",
);

export default GetAllAccessibleTags;
