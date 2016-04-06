import plusOne from 'plusOne';

describe('plusOne', () => {
  it('should add one to the given number', () => {
    let random = _.random(5);
    let number = plusOne(1);
    expect(number).toBe(3);
  });

  // it('should test everything', () => {
    // let number = plusOne(1, true);
    // expect(number).toBe('meow');
  // });
});
