const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

import {
	searchBase,
	searchBuzz,
	searchStartup,
	searchEntreprenuership,
	searchResource,
	searchDatalab
} from './src/scapper';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'src')));
app.use(cors());
app.listen(process.env.PORT || 2000);
app.get('/', (req, res) => res.json({ items: [], error: '' }));



app.post('/scrape', (req, res) => {
	if (req.body && req.body.method && req.body.params) {
		const { method, params } = req.body;
		method.includes('searchBase') && searchBase(params.page || 1, (results) => {
			res.json(results)
		});
		method.includes('searchBuzz') && searchBuzz(params.page || 1, (results) => {
			res.json(results)
		});
		method.includes('searchStartup') && searchStartup(params.page || 1, (results) => {
			res.json(results)
		});
		method.includes('searchEntreprenuership') && searchEntreprenuership(params.page || 1, (results) => {
			res.json(results)
		});
		method.includes('searchResource') && searchResource(params.page || 1, (results) => {
			res.json(results)
		});
		method.includes('searchDatalab') && searchDatalab(params.page || 1, (results) => {
			res.json(results)
		});
	} else {
		res.json({ items: [], error: 'Request body empty.' });
	}
	// //build query
	// const pagenum = "?pagenum=" + body.page_number || "?pagenum=1";
	// const action = ACTION;
	// let search_string = "&search_string=" + body.search_string || "top news";
	// const language_id = "&language_id=" + get_lang_id(body.language_name)

	// //request query
	// const request_url = BASE + pagenum + action + search_string + language_id;
	// //const request_url = BASE + '?pagenum=1&action=search&results_type=news&sort_type=-pub-datetime&search_string=india&language_id=29';

	// request(request_url, (error, response, html) => {
	// 	// First we'll check to make sure no errors occurred when making the request
	// 	const items = [];
	// 	if (!error && response.statusCode == 200) {
	// 		// Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
	// 		const $html = cheerio.load(response.body);

	// 		$html("div.news-story").each(function (i, e) {
	// 			const title = $html(this).children('div.title').children('a.healine').children().text()
	// 			const author = $html(this).children('div.title').next().text();
	// 			const published_at = $html(this).children('div.summary').prev().text();
	// 			const description = $html(this).children('div.summary').children().text();
	// 			const url = $html(this).children('div.title').next().attr('href')
	// 			items.push({
	// 				title: title, author: author,
	// 				published_at: published_at,
	// 				description: description,
	// 				url: url
	// 			});
	// 		});

	// 		res.json(prepare_response(items));
	// 	} else {
	// 		res.json(prepare_response(items));
	// 	}
	// })

})
