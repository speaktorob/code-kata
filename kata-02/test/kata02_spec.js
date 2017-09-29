const assert = require('assert');
const assert_equal = assert.equal;

const chop = require('../algo-1/bsearch.js');

describe('kata-02', function() {
	it('should pass the given tests', function() {

		assert_equal(-1, chop(3, []))
		assert_equal(-1, chop(3, [1]))
		assert_equal(0,  chop(1, [1]))

		assert_equal(0,  chop(1, [1, 3, 5]))
		assert_equal(1,  chop(3, [1, 3, 5]))
		assert_equal(2,  chop(5, [1, 3, 5]))
		assert_equal(-1, chop(0, [1, 3, 5]))
		assert_equal(-1, chop(2, [1, 3, 5]))
		assert_equal(-1, chop(4, [1, 3, 5]))
		assert_equal(-1, chop(6, [1, 3, 5]))

		assert_equal(0,  chop(1, [1, 3, 5, 7]))
		assert_equal(1,  chop(3, [1, 3, 5, 7]))
		assert_equal(2,  chop(5, [1, 3, 5, 7]))
		assert_equal(3,  chop(7, [1, 3, 5, 7]))
		assert_equal(-1, chop(0, [1, 3, 5, 7]))
		assert_equal(-1, chop(2, [1, 3, 5, 7]))
		assert_equal(-1, chop(4, [1, 3, 5, 7]))
		assert_equal(-1, chop(6, [1, 3, 5, 7]))
		assert_equal(-1, chop(8, [1, 3, 5, 7]))

	});
});