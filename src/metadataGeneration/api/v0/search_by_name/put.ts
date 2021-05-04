
import {  Response, Route, Tags } from "@tsoa/runtime";
import { Request } from "../../../../customDecorations/requestPayload";
import { ApiMethod, METHOD } from "./core";



type RequestPayload = {
  name: string;
}

type ResponsePayload = string[];



@Route("User")
@Tags("User")
export class SearchForUserByNameMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Request<RequestPayload>("body","Request payload search name",{name:"test"})
  body:RequestPayload

  @Response<ResponsePayload>("200","all match otakumoID result",[])
  res:ResponsePayload

}

const SearchForUserByName = new SearchForUserByNameMethod(
  METHOD.PUT,
  "/api/v0/user/search-by-name",
);

export default SearchForUserByName;
