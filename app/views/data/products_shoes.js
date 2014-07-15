/******************************************************************************
 Products - Shoes data
===============================================================================

 Instructions for adding a new shoe: 
 1) Save the image of the shoe in the img/shoes folder.
 2) Copy this segment of code

        {
            "image"         : "img/shoes/<Shoe Image File Name Here>",
            "description"   : "<Shoe Name Here>"
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

3)  Paste it in the 'shoes' array.
4)  Follow the instructions for adding a new shoe into the brand as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format
2)  Brand images should be edited to width 150px
3)  Shoe images should be edited to width 230px

******************************************************************************/

module.exports = {

    'shoes': [
        {   
            "brand"             : "Storm",
            "brandImage"        : "img/brands/storm.jpg",
            "items"             : [
                {
                    "image"         : "img/shoes/stormlightning.gif",
                    "description"   : "Men's Lightning™"
                },
                {
                    "image"         : "img/shoes/stormsp2.gif",
                    "description"   : "Men's SP² 900™ (White)"
                },
            ]
        },
        {   
            "brand"             : "Dexter",
            "brandImage"        : "img/brands/dexter.jpg",
            "items"             : [
                {
                    "image"         : "img/shoes/stormlightning.gif",
                    "description"   : "Men's Lightning™"
                },
                {
                    "image"         : "img/shoes/stormsp2.gif",
                    "description"   : "Men's SP² 900™ (White)"
                },
            ]
        },
    ]
    
};