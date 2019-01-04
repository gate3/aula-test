const fetch =  jest.fn().mockImplementation(_=> Promise.resolve());
const fetchById =  jest.fn().mockImplementation(id => Promise.resolve());
const save =  jest.fn().mockImplementation(params => Promise.resolve({musicUrl: '', meta: {}}));

const localDb = {
	fetch, 
	fetchById,
	save
};

module.exports = localDb;