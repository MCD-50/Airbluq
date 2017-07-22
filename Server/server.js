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
});


app.post('/hero', (req, res) => {
	searchBase(1, (results) => {
		res.json(results)
	});
});
