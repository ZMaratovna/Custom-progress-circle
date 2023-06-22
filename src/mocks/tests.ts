import { IProcess, Status } from "../typings";

export const tests: IProcess[] = [
  { id: 1, name: 'Test1', totalSize: 200000, handledSize: 0, progress: 0, completed: false, status: Status.pending, timeStarted: 0, timeElapsed: 0},
  { id: 2, name: 'Test2', totalSize: 200000, handledSize: 0, progress: 0, completed: false, status: Status.pending, timeStarted: 0, timeElapsed: 0 },
  { id: 3, name: 'Test3', totalSize: 200000, handledSize: 0, progress: 0, completed: false, status: Status.pending, timeStarted: 0, timeElapsed: 0 },
  { id: 4, name: 'Test4', totalSize: 200000, handledSize: 0, progress: 0, completed: false, status: Status.pending, timeStarted: 0, timeElapsed: 0 },
];
