import { getOptions } from './Collection';
import { BASE, SCRAPE, HERO } from './Contant';
import axios from 'axios';

export const makeRequest = (methodName, page = 1) => {
	const url = BASE + SCRAPE;
	const options = getOptions(url, methodName, page);
	return new Promise((resolve, reject) => {
		axios(options)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject({ error: error, res: null });
			});
	});
}

export const getArtwork = () => {
	const url = BASE + HERO;
	const options = getOptions(url, 'hero', 1);
	return new Promise((resolve, reject) => {
		axios(options)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject({ error: error, res: null });
			});
	});
}