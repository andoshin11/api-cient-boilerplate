import { HTTPMethod } from "./APIClient";
import { APIResponse } from "./APIResponse";

export type APIRequest<R extends APIResponse> = {
  response: R;
  path: string;
  method: HTTPMethod;
  params?: any;
  basePath?: string;
  parse?: (data: any) => R;
};
