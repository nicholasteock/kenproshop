/******************************************************************************
 Photo gallery data
===============================================================================

 Instructions for adding a new photo: 
 1) Save the image of the photo in the img/gallery folder.
 2) Copy this segment of code

        {
            "image"         : "img/gallery/<Photo Image File Here>",
            "date"          : "<Date Of Photo Here>",
            "description"   : "<Photo Caption Here>"
        },

3) Paste it in the 'items' array of the respective year.

===============================================================================

Instructions for adding a new year:
1)  Copy this segment of code

        {   
            "year"              : "<Year Here>",
            "items"             : [
                // Paste new photo for the year <Year Here> here
            ]
        },

3)  Paste it in the 'gallery' array.
4)  Follow the instructions for adding a new photo for that year as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format

******************************************************************************/

module.exports = {

    "gallery": [
        // Paste new year here

        // Begin 2013 Gallery
        //=====================================================================
        {   
            "year"              : "2013",
            "items"             : [
                {
                    "image"         : "img/gallery/bowlexpochris.gif",
                    "date"          : "21 July 2013",
                    "description"   : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
                },
                {
                    "image"         : "img/gallery/bowlexpobilloneil.gif",
                    "date"          : "21 July 2013",
                    "description"   : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
                },
                // Paste new photo for the year 2013 here
            ]
        },
        //=====================================================================
        // End 2013 Gallery

        // Begin 2012 Gallery
        //=====================================================================
        {   
            "year"              : "2012",
            "items"             : [
                {
                    "image"         : "img/gallery/bowlexpochris.gif",
                    "date"          : "21 July 2012",
                    "description"   : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
                },
                {
                    "image"         : "img/gallery/bowlexpobilloneil.gif",
                    "date"          : "21 July 2012",
                    "description"   : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
                },
                // Paste new photo for the year 2012 here
            ]
        },
        // End 2012 Gallery
        //=====================================================================
    ]

};