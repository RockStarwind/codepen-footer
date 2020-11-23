var rsw_powered = rsw_powered || {};
var rsw_series = rsw_series || {};

var SEPARATOR = {
	separator: true
}
var CODEPEN = {
	title: "Codepen",
	url: "https://codepen.io/RockStarwind",
	desc: ""
};
var TWITTER = {
	title: "Twitter",
	url: "https://twitter.com/RockStarwind",
	desc: "Come for the web developer tweets, stay for the bad jokes and other nonsense."
};
var INSTAGRAM = {
	title: "Instagram",
	url: "https://instagram.com/RockStarwind",
	desc: "My updates are more straight to the point there."
};
var GITHUB = 	{
	title: "Github",
	url: "https://github.com/RockStarwind",
	desc: "Don't let the lack of green squares fool you. I love to code."
};
var KOFI = 	{
	title: "Buy me a coffee! (Tip me!)",
	url: "https://ko-fi.com/RockStarwind",
	desc: "If you really like what I do, then come support it by heading over to my Ko-fi and buy me a coffee."
}

// My Links
var rsw_links = [
	CODEPEN,
	TWITTER,
	INSTAGRAM,
	GITHUB,
]

// Part of a series Links
for (var series in rsw_series) {
	// Separator
	var separator = false;
	if (!separator) {
		rsw_links.unshift(SEPARATOR);
		separator = true;
	}
	// Series
	series = series.toLowerCase();
	// :has
	if ([":has", "has"].includes(series)) {
		rsw_links.unshift({
			title: "<span>Part of the series:</span> Emulating :has()",
			url: "https://codepen.io/RockStarwind/pens/tags/?selected_tag=:has",
			desc: "A series of Pens devoted to the emulation and showcase of the possibilities presented by the yet to be supported CSS4 relational pseudo-class, :has()",
			series: true,
			id: "rsw-series-has"
		})
	}
	// Fizzbuzz
	if (["fizzbuzz"].includes(series)) {
		rsw_links.unshift({
			title: "<span>Part of the series:</span> Fizzbuzz &amp; related Pens",
			url: "https://codepen.io/RockStarwind/pens/tags/?selected_tag=fizzbuzz",
			desc: "Why do I keep making Codepens about Fizzbuzz?",
			series: true,
			id: "rsw-series-fizzbuzz"
		})
	}
}

// Powered by Links
for (var library in rsw_powered) {
	// Separator
	var separator = false;
	if (!separator) {
		rsw_links.unshift(SEPARATOR);
		separator = true;
	}
	// Library
	library = library.toLowerCase();
	// EQCSS
	if (library === "eqcss") {
		rsw_links.unshift({
			title: "<span>Powered by</span> Element Queries CSS",
			url: "https://elementqueries.com",
			desc: "A CSS Reprocessor for Element Queries and more!",
			powered: true,
			id: "rsw-powered-eqcss"
		})
	}
	// CSSOMTools
	if (library === "cssomtools") {
		rsw_links.unshift({
			title: "<span>Powered by</span> CSSOMTools<span>; Created by</span> @tomhodgins",
			url: "https://github.com/tomhodgins/cssomtools",
			desc: "The jQuery-for-the-CSSOM! A library for working with CSS stylesheets and rules in the browser.",
			powered: true,
			id: "rsw-powered-cssomtools"
		})
	}
	// Augmented-Ui
	if (["augmented-ui", "augui"].includes(library)) {
		rsw_links.unshift({
			title: "<span>Powered by</span> Augmented-UI<span>; Created by</span> James0x57",
			url: "http://augmented-ui.com/",
			desc: "Cyberpunk-inspired web UI made easy. Get augmented.",
			powered: true,
			id: "rsw-powered-augui"
		})
	}
}

// Loop through links, push html to rsw_html_links array.
var rsw_html_links = [];
for (var i = 0; i < rsw_links.length; i++) {
	if (rsw_links[i].separator) {
		var rsw_html_link = ["<hr class='rsw-separator' />"];
	} else {
		var rsw_html_link = [
			"<div class='rsw-link' ",
				(rsw_links[i].series ? "data-series=''" : "") + " ",
				(rsw_links[i].powered ? "data-powered=''" : "") + " ",
				(rsw_links[i].id ? "id='" + rsw_links[i].id + "'" : ""),
			">",
			"	<a target='_new' href='" + rsw_links[i].url + "'>",
			"		<span>" + rsw_links[i].title + "</span>",
			"	</a>",
			"	<p>" + rsw_links[i].desc + "</p>",
			"</div>"
		];
	}
	rsw_html_links.push(rsw_html_link.join(""));
}
var rsw_html = [
	"<link href='https://rockstarwind.github.io/codepen-footer/style.css' rel='stylesheet' />",
	"<div id='rsw-footer'>",
	"	<div id='rsw-footer-bg'></div>",
	"	<input class='rsw-toggle' id='rsw-toggle-main' type='checkbox' aria-label='Follow @RockStarwind' />",
	"	<div class='rsw-menu' id='rsw-menu-main'><div class='rsw-menu-inner'>",
	rsw_html_links.join(""),
	"	</div></div>",
	"</div>"
]

// Render
document.body.insertAdjacentHTML("beforeend", rsw_html.join(""));
