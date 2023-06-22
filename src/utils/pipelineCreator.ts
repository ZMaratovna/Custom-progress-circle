import { IPipeline, IProcess, Status } from "../typings";

function waitForDelay(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("OK");
    }, delay);
  });
}

export async function* createTestProcessingStream(t: IProcess) {
  let handledSize = 0;
  const timeStarted: any = new Date();
  while (handledSize < t.totalSize) {
    handledSize += 100;
    await waitForDelay(100);
    const currentTime: any = new Date();
    const timeElapsed = (t.totalSize / handledSize - 1) * (currentTime - timeStarted); // number of milliseconds
    const progress = +(handledSize / t.totalSize).toFixed(2);
    const completed = handledSize === t.totalSize;
    const result = {
      ...t,
      handledSize,
      timeStarted,
      timeElapsed,
      status: completed ? Status.stoped : Status.running,
      progress,
      completed,
    }
    yield result;
  }
}

export async function* createPipelineStream(p: IPipeline) {
  const testStreams = p.tests.map((t) => createTestProcessingStream(t));
  for await (const stream of testStreams) {
    yield* stream;
  }
}
