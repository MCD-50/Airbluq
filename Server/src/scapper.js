import request from 'request';
import cheerio from 'cheerio';

import {
	BASE,
	BUZZ,
	STARTUPS,
	ENTREPRENEURSHIP,
	RESOURCES,
	DATALAB,
	PAGE
} from './constant';


export const searchBase = (page, callback) => {
	const url = `${BASE + PAGE}/${page}`;
	request(url, (error, response) => {

		const items = [];
		if (!error && response.statusCode == 200) {
			const $html = cheerio.load(response.body);
			$html('#main').children().each(function (i, e) {
				const $item = $html(this);
				if ($item.hasClass('article-card')) {
					const $base = $item.children().first().children();
					const bigImage = $base.first().attr('style').split("'")[1] || '';
					const smallImage = '';

					let title = $base.first().next().attr('title').trim();
					const contentLink = $base.first().next().attr('href');
					const subTitle = '';

					const $metaBase = $base.first().next().next().children().first().children().last('span.meta').children()

					const postTime = $metaBase.first('span.date').text();
					const readTime = '';

					title = title.length > 50 ? title.substring(0, 50).trim() + '...' : title + '...';

					items.push({
						title, subTitle, smallImage, bigImage, contentLink, readTime, postTime
					});

				} else if ($item.children().first().hasClass('article-card')) {
					const $base = $item.children().first().children().first().children();

					const smallImage = $base.first().attr('style').split("'")[1] || '';
					const bigImage = $base.first().next().attr('style').split("'")[1] || '';
					const $textBase = $base.first().next().next().children().children().first().children();

					let title = $textBase.first().next().children().first().attr('title');
					let contentLink = $textBase.first().next().children().first().attr('href');

					let subTitle = $textBase.first().next().next().attr('title');
					if (!contentLink) {
						contentLink = $textBase.first().next().next().attr('href');
					}

					title = title.length > 50 ? title.substring(0, 50).trim() + '...' : title + '...';
					subTitle = subTitle.length > 50 ? subTitle.substring(0, 50).trim() + '...' : subTitle + '...';


					const postTime = $textBase.last().children().first().text();
					const readTime = $textBase.last().children().last().text();
					items.push({
						title, subTitle, smallImage, bigImage, contentLink, readTime, postTime
					});
				}
			});

			callback({ items: items, error: 'None' });
		} else {
			callback({ items: items, error: 'Something went wrong, Please try again.' });
		}
	})
}

export const searchBuzz = (page, callback) => {
	const url = `${BUZZ + PAGE}/${page}`;
	makeRequest(url, callback);
}


export const searchStartup = (page, callback) => {
	const url = `${STARTUPS + PAGE}/${page}`;
	makeRequest(url, callback);
}


export const searchEntreprenuership = (page, callback) => {
	const url = `${ENTREPRENEURSHIP + PAGE}/${page}`;
	makeRequest(url, callback);
}



export const searchResource = (page, callback) => {
	const url = `${RESOURCES + PAGE}/${page}`;
	makeRequest(url, callback);
}



export const searchDatalab = (page, callback) => {
	const url = `${DATALAB + PAGE}/${page}`;
	request(url, (error, response) => {
		const items = [];
		if (!error && response.statusCode == 200) {
			const $html = cheerio.load(response.body);
			$html('ul.loop_3columns-posts-list').children().each(function (i, e) {
				const $item = $html(this);
				const $base = $item.children();
				const bigImage = $base.first().attr('style').split("'")[1] || '';
				const smallImage = '';

				let title = $base.first().next().text();
				const contentLink = $base.first().attr('href');
				let subTitle = $base.first().next().next().children().text().split('[')[0];

				title = title.length > 50 ? title.substring(0, 50).trim() + '...' : title + '...';
				subTitle = subTitle.length > 50 ? subTitle.substring(0, 50).trim() + '...' : subTitle + '...';


				const $metaBase = $base.first().next().next().next().children().first();

				const postTime = $metaBase.next().next().text();
				const readTime = $metaBase.next().text();

				items.push({
					title, subTitle, smallImage, bigImage, contentLink, readTime, postTime
				});
			});

			callback({ items: items, error: 'None' });
		} else {
			callback({ items: items, error: 'Something went wrong, Please try again.' });
		}
	})
}


const makeRequest = (url, callback) => {
	request(url, (error, response) => {
		const items = [];
		if (!error && response.statusCode == 200) {
			const $html = cheerio.load(response.body);
			$html('ul.loop_default-posts-list').children().each(function (i, e) {
				const $item = $html(this);
				const $base = $item.children();
				const bigImage = '';
				const smallImage = '';

				let title = $base.first().text();
				const contentLink = $base.first().attr('href');
				let subTitle = $base.first().next().text().split('[')[0];

				title = title.length > 50 ? title.substring(0, 50).trim() + '...' : title + '...';
				subTitle = subTitle.length > 50 ? subTitle.substring(0, 50).trim() + '...' : subTitle + '...';


				const $metaBase = $base.first().next().next().children().first();

				const postTime = $metaBase.next().next().text();
				const readTime = $metaBase.next().text();

				items.push({
					title, subTitle, smallImage, bigImage, contentLink, readTime, postTime
				});
			});

			callback({ items: items, error: 'None' });
		} else {
			callback({ items: items, error: 'Something went wrong, Please try again.' });
		}
	})
}