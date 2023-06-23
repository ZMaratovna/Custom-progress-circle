export const enum Status {
  running = 'running',
  stoped = 'stoped',
  paused = 'paused',
  pending = 'pending',
}

export interface IProcess {
  id: number
  name: string
  totalSize: number
  handledSize: number
  completed: boolean
  progress: number
  timeStarted: number
  timeElapsed: number
  status?: Status
}

export interface IPipeline extends IProcess {
  tests: IProcess[]
}
