import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CookieOptions, Response } from 'express';

export type SetCookieFunc = (
	name: string,
	val: any,
	options?: CookieOptions
) => void;

export const SetCookie = createParamDecorator(
	(data: string, ctx: ExecutionContext) => {
		const response = ctx.switchToHttp().getResponse<Response>();

		const setCookieFunc: SetCookieFunc = (name, val, options) => {
			if (options) response.cookie(name, val, options);
			else response.cookie(name, val);
		};
		return setCookieFunc;
	}
);
