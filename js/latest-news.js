$( document ).ready(function() {
    $.get("https://graph.facebook.com/v2.10/lcctennisclub?fields=feed.limit(20){type,story,message,picture,icon,link,name,created_time}&access_token=668537306685838%7C4vvOZgjzjmdW-sw8C3TMX6QCyKI",
        function(data, status){
            var articleCount = 0;

            for(i=0; articleCount<4; i++){
                if(addArticleToDiv(data.feed.data[i], 'sub-article-template', 'latest-sub-articles-container')){
                    articleCount++;
                }
            }
        }
    );
});

function addArticleToDiv(article, templateId, containerId){
    var context = {};
    context.content = article.message;
    context.picture = article.picture;

    if(article.type === 'status'){
        return false;
    }
    else if(article.type === 'event'){
        context.title = article.name;
    }
    else{
        context.title = "LCC News";
    }

    context.time = moment(article.created_time).fromNow();
    var source   = $("#" + templateId).html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    $('#' + containerId).append(html);

    return true;
}