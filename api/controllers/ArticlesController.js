/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list:function(req,res) {
        sails.log.info('I am an info-level message.');
        sails.log('I am a debug-level message');
        sails.log.warn('I am a warn-level message');
        var twitter = require('twitter');
        var twit = new twitter({
            consumer_key: '0XG5299e6oSESyHvLGIMGmwW3',
            consumer_secret: 'kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW',
            access_token_key: '3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h',
            access_token_secret: 'TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl',
        });
        sails.log.info(req.param('query'));
        twit.get('search/tweets',{q: req.param('query')}, (error, tweets, response) => {
            if (error) {
                console.log(error);
                throw error;
            }
            console.log(tweets);
            return res.jsonx({"tweet": tweets});
        });
        // res.view('list', tweets);
    }
	
};

