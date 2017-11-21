$( document ).ready(function() {
    $.get("https://graph.facebook.com/v2.10/lcctennisclub/events?fields=cover,description,start_time,name&access_token=668537306685838%7C4vvOZgjzjmdW-sw8C3TMX6QCyKI",
        function(data, status){
            var articleCount = 0;

            for(i=0; articleCount<6; i++){
                if(addArticleToDiv(data.data[i], 'event-template', 'events-articles-container')){
                    articleCount++;
                }
            }
        }
    );
});

function addArticleToDiv(article, templateId, containerId){
    var context = {};
    context.title = article.name;
    context.time = moment(article.start_time).format('dddd MMMM Do');

    if(article.cover){
        context.picture = article.cover.source;
    }

    var source   = $("#" + templateId).html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    $('#' + containerId).append(html);

    return true;
}