module.exports = class ErrorApi extends Error{
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ErrorApi(401, "Пользователь не авторизован")
  }

  static BadRequest(message, errors = []) {
    return new ErrorApi(400, message, errors)
  }
}
