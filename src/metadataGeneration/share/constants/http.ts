export enum HTTP_STATUS_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ALLOWED = 405,

  SUCCESS = 200,
  NO_CONTENT = 204,
  CREATED = 201,

  NOT_MODIFIED = 304,

  INTERNAL_SERVER_ERROR = 500,
}

export enum API_CODE {
  SUCCESS = 0,
  VALIDATION_ERROR = 1,
  NOT_FOUND_ERROR = 2,
  ENTITY_BELONG_TO_ANOTHER_ENTITY = 3,
  NAME_IS_ALREADY_EXISTS = 4,
  USERNAME_OR_PASSWORD_INCORRECT = 5,
  CHANGE_PASSWORD_INVALID = 6,
  CANNOT_UPDATE_TITLE = 7,
  NOT_ALLOWED = 8,
  NOT_AUTHENTICATED = 9,
  TOKEN_EXPIRED = 10,
  UNKNOWN_ERROR = 500,
  DEFAULT = 999,
}

export const API_MESSAGES: Record<API_CODE, string> = {
  [API_CODE.SUCCESS]: "Ok",
  [API_CODE.VALIDATION_ERROR]: "Validation error",
  [API_CODE.NOT_FOUND_ERROR]: "Not found error",
  [API_CODE.ENTITY_BELONG_TO_ANOTHER_ENTITY]: "Entity belong to another entity",
  [API_CODE.NAME_IS_ALREADY_EXISTS]: "Name is already exists",
  [API_CODE.USERNAME_OR_PASSWORD_INCORRECT]: "Username or password incorrect",
  [API_CODE.CHANGE_PASSWORD_INVALID]: "Change password invalid",
  [API_CODE.UNKNOWN_ERROR]: "Unknown error",
  [API_CODE.CANNOT_UPDATE_TITLE]: "Cannot update title",
  [API_CODE.DEFAULT]: "Default",
  [API_CODE.NOT_ALLOWED]: "You are not allowed to do this",
  [API_CODE.NOT_AUTHENTICATED]: "We don't know who you are",
  [API_CODE.TOKEN_EXPIRED]: "Your token is expired",
};

export enum HTTP_REQUEST_METHOD {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}
