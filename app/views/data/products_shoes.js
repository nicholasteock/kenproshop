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
    "shoes": [
        {
            "brand": "Dexter",
            "brandImage": "img/brands/Dexter.jpg",
            "items": [
                {
                    "image": "img/shoes/sstblkgold.jpg",
                    "description": "Men's SST8 Black/Gold"
                },
                {
                    "image": "img/shoes/ssttank.jpg",
                    "description": "Men's SST Tank"
                },
                {
                    "image": "img/shoes/blublk.jpg",
                    "description": "SST 8 SE Black/Silver/Blue"
                },
                {
                    "image": "img/shoes/sepurp.jpg",
                    "description": "Women's SST 8 SE Black/Purple"
                },
                {
                    "image": "img/shoes/whitegold.jpg",
                    "description": "Men SST8 Black/White/Gold"
                },
                {
                    "image": "img/shoes/redwhite.jpg",
                    "description": "Ladies SST8 Black/White/Red"
                },
                {
                    "image": "img/shoes/blkred.jpg",
                    "description": "Men's SST8 Black/Red"
                },
                {
                    "image": "img/shoes/ana.jpg",
                    "description": "Women ANA Silver/Light Grey"
                },
                {
                    "image": "img/shoes/megan.jpg",
                    "description": "Women's Megan"
                }
            ]
        },
        {
            "brand": "Storm",
            "brandImage": "img/brands/Storm.jpg",
            "items": [
                {
                    "image": "img/shoes/sp900b.jpg",
                    "description": "Men's SP² 900™ - White"
                },
                {
                    "image": "img/shoes/sp900blk.jpg",
                    "description": "Men's SP² 900™ - Black"
                },
                {
                    "image": "img/shoes/602.jpg",
                    "description": "Ladies SP² 602™"
                },
                {
                    "image": "img/shoes/601.jpg",
                    "description": "Ladies StormSP² 601™"
                },
                {
                    "image": "img/shoes/lightning.jpg",
                    "description": "Men's Lightning™"
                },
                {
                    "image": "img/shoes/Electra.jpg",
                    "description": "Ladies Electra™"
                },
                {
                    "image": "img/shoes/Mariah.jpg",
                    "description": "Ladies Mariah™"
                }
            ]
        },
        {
            "brand": "Brunswick",
            "brandImage": "img/brands/Brunswick.jpg",
            "items": [
                {
                    "image": "img/shoes/curve.jpg",
                    "description": "Curve"
                }
            ]
        },
        {
            "brand": "Max",
            "brandImage": "img/brands/dexter.jpg",
            "items": [
                {
                    "image": "img/shoes/maxb.jpg",
                    "description": "Max Interchangeable Shoes Orange"
                },
                {
                    "image": "img/shoes/maxo.jpg",
                    "description": "Max Interchangeable Shoes Orange"
                }
            ]
        },
        {
            "brand": "Pro-am",
            "brandImage": "img/brands/dexter.jpg",
            "items": [
                {
                    "image": "img/shoes/s400.jpg",
                    "description": "S-400"
                }
            ]
        },
        {
            "brand": "Radical",
            "brandImage": "img/brands/dexter.jpg",
            "items": [
                {
                    "image": "img/shoes/radw.jpg",
                    "description": "Basic Shoes White/Gold"
                },
                {
                    "image": "img/shoes/radblk.jpg",
                    "description": "Basic Shoes Black/Silver"
                }
            ]
        }
    ]
};