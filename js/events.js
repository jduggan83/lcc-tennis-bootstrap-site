$( document ).ready(function() {
   for(var i=0; i < 4; i++){
       addArticleToDiv(events[i], i);
   }
});

function addArticleToDiv(context, divIndex){
    var source   = $("#event-template").html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    $('#event-' + divIndex).append(html);

    return true;
}

var events = [{
    "title": "Beginner to Improver Coaching",
    "day": "Mondays",
    "start_time": "7:15pm",
    "end_time": "8:30pm",
    "content":"Beginner to Improver sessions on every Monday evening from 7:15pm - 8:30pm",
    "picture": "https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/57377514_2418759378155607_5525082346602102784_o.jpg?_nc_cat=110&_nc_sid=b386c4&_nc_ohc=iTZYzjmnBrUAX92Spd6&_nc_ht=scontent-dub4-1.xx&oh=75d664c2e1af1be13f771dc8896fcddc&oe=5EA76C28"
},
{
    "title": "Club Player Coaching",
    "day": "Wednesdays",
    "start_time": "7:15pm",
    "end_time": "8:30pm",
    "content":"Club player sessions on every Wednesday evening from 7:15pm - 8:30pm",
    "picture": "https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/39273405_2045232528841629_9046125226244440064_o.jpg?_nc_cat=108&_nc_sid=b386c4&_nc_ohc=p0hh2y3a3UgAX_u9KiT&_nc_ht=scontent-dub4-1.xx&oh=d7ad84b3c0c721dae2be4747e52e09bb&oe=5EA6D9A8"
},
{
    "title": "Thursday Night Social Tennis",
    "day": "Thursdays",
    "start_time": "7:30pm",
    "end_time": "9:30pm",
    "content":"Social night runs every thursday night from 7:30pm sharp. A good few different matches will be organised for everybody throughout the night",
    "picture": "https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/57133835_2418750834823128_5201282691982426112_o.jpg?_nc_cat=106&_nc_sid=b386c4&_nc_ohc=5ul6lxuBtG4AX-uDN6U&_nc_ht=scontent-dub4-1.xx&oh=21792726e747864b6994823bc8acc83e&oe=5EA4D9BB"
},
{
    "title": "Ladies Morning Tennis Coaching",
    "day": "Wednesdays",
    "start_time": "10:00am",
    "end_time": "11:15am",
    "content":"Ladies morning coaching sessions on every Friday from 10:00am - 11:15am",
    "picture": "https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/56917884_2418765141488364_4725460260444176384_o.jpg?_nc_cat=106&_nc_sid=b386c4&_nc_ohc=MLwoZrnSiyQAX-87oKO&_nc_ht=scontent-dub4-1.xx&oh=bdf42e577cbb297f9b5bb93f2b764762&oe=5EA67571"
}
]