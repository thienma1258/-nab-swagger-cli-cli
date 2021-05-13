import { HttpStatusCodeLiteral, HttpStatusCodeStringLiteral, OtherValidOpenApiHttpStatusCode } from "@tsoa/runtime";
import { IsValidHeader } from "@tsoa/runtime/dist/utils/isHeaderType";

export function CommonResponse<ExampleType, HeaderType extends IsValidHeader<HeaderType> = {}>(
    _name: HttpStatusCodeLiteral | HttpStatusCodeStringLiteral | OtherValidOpenApiHttpStatusCode,
    _description?: string,
    _example?: ExampleType,
  ): Function {
    return () => {
      return;
    };
  }
  