import { getParentModuleFileName, getParentModulePaths } from '../src/parent-module';

describe('getParentModuleFileName', () => {
  it('should be this file', () => {
    expect(getParentModuleFileName()).toEqual(__filename);
  });
});

describe('getParentModulePaths', () => {
  it('should be this modules paths', () => {
    expect(getParentModulePaths()).toEqual(module.paths);
  });
});
