import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Asset } from "@localization-share/entities/Asset";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type CreateAssetInput = Pick<Asset, "name" | "fileURL" | "fileType" | "fileSize" | "previewImage"> & Partial<Pick<Asset, "tagList">>

type RequestPayload = CreateAssetInput[]
type ResponsePayload = EntityOID[]

@Route("Asset")
@Tags("Asset")
@Security("BearerJWT")
@MethodDescription("Create bulk many assets")
export class CreateManyAssetMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Request<RequestPayload>("body", "Create many assets", [{
    name: "assetsName",
    fileURL: {
      url: "s3ImageURL",
    },
    fileType: "png",
    fileSize: 500,
    previewImage: {
      url: "s3ImageURL",
    },
    tagList: ["ls-tag-2"],

  }])
  body!:RequestPayload;

  @Response<ResponsePayload>("200", "OIDs of result assets", ["ls-asset-1", "ls-asset-2", "ls-asset-3"])
  res?: ResponsePayload;

}

const CreateAssets = new CreateManyAssetMethod(
  METHOD.POST,
  "/api/v0/asset",
);

export default CreateAssets;
