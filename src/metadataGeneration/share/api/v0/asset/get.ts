import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = void
type ResponsePayload = EntityOID[]

@Route("Asset")
@Tags("Asset")
@Security("BearerJWT")
@MethodDescription("Get all accessibility asset")
export class GetAllAssetMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Response<ResponsePayload>("200", "OIDs of result assets", ["ls-asset-1", "ls-asset-2", "ls-asset-3"])
  res?: ResponsePayload;

}

const GetAccessibleAssets = new GetAllAssetMethod(
  METHOD.GET,
  "/api/v0/asset",
);

export default GetAccessibleAssets;
