import {
  ArgumentsHost,
  ExceptionFilter,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    console.log(exception);

    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status_code =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const error =
      exception instanceof HttpException ? exception.getResponse() : exception;

    error.message =
      typeof error.message === 'object' ? error.message[0] : error.message;

    this.logger.error(
      `Status Code: ${status_code}, Message: ${JSON.stringify(error)}`,
    );

    response.status(status_code).json({
      timestamp: new Date().toISOString(),
      path: request.path,
      error,
    });
  }
}

export { AllExceptionsFilter };
