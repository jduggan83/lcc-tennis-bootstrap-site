$( document ).ready(function() {
    $.get("https://graph.facebook.com/v2.10/lcctennisclub/events?fields=cover,description,start_time,name&access_token=668537306685838%7C4vvOZgjzjmdW-sw8C3TMX6QCyKI",
        function(data, status){
            var events = [];
            var today = new Date();
            today.setHours(0,0,0,0);

            for(i=0; i<data.data.length; i++){
                if(data.data[i].start_time > today){
                    events.push(data.data[i])
                }
            }

            _.sortBy(events, 'start_time');
            for(i=0; i<2; i++){
                addArticleToDiv(events[i], i);
            }
        }
    );
});

function addArticleToDiv(article, divIndex){
    var context = {};

    context.title = article.name;
    context.time = moment(article.start_time).format('dddd MMMM Do, h:mma');
    context.content = article.description;

    if(article.cover){
        context.picture = article.cover.source;
    }

    var source   = $("#event-template").html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    $('#event-' + divIndex).append(html);

    return true;
}