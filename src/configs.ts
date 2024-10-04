import { checkAndGetEnvValue } from '@kikiutils/node/env';

export interface Configs {
	redisUri: string;
	server: { host: string; port: number };
}

export default {
	redisUri: checkAndGetEnvValue('REDIS_URI'),
	server: { host: process.env.SERVER_HOST || '127.0.0.1', port: +(process.env.SERVER_PORT || 8000) }
} satisfies Configs;
