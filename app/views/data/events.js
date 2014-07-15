/******************************************************************************
  Events data
===============================================================================

 Instructions for adding a new event: 
 1) Save the image of the event in the img/events folder.
 2) Copy this segment of code

        {
            "image"             : "img/events/<Event Image File Here>",
            "title"             : "<Name Of Event Here>",
            "descriptionTitle"  : "<Heading for event description>",
            "description"       : "<Description of event here>",
        },

3) Paste it in the 'events' array.

******************************************************************************/

module.exports = {

    "events": [
        {
            "image"             : "img/events/demoday.jpg",
            "title"             : "Track / Columbia Ball Demo Day",
            "descriptionTitle"  : "",
            "description"       : "<p>Ken Pro Shop is bringing back the Demo Day where everyone can attend and try out the new balls from Track and Columbia 300. Anyone can sign up and join and there are no obligations to purchase any ball from us. There will be lucky draws during the event itself. Please come if any of you are interested to try out the new balls.</p>"
        },
        // Paste new event here
    ]
    
};