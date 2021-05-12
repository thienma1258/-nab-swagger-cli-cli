import { ApiMethod, METHOD } from "@localization-share/api/api";
import { SpellingError } from "@localization-share/types/SpellingError";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type TextID = string;
type Text = string;
type RequestPayload = {
  texts: Record<TextID, string>;
  language?: string;
}
type ResponsePayload = Record<Text, SpellingError[]>

@Route("Spelling")
@Tags("Spelling")
@Security("BearerJWT")
@MethodDescription("Check spelling error")
export class CheckSpellingErrorMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Request<RequestPayload>("body", "Request payload need to check spelling", {
    texts: {
      groupText1: "text need check spelling",
    },
    language: "en",
  })
  body!: RequestPayload;

  @Response<ResponsePayload>("200", "Result of spelling check", {
    groupText1: [{
      id: "1",
      context: {
        text: "need",
        offset: 3,
        length: 4,
      },
      type: "",
      error: "",
      suggestion: ["text need check spellings"],
    }],
  })
  res?: ResponsePayload;

}

const GetSpellingErrorsFromTexts = new CheckSpellingErrorMethod(
  METHOD.PUT,
  "/api/v0/spelling-error",
);

export default GetSpellingErrorsFromTexts;
