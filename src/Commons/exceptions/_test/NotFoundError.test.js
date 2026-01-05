const NotFoundError = require("../NotfoundError")

describe('NotFoundError', () => {
    it('should create error correctly', () => {
        const notfoundError = new NotFoundError('not found!');

        expect(notfoundError.message).toEqual('not found!');
        expect(notfoundError.statusCode).toEqual(404);
        expect(notfoundError.name).toEqual('NotFoundError');
    })
})