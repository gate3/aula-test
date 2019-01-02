const COLLECTIONS = {
	MUSIC:'Music'
};

const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adp = new FileAsync('db.json');
const defaults = {};
defaults[COLLECTIONS.MUSIC] = [];

const save = (data, collection = COLLECTIONS.MUSIC) => {
	return new Promise((resolve, reject) => {
		low(adp)
			.then(db => {
				db.get(collection)
					.push(data)
					.last()
					.assign({ _id: Date.now().toString() })
					.write()
					.then(resolve, reject);
            
				db.defaults(defaults).write();
			});
	});
};

const fetch = (query = null, collection = COLLECTIONS.MUSIC) => {
	return new Promise((resolve) => {
		low(adp).then(db =>{
			const data = query == null ? db.get(collection).value():db.get(collection).find(query).value();
			resolve(data);
			db.defaults(defaults).write();
		});
	});
};

const fetchById = (_id) => {
	return fetch({_id});
};

module.exports = {
	fetch,
	fetchById,
	save,
	COLLECTIONS,
	dbInstance:low
};