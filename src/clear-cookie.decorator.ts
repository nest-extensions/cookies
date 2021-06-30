import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Response } from 'express';

export type ClearCookieFunc = (name: string) => void;

export const ClearCookie = createParamDecorator(
	(data: string, ctx: ExecutionContext) => {
		const response = ctx.switchToHttp().getResponse<Response>();

		const clearCookieFunc: ClearCookieFunc = (name) => {
			response.clearCookie(name);
		};
		return clearCookieFunc;
	}
);
