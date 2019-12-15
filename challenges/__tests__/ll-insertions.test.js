const { Node, LinkedList } = require('../ll-insertions/ll-insertions.js');

describe('ll-insertions', () => {
    // beforeEach(() => {
        // console.log(this, "this")
        // recipe = await Recipe.create({
        //   name: 'cookies',
        //   ingredients: [
        //     { name: 'flour', amount: 1, measurement: 'cup' }
        //   ],
        //   directions: [
        //     'preheat oven to 375',
        //     'mix ingredients',
        //     'put dough on cookie sheet',
        //     'bake for 10 minutes'
        //   ],
        // });
    it('should add a node to the end of a linked list', () => {
        LinkedList.head = 1
        expect(appendValue(2).toEqual(1, 2);
        // expect(([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    });
});