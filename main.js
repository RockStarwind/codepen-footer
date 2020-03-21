var rsw_powered = {};
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

// Powered by Links
if (rsw_powered["eqcss"]) {
	rsw_links.unshift({
		title: "<span>Powered by</span> Element Queries CSS",
		url: "https://elementqueries.com",
		desc: "A CSS Reprocessor for Element Queries & More",
		powered: true
	})
}
if (rsw_powered["cssomtools"]) {
	rsw_links.unshift({
		title: "<span>Powered by</span> CSSOMTools<span>; Created by</span> @tomhodgins",
		url: "https://github.com/tomhodgins/cssomtools",
		desc: "The 'jQuery-for-the-CSSOM', a library for working with CSS stylesheets and rules in the browser",
		powered: true
	})
}

// Loop through links, push html to rsw_html_links array.
var rsw_html_links = [];
for (var i = 0; i < rsw_links.length; i++) {
	var rsw_html_link = [
		"<div class='rsw-link'" + (rsw_links[i].powered ? "data-powered" : "") + ">",
		"	<a target='_new' href='" + rsw_links[i].url + "'>",
		"		<span>" + rsw_links[i].title + "</span>",
		"	</a>",
		"	<p>" + rsw_links[i].desc + "</p>",
		"</div>"
	];
	rsw_html_links.push(rsw_html_link.join(""));
}
var rsw_html = [
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
