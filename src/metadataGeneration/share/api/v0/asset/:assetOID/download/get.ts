import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { S3Image } from "@localization-share/types/S3Image";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = void
type ResponsePayload = S3Image

@Route("Asset")
@Tags("Asset")
@Security("BearerJWT")
@MethodDescription("Get download s3 image assets")
export class GetDownloadImageMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {


  @Response<ResponsePayload>("200", "Ok return image s3", {
    url: "s3://bucket/key",
  })
  res?: ResponsePayload;

  @Request<EntityOID>("path", "assetOID need to update", "ls-asset-2")
  assetOID!:EntityOID;

}

const DownAssetFile = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (assetOID) => `/api/v0/asset/${assetOID}/download`,
);

export default DownAssetFile;
