import steem from 'steem'

steem.api.getAccounts(['garox'], function(err, result) {
	console.log(err, result);
});
