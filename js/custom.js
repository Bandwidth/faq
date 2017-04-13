String.prototype.toCamelCase = function(){
  return this.replace(/\s(\w)/ig, function(all, letter){return letter.toUpperCase();})
             .replace(/(^\w)/, function($1){return $1.toLowerCase()});
};

module.exports = function ($) {
	var title = $('title').text();

	if(title.indexOf(' · GitBook')  > 0) {
		var newTitle = title.replace(' · GitBook', '');
		$('title').text(newTitle);
	}

	var pattern = /(?:\d*\.)?\d+ articles/i;

	$('.panel-title').each(function (i, elem) {
		var header = $(elem);
		var str = header.text().replace(pattern, "").trim().toCamelCase();
		var html = '<a name="' + str + '"/>';
		$(elem).after(html);

	});

	return $.html();
}