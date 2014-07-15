/******************************************************************************
 Hall Of Fame data
===============================================================================

 Instructions for adding a new photo: 
 1) Save the image of the photo in the img/hall-of-fame folder.
 2) Copy this segment of code

        {
            "image"             : "img/hall-of-fame/<Hall Of Fame Image File Here>",
            "descriptionTitle"  : "<Title Of Photo Caption Here>",
            "description"       : "<Photo Caption Here>"
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

3)  Paste it in the 'hallOfFame' array.
4)  Follow the instructions for adding a new photo for that year as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format

******************************************************************************/

module.exports = {

    "hallOfFame": [
        {   
            "year"              : "2013",
            "items"             : [
                {
                    "image"             : "img/hall-of-fame/bowlexpochris.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpochris.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                // Paste new photo for the year 2013 here
            ]
        },
        {   
            "year"              : "2012",
            "items"             : [
                {
                    "image"             : "img/hall-of-fame/bowlexpochris.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2012 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2012 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                // Paste new photo for the year 2012 here
            ]
        },
    ]
    
};