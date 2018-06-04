import { APIRequest } from "../../APIRequest";
import { HTTPMethod } from "../../APIClient";
import { GetTodoListRequest } from "./types";

export namespace TodoAPI {
  // fetch Todo list
  export class GetTodoList implements APIRequest<List<Todo>> {
    response: List<Todo>;
    path = "/api/todos";
    method = HTTPMethod.GET;
    constructor(public params: GetTodoListRequest) {}
  }

  // fetch single Todo
  export class GetTodo implements APIRequest<Todo> {
    response: Todo;
    path: string;
    method = HTTPMethod.GET;
    constructor(id: number) {
      this.path = `/api/todos/${id}`;
    }
  }
}
