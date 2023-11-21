export type ActionResult<Result> =
  | {
      success: true;
      result: Result;
    }
  | {
      success: false;
      error: {
        message: string;
        data?: unknown;
      };
    };
