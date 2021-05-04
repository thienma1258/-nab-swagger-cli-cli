
import {   Response, Route, Tags } from "@tsoa/runtime";
import { ApiMethod, METHOD } from "../../core";
import { Request } from "../../../../../../customDecorations/requestPayload";


type SearchForUserByNameByIDWithParamsInput = {
  name: string;
}

type SearchForUserByNameByIDWithParamsRes = string[];

type RequestParams = {
    id: string;
    anotherparams: string;
  }
  


@Route("User")
@Tags("User")
export class SearchForUserByNameByIDWithParamsMethod extends ApiMethod<RequestParams, SearchForUserByNameByIDWithParamsInput, SearchForUserByNameByIDWithParamsRes> {


  @Response<SearchForUserByNameByIDWithParamsRes>("200","all match otakumoID result",["ik-user-3","ik-user-5"])
  res:SearchForUserByNameByIDWithParamsRes

  @Request<string>("path","path id when filter search by name","ik-user-12")
  id:string

  @Request<string>("path","params id when filter search by name","ik-user-12")
  anotherparams:string
}

const SearchForUserByNameByID = new SearchForUserByNameByIDWithParamsMethod(
  METHOD.PUT,
  ({ id, anotherparams })=>`/api/v0/user/search-by-name/${id}/${anotherparams}`,
);

export default SearchForUserByNameByID;
