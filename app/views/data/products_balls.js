/******************************************************************************
 Products - Balls data
===============================================================================

 Instructions for adding a new ball: 
 1) Save the image of the ball in the img/balls folder.
 2) Copy this segment of code

        {
            "image"         : "img/balls/<Ball Image File Name Here>",
            "description"   : "<Ball Name Here>"
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

3)  Paste it in the 'balls' array.
4)  Follow the instructions for adding a new ball into the brand as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format
2)  Brand images should be edited to width 150px
3)  Ball images should be edited to width 230px

******************************************************************************/

module.exports = {

    "balls": [
        {   
            "brand"             : "Ebonite",
            "brandImage"        : "img/brands/ebonite.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/pivotpoint.jpg",
                    "description"   : "Pivot Point"
                },
                {
                    "image"         : "img/balls/Pivot.jpg",
                    "description"   : "Pivot"
                },
                {
                    "image"         : "img/balls/source.jpg",
                    "description"   : "Source"
                },
                {
                    "image"         : "img/balls/champion.jpg",
                    "description"   : "Champion"
                },
                {
                    "image"         : "img/balls/angryred.jpg",
                    "description"   : "Angry Bird (Red)"
                },
                {
                    "image"         : "img/balls/blackbird.jpg",
                    "description"   : "Angry Bird (Black)"
                },
                {
                    "image"         : "img/balls/greenpig.jpg",
                    "description"   : "Angry Bird (Green Pig)"
                },
                {
                    "image"         : "img/balls/maxim.jpg",
                    "description"   : "Maxim"
                },
                {
                    "image"         : "img/balls/cyclone.jpg",
                    "description"   : "Cyclone"
                },
            ]
        },
        {
            "brand"             : "Hammer",
            "brandImage"        : "img/brands/hammer.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/assasin.jpg",
                    "description"   : "Black Widow Assassin"
                },
                {
                    "image"         : "img/balls/deadlyaim.jpg",
                    "description"   : "Deadly Aim"
                },
                {
                    "image"         : "img/balls/abshook.jpg",
                    "description"   : "Absolut Hook"
                },
            ]
        },
        {
            "brand"             : "Columbia 300",
            "brandImage"        : "img/brands/c300logo.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/insane.jpg",
                    "description"   : "N'S@ne Antics"
                },
                {
                    "image"         : "img/balls/crazy.jpg",
                    "description"   : "Crazy Antics"
                },              
            ]
        },
        {
        
            "brand"             : "Track",
            "brandImage"        : "img/brands/tracklogo.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/lx16.jpg",
                    "description"   : "Lx16"
                },
                {
                    "image"         : "img/balls/mx10.jpg",
                    "description"   : "Mx10"
                },  
                {
                    "image"         : "img/balls/hx05.jpg",
                    "description"   : "Hx05"
                },              
                {
                    "image"         : "img/balls/400ase.jpg",
                    "description"   : "400A SE"
                },              
            ]
        },
        {
        
            "brand"             : "Brunswick",
            "brandImage"        : "img/brands/brunswick.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/meleecross.jpg",
                    "description"   : "Melee Cross"
                },
                {
                    "image"         : "img/balls/exile.jpg",
                    "description"   : "Fortera Exile"
                },  
                {
                    "image"         : "img/balls/melee.jpg",
                    "description"   : "Melee"
                },              
                {
                    "image"         : "img/balls/helloblk.jpg",
                    "description"   : "Hello Kitty Black"
                },
                {
                    "image"         : "img/balls/smiley.jpg",
                    "description"   : "Smiley Viz-a-Ball"
                },      
            ]
        },
        {
        
            "brand"             : "DV8",
            "brandImage"        : "img/brands/dv8.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/schizo.jpg",
                    "description"   : "Ruckus Schizo"
                },
                {
                    "image"         : "img/balls/rudedude.jpg",
                    "description"   : "Rude Dude"
                },  
                {
                    "image"         : "img/balls/dude.jpg",
                    "description"   : "Dude"
                },                              
            ]
        },
        {
        
            "brand"             : "Storm",
            "brandImage"        : "img/brands/storm.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/optimus.jpg",
                    "description"   : "Optimus"
                },
                {
                    "image"         : "img/balls/punchout.jpg",
                    "description"   : "Punch Out"
                },  
                {
                    "image"         : "img/balls/zero.jpg",
                    "description"   : "Zero Gravity"
                },
                {
                    "image"         : "img/balls/pitchblk.jpg",
                    "description"   : "Pitch Black"
                },  
                {
                    "image"         : "img/balls/fusion.jpg",
                    "description"   : "IQ Tour Fusion"
                },          
            ]
        },
        {
        
            "brand"             : "Roto Grip",
            "brandImage"        : "img/brands/roto.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/sinister.jpg",
                    "description"   : "Sinister"
                },
                {
                    "image"         : "img/balls/hyper.jpg",
                    "description"   : "Hyper Cell"
                },  
                {
                    "image"         : "img/balls/asylum.jpg",
                    "description"   : "Asylum"
                },
                {
                    "image"         : "img/balls/uproar.jpg",
                    "description"   : "Uproar"
                },  
            ]
        },  
        {
        
            "brand"             : "OTB",
            "brandImage"        : "img/brands/otb.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/belmo.jpg",
                    "description"   : "Jason Belmonte Bowling Foundation"
                },  
                {
                    "image"         : "img/balls/splitters.jpg",
                    "description"   : "PBA Silver Lake Atom Splitters"
                },
                {
                    "image"         : "img/balls/singapore.jpg",
                    "description"   : "Singapore Flag"
                },
            ]
        },
        {
        
            "brand"             : "Spinner Balls",
            "brandImage"        : "",
            "items"             : [
                {
                    "image"         : "img/balls/codered.jpg",
                    "description"   : "Code Red"
                },
                {
                    "image"         : "img/balls/champion.jpg",
                    "description"   : "Champion"
                },  
                {
                    "image"         : "img/balls/source.jpg",
                    "description"   : "Source"
                },
                {
                    "image"         : "img/balls/zero.jpg",
                    "description"   : "Zero Gravity"
                },
            ]
        }

    ]
    
};