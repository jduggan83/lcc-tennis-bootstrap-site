$( document ).ready(function() {
    $.get("https://graph.facebook.com/v2.10/lcctennisclub/posts?fields=description,link,created_time,message,story,name,type&access_token=668537306685838%7C4vvOZgjzjmdW-sw8C3TMX6QCyKI",
        function(data, status){

            for(i=0; i<4; i++){
                addEventToDiv(data.data[i], i)
            }
        }
    );
});

function addEventToDiv(article, index){
    var context = {};

    context.title = article.name;
    context.content = article.message;
    context.type = article.type;

    if(article.type === 'status'){
        context.title = "LCC News";
    }
    else if(article.type === 'event' && article.message == null){
        context.content = article.description;
        context.link = "https://www.facebook.com/events/" + article.id;
    }
    else if(article.type === 'link'){
        context.content = context.content.replace(article.link, '');
        context.link = article.link;
    }

    context.time = moment(article.created_time).fromNow();
    var source   = $("#news-template").html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    $('#news-' + index).append(html);

    return true;
}