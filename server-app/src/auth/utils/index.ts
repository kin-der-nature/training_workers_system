import { HttpException, HttpStatus } from '@nestjs/common';

export const incorrectAuthorizationData = (): void => {
  throw new HttpException(
    'Неккоректные данные авторизации',
    HttpStatus.BAD_REQUEST,
  );
};
