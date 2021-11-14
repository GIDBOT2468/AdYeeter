const blockList = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
]
const whitelist = [
	"*://*.kahoot.rocks/*",
	"*://*.zedo.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
	function(details) { return { cancel: true}},
	{ urls: blockList },
	["blocking"]
)


