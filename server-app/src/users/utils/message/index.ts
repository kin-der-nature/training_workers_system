import { HttpException, HttpStatus } from '@nestjs/common';

export const notAuth = (): void => {
  throw new HttpException('Пользователь не найден', HttpStatus.UNAUTHORIZED);
};

export const loginExistsSystem = (): void => {
  throw new HttpException(
    'Пользователь с таким логином уже существует',
    HttpStatus.BAD_REQUEST,
  );
};
