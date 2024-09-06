'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('label');
	const res = await collection.get();
	return {
		code: 0,
		msg: "",
		data: res.data
	}
};