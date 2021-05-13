import { setupWorker } from 'msw';

const remoteModuleMockHandlers = import('api/moduleMockHandlers');
const { handlers } = await remoteModuleMockHandlers;

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
