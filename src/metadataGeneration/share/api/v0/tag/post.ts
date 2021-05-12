import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { Tag } from "@localization-share/entities/Tag";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type CreateTagInput = Pick<Tag, "name"> & Partial<Pick<Tag, "extras">>

type RequestPayload = CreateTagInput[]
type ResponsePayload = EntityOID[]


@Route("Tag")
@Tags("Tag")
@Security("BearerJWT")
@MethodDescription("Create new Tags")
export class CreateTagMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Request<RequestPayload>("body", "Request payload create new tags", [{
    name: "test tags",
    extras: [
      {
        key: "anyKeys",
        value: "any Value",
      },
    ],
  }])
  body!: RequestPayload;

  @Response<ResponsePayload>("200", "OIDs of new created tags", ["ls-tag-1", "ls-tag-2", "ls-tag-3"])
  res?: ResponsePayload;

}

const CreateTags = new CreateTagMethod(
  METHOD.POST,
  "/api/v0/tag",
);

export default CreateTags;
