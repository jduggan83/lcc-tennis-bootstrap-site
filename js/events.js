$( document ).ready(function() {
   $.get("https://graph.facebook.com/v2.10/lcctennisclub/events?fields=id,cover,description,event_times,name&time_filter=upcoming&access_token=668537306685838%7C4vvOZgjzjmdW-sw8C3TMX6QCyKI",
     function(data, status){
            var events = [];

            for(var i=0; i<data.data.length; i++){
                events.push(createEvent(data.data[i]));
            }

            events = _.sortBy(events, 'start_date');

            for(var i=0; i < 4; i++){
                addArticleToDiv(events[i], i);
            }
        }
  );
});

function createEvent(article){
    var today = new Date();
    today.setHours(0,0,0,0);

    var context = {};

    var future_times = [];

    if(article.event_times != null){
        for(var i=0; i< article.event_times.length; i++){
            if(Date.parse(article.event_times[i].start_time) > _.now()){
                future_times.push(article.event_times[i])
            }
        }

        var times = _.sortBy(future_times, 'start_time');
        context.start_date = times[0].start_time;
        context.date = moment(times[0].start_time).format('dddd, MMMM Do');
        context.start_time = moment(times[0].start_time).format('h:mma');
        context.end_time = moment(times[0].end_time).format('h:mma');
     }

    context.title = article.name;


    if(article.description != null){
        context.content = article.description.substring(0,50);
    }
    context.link = "https://www.facebook.com/events/" + article.id;

    if(article.cover){
        context.picture = article.cover.source;
    }

    return context;
}

function addArticleToDiv(context, divIndex){
    var source   = $("#event-template").html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    $('#event-' + divIndex).append(html);

    return true;
}