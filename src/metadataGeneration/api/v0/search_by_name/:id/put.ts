
import {   Response, Route, Tags } from "@tsoa/runtime";
import { ApiMethod, METHOD } from "../core";
import { Request } from "../../../../../customDecorations/requestPayload";



type SearchForUserByNameByIDInput = {
  name: string;
}

type SearchForUserByNameByIDResponse = string[];


@Route("User")
@Tags("User")
export class SearchForUserByNameByIDMethod extends ApiMethod<string, SearchForUserByNameByIDInput, SearchForUserByNameByIDResponse> {

  @Request<SearchForUserByNameByIDInput>("body","Request payload search name",{name:"searchUserName"})
  body:SearchForUserByNameByIDInput

  @Response<SearchForUserByNameByIDResponse>("200","all match otakumoID result",["ik-user-3","ik-user-5"])
  res:SearchForUserByNameByIDResponse

  @Request<string>("path","path id when filter search by name","ik-user-12")
  id:string
}

const SearchForUserByNameByID = new SearchForUserByNameByIDMethod(
  METHOD.PUT,
  (id)=>"/api/v0/user/search-by-name/:id",
);

export default SearchForUserByNameByID;
