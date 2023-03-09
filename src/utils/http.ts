import { BadRequestException } from '@nestjs/common';

export function errorResolve(error) {
  console.log(error);

  throw new BadRequestException(error);
}

export function errorListResolve(error) {
  console.log(error);

  const errorResponse = {
    '5': () => {
      throw new BadRequestException(error);
    },
    '4': () => {
      return [];
    },
  };

  return errorResponse[`${error.response.status}`.substring(0, 1)]();
}

/**
 * Utilize para evitar sobrecarga do servidor, erros 502 ou 503
 * @param time
 * @returns
 */
export async function delay(time = 5000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
