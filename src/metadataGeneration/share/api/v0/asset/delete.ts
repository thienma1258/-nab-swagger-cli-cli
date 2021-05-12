import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = EntityOID[]
type ResponsePayload = void


@Route("Asset")
@Tags("Asset")
@Security("BearerJWT")
@MethodDescription("Delete many assets")
export class DeleteManyAssetMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Request<RequestPayload>("body", "Delete many assets", ["ls-asset-1", "ls-asset2"])
  body!:RequestPayload;

  @Response<ResponsePayload>("200", "Ok delete assets success")
  res?: ResponsePayload;

}

const DeleteAssets = new DeleteManyAssetMethod(
  METHOD.DELETE,
  "/api/v0/asset",
);

export default DeleteAssets;
