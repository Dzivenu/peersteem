import steem from 'steem'

steem.api.getAccounts(['garox'], function(err, result) {
	console.info(result[0])
	let metadata = JSON.parse(result[0].json_metadata)
	console.info(metadata.profile.profile_image)
	var app = new Vue({
	      el: '#app',
	      data: {
	        message: result[0].sbd_balance,
					image: metadata.profile.profile_image,
					author: result[0].name
	      }
	    })
});
