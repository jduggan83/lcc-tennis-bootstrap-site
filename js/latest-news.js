$( document ).ready(function() {
    $.get("https://graph.facebook.com/v2.10/lcctennisclub/posts?fields=link,created_time,message,story,name,type&access_token=668537306685838%7C4vvOZgjzjmdW-sw8C3TMX6QCyKI",
        function(data, status){
            var articleCount = 0;

            for(i=0; articleCount<6; i++){
                if(addEventToDiv(data.data[i], 'news-template', 'latest-news-articles-container')){
                    articleCount++;
                }
            }
        }
    );
});

function addEventToDiv(article, templateId, containerId){
    var context = {};
    context.content = article.message;

    if(article.type === 'status'){
        context.title = "LCC News";
    }
    else if(article.type === 'event'){
        context.title = article.story;
    }
    else if(article.type === 'link'){
        context.content = context.content.replace(article.link, 'test');
        context.title = article.name;
    }
    else{
        context.title = article.name;
    }

    context.time = moment(article.created_time).fromNow();
    var source   = $("#" + templateId).html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    $('#' + containerId).append(html);

    return true;
}