import { ApiMethod, METHOD } from "@localization-share/api/api";
import { User } from "@localization-share/entities/User";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = {
  name: string;
}
type ResponsePayload = Omit<User[], "">


@Route("User")
@Tags("User")
@Security("BearerJWT")
@MethodDescription("Search for user by name")
export class SearchForUserByNameMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Request<RequestPayload>("body", "Request payload create new thread", {
    name: "input search name body",
  })
  body!: RequestPayload;

  @Response<User[]>("200", "Result user matching that name")
  res?: ResponsePayload;

}


const SearchForUserByName = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  "/api/v0/user/search-by-name",
);


export default SearchForUserByName;
