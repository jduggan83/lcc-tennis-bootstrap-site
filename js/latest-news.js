$( document ).ready(function() {
    $.get("https://graph.facebook.com/v2.10/lcctennisclub/posts?fields=link,created_time,message,story,name,type&access_token=668537306685838%7C4vvOZgjzjmdW-sw8C3TMX6QCyKI",
        function(data, status){

            for(i=0; i<4; i++){
                addEventToDiv(data.data[i], i)
            }
        }
    );
});

function addEventToDiv(article, index){
    var context = {};
    context.content = article.message;
    context.link = article.link;

    if(article.type === 'status'){
        context.title = "LCC News";
    }
    else if(article.type === 'event'){
        context.title = article.name;
    }
    else if(article.type === 'link'){
        context.content = context.content.replace(article.link, '');
        context.title = article.name;
    }
    else{
        context.title = article.name;
    }

    context.time = moment(article.created_time).fromNow();
    var source   = $("#news-template").html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    $('#news-' + index).append(html);

    return true;
}