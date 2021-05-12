import { setupWorker } from 'msw';

const federatedImport = import('api/moduleMockHandlers');
const { handlers } = await federatedImport;

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
