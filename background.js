/// this is the background code...
chrome.browserAction.onClicked.addListener(function (tab) {	/// listen for our browerAction to be clicked
	chrome.tabs.executeScript(tab.id, {file: 'inject.js'});		/// for the current tab, inject the "inject.js" file & execute it
});