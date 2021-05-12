import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Asset } from "@localization-share/entities/Asset";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = Pick<Asset, "name" | "tagList">
type ResponsePayload = void

@Route("Asset")
@Tags("Asset")
@Security("BearerJWT")
@MethodDescription("Update asset")
export class UpdateAssetMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Request<RequestPayload>("body", "payload update assets", {
    name: "test",
    tagList: [
      "ls-tag-2",
    ],
  })
  body!:RequestPayload;

  @Response<ResponsePayload>("200", "Ok update assets success")
  res?: ResponsePayload;

  @Request<EntityOID>("path", "assetOID need to update", "ls-asset-2")
  assetOID!:EntityOID;

}

const UpdateAsset = new UpdateAssetMethod(
  METHOD.PUT,
  (assetOID) => `/api/v0/asset/${assetOID}`,
);

export default UpdateAsset;
