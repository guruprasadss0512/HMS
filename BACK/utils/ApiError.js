class ApiError extends Error {
  constructor(
    statusCode,
    message = "An error occurred",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null; // No data in error response,
    this.message = message; // Custom error message
    this.errors = errors; // For backward compatibility
    this.stack = stack || new Error().stack; // Capture stack trace if not provided
    this.success = false; // Indicate that this is an error response
  }
}

export { ApiError };
