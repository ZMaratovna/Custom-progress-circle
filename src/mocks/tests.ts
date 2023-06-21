export type Test = {
  id: number;
  name: string;
  size: number;
  done: boolean;
  processed: number;
  progress: number;
  timeToEnd?: number;
}

export type ProcessingStatus = {
  done: boolean;
  progress: number;
  active?: number; // the id of the test
  timeToEnd?: Date;
}

export const tests: Test[] = [
  { id: 1, name: 'Test1', size: 6000000, processed: 0, progress: 0, done: false},
  { id: 2, name: 'Test2', size: 6000000, processed: 0, progress: 0, done: false },
  { id: 3, name: 'Test3', size: 6000000, processed: 0, progress: 0, done: false },
  { id: 4, name: 'Test4', size: 6000000, processed: 0, progress: 0, done: false },
];

export const initialProcessingStatus: ProcessingStatus = {
  done: false,
  progress: 0,
}
