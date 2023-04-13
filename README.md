# Resources

https://www.youtube.com/watch?v=I4BZQr-5mBY

# Notes
## What is Mocha
- It's a testing framework for JavaSscript.
- It runs on Node.js and the browser.
- You can use any assertion library you wish (e.g. Chai, Should.js etc)
- Mocha provides the hooks
    before()
    after()
    beforeEach()
    afterEach()
* Preconditions and cleanup
- It makes it easy to test asynchronous code (Promises & Async/Await)
- Extensible reporting

## What is Chai
- It's an assertion library for Node.js and the browser.
- Can be paired with any JavaScript testing framework (e.g. Mocha)
- Assertion with Chai provides natural language assertions, expressive and readable style

### Chai Assertion Styles
#### Should
- chai.should()
<!-- ------- -->
- foo.should.be.a('string');
- foo.should.equal('bar');
- foo.should.have.lengthOf(3);
- tea.should.have.property('flavors').with.lengthOf(3);

#### Expect
 - var expect = chai.expect
<!-- ------- -->
- expect(foo).to.be.a('string');
- expect(foo).to.equal('bar');
- expect(foo).to.have.lengthOf(3);
- expect(tea).to.have.property('flavors').with.lengthOf(3);

#### Assert
- var assert = chai.assert
<!-- ------- -->
- assert.typeOf(foo, 'string');
- assert.equal(foo, 'bar');
- assert.lengthOf(foo, 3);
- assert.property(tea, 'flavors');
- assert.lengthOf(tea.flavors, 3);


### NB
* Assertions are statements that run portions of your code and return a boolean pass/fail result.
* The code runner simply executes each of the assertions.
* The code coverage is the table at the end of the report.
* It's essentially analytics used to ensure that you've actually written tests for all possible scenarios



* Mocha (and chai) installed as devDependencies as it will only be used on testing in dev environment