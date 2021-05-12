import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Role } from "@localization-share/entities/Role/Role";
import { Language } from "@localization-share/types/Language";
import { EntityType } from "aws-sdk/clients/iam";
import { MethodDescription, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = void;
interface ResponsePayload {
  localizationSystemRoles: Record<EntityType, Role>;
  languages: Language[]
}

@Route("Setting")
@Tags("Setting")
@Security("BearerJWT")
@MethodDescription("Get global setting")
export class GetAllAssetMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Response<ResponsePayload>("200", "OIDs of result assets")
  res?: ResponsePayload;

}

const GetGlobalSetting = new ApiMethod<void, RequestPayload, ResponsePayload>(METHOD.GET, "/api/v0/global-setting");

export default GetGlobalSetting;
