require('should');
var mymath = require('./index.js');

it('should work', function () {
	mymath.max(2, 3).should.equal(3);
});
