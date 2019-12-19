const { PseudoQueue } = require('../queueWithStacks/queue-with-stacks');

describe('PseudoQueue Class', () => {
  const pseudoqueue = new PseudoQueue;
  it ('sets up queue', () => {
    pseudoqueue.enqueue(20);
    expect(pseudoqueue.toString()).toEqual('20 -> ');
  });
  it ('removes item from queue', () => {
    pseudoqueue.dequeue();
    expect(pseudoqueue.toString()).toEqual('');
  });
});
