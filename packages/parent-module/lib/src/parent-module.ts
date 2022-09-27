/* eslint-disable @typescript-eslint/no-var-requires */
import { createRequire } from 'module';

export function getParentModuleFileName(): string {
  const frames = getStackFrames();
  for (const frame of frames) {
    const file = frame.getFileName();
    if (file && file !== __filename) {
      return file;
    }
  }
  throw new Error('Unable to determine parent module');
}

export function getParentModulePaths() {
  const f = getParentModuleFileName();
  return createRequire(f).main?.paths;
}

function getStackFrames() {
  const f = Error.prepareStackTrace;
  Error.prepareStackTrace = (err, frames) => {
    return frames;
  };
  const result = (new Error().stack as unknown as NodeJS.CallSite[]).slice(1);
  Error.prepareStackTrace = f;
  return result;
}
