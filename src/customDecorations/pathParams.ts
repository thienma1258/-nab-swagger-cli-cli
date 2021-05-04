type pathParamType = string | number
/**
 * Inject value from Path
 *
 * @param {string} [name] The name of the path parameter
 */
export declare function PathParams<type extends pathParamType>(name: string,description?:string,example?:pathParamType): Function;