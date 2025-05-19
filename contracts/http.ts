export interface HttpContextContract {
  request: {
    input(key: string): string;
  };
  response: {
    status(code: number): {
      json(data: unknown): unknown;
    };
    json(data: unknown): unknown;
  };
}
