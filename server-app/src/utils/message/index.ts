import { HttpException, HttpStatus } from '@nestjs/common';

export const tokenNoDecode = (): void => {
  throw new HttpException(
    'Невозможно декодировать токен',
    HttpStatus.BAD_REQUEST,
  );
};
