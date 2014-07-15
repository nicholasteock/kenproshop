/******************************************************************************
 Products - Bags data
===============================================================================

 Instructions for adding a new bag: 
 1) Save the image of the bag in the img/bags folder.
 2) Copy this segment of code

        {
            "image"         : "img/bag/<Bag Image File Name Here>",
            "description"   : "<Bag Name Here>"
        },

3) Paste it in the 'items' array of the respective brand.

===============================================================================

Instructions for adding a new brand:
1)  Save the image of the brand in the img/brands folder 
2)  Copy this segment of code

        {
            "brand"             : "<Brand Name Here>",
            "brandImage"        : "img/brands/<Brand Image File Name Here>",
            "items"             : []
        },

3)  Paste it in the 'bags' array.
4)  Follow the instructions for adding a new bag into the brand as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format
2)  Brand images should be edited to width 150px
3)  Bag images should be edited to width 230px

******************************************************************************/

module.exports = {
    "bags": [
        {   
            "brand"             : "Brunswick",
            "brandImage"        : "img/brands/brunswick.jpg",
            "items"             : [
                {
                    "image"         : "img/bags/brunswickkoolerbag.gif",
                    "description"   : "Kooler Bag"
                },
                {
                    "image"         : "img/bags/teambrunswickslimtriple.gif",
                    "description"   : "Team Brunswick Slim Triple with shoe compartment"
                },
                {
                    "image"         : "img/bags/brunswickkoolerbag.gif",
                    "description"   : "Kooler Bag"
                },
                {
                    "image"         : "img/bags/teambrunswickslimtriple.gif",
                    "description"   : "Team Brunswick Slim Triple with shoe compartment"
                },
                {
                    "image"         : "img/bags/brunswickkoolerbag.gif",
                    "description"   : "Kooler Bag"
                },
                {
                    "image"         : "img/bags/teambrunswickslimtriple.gif",
                    "description"   : "Team Brunswick Slim Triple with shoe compartment"
                },
            ]
        },
        {   
            "brand"             : "Global 900",
            "brandImage"        : "img/brands/global900.jpg",
            "items"             : [
                {
                    "image"         : "img/bags/Global9003BallDeluxe.gif",
                    "description"   : "900 Global Deluxe 3 Ball Triple Roller"
                },
            ]
        },

    ]
};