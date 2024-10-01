'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection("article");
	const res = await collection.field({
		id: true,
		title: true,
		author: true,
		browse_count: true,
		classify: true,
		collection_count: true,
		comments_count: true,
		cover: true,
		create_time: true,
		mode: true,
		thumbs_up_count: true
	}).get();
	return {
		code: 0,
		msg: "",
		data: res.data
	}
};