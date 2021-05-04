import { HttpStatusCodeLiteral, HttpStatusCodeStringLiteral, OtherValidOpenApiHttpStatusCode } from "@tsoa/runtime";
import { IsValidHeader } from "@tsoa/runtime/dist/utils/isHeaderType";

export function CommonResponse<ExampleType, HeaderType extends IsValidHeader<HeaderType> = {}>(
    name: HttpStatusCodeLiteral | HttpStatusCodeStringLiteral | OtherValidOpenApiHttpStatusCode,
    description?: string,
    example?: ExampleType,
  ): Function {
    return () => {
      return;
    };
  }
  