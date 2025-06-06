import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res) => {
  const response = new ApiResponse(
    200,
    { status: "ok" },
    "Health check successful"
  );
  res.status(response.statusCode).json(response);
});

export { healthCheck };
