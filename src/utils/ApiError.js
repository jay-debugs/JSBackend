export class ApiError extends Error {
    construct(
        statusCode,
        message = "something went wrong",
        errors = [],
        statck = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null
        this.message = message;
        this.success = false;
        this.errors = errors;
        // this.statck = statck;
        if (statck) {
            this.statck = statck;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}