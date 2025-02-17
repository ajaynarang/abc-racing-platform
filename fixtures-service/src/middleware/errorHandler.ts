import { Request, Response } from "express";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response
): void => {
  console.error(error.stack);
  res.status(500).json({
    error: {
      message: "Internal Server Error",
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    },
  });
};
