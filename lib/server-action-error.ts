export type ServerActionError = {
  message: string;
};

export function serverActionError(err: unknown): ServerActionError {
  if (isServerActionError(err)) {
    return err;
  }

  if (err instanceof Error) {
    return {
      message: err.message,
    };
  }

  return {
    message: JSON.stringify(err),
  };
}

export function isServerActionError<T>(arg: T | ServerActionError): arg is ServerActionError {
  if ((arg !== null) && (typeof arg === "object") && ("message" in arg)) {
    return true;
  }

  return false;
}
