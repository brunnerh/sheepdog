import { DEV } from 'esm-env';
import { CancelationError } from './core';
import type { TaskFunction } from './core';

/**
 * Utility method to know if a `perform` thrown because it was canceled
 */
export const didCancel = (e: Error | CancelationError) => {
	return e instanceof CancelationError;
};

/**
 * A Promise that will resolve after {ms} milliseconds
 */
export async function timeout(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * A function to mark your function to be transformable by the
 * async transform vite plugin. It will error out in dev mode
 * if you didn't add the plugin.
 */
export function transform<T extends TaskFunction>(fn: T): T {
	if (DEV) {
		throw new Error(
			'You are using the transform function without the vite plugin. Please add the `asyncTransform` plugin to your `vite.config.ts`',
		);
	}
	return fn;
}
