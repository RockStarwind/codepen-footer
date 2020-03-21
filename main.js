var rsw_powered = rsw_powered || {};
var rsw_series = rsw_series || {};

// My Links
var rsw_links = [
	{
		title: "Codepen",
		url: "https://codepen.io/RockStarwind",
		desc: ""
	},
	{
		title: "Twitter",
		url: "https://twitter.com/RockStarwind",
		desc: ""
	},
	{
		title: "Instagram",
		url: "https://instagram.com/RockStarwind",
		desc: ""
	},
	{
		title: "Github",
		url: "https://github.com/RockStarwind",
		desc: ""
	},
	{
		title: "Buy me a coffee! (Tip me!)",
		url: "https://ko-fi.com/RockStarwind",
		desc: ""
	}
]

// Part of a series Links
for (var series in rsw_series) {
	series = series.toLowerCase();
	// EQCSS
	if ([":has", "has"].includes(series)) {
		rsw_links.unshift({
			title: "<span>Part of the series:</span> Emulating :has()",
			url: "https://codepen.io/RockStarwind/pens/tags/?selected_tag=:has",
			desc: "A series of Pens devoted to the emulation and showcase of the possibilities presented by the yet to be supported CSS4 relational pseudo-class, :has()",
			series: true,
			id: "rsw-series-has"
		})
	}
}

// Powered by Links
for (var library in rsw_powered) {
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
	rsw_html_links.push(rsw_html_link.join(""));
}
var rsw_html = [
	"<link href='https://rockstarwind.github.io/codepen-footer/style.css' rel='stylesheet' />",
	"<div id='rsw-footer'>",
	"	<div id='rsw-footer-bg'></div>",
	"	<input id='rsw-toggle' type='checkbox' />",
	"	<div id='rsw-menu'>",
	"		<div id='rsw-menu-inner'>",
	rsw_html_links.join(""),
	"		</div>",
	"	</div>",
	"</div>"
]

// Render
document.body.insertAdjacentHTML("beforeend", rsw_html.join(""));
