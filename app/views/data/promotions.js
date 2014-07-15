/******************************************************************************
  Promotions data
===============================================================================

 Instructions for adding a new promotion: 
 1) Save the image of the service in the img/promotions folder.
 2) Copy this segment of code

        {
            "image"             : "img/promotions/<Promotion Image File Here>",
            "title"             : "<Name Of Promotion Here>",
            "descriptionTitle"  : "<Heading for promotion description>",
            "description"       : "<Description of promotion here>",
        },

3) Paste it in the 'promotions' array.

******************************************************************************/

module.exports = {

    "promotions": [
        {
            "image"             : "img/promotions/offerset.gif",
            "title"             : "Offer Set Promotion",
            "descriptionTitle"  : "Offer Set promotion for beginner/advance bowlers",
            "description"       : "<p>Columbia 300 bowling ball + bowling shoes + single ball bag + ball polisher @ S$175</p><p>Ebonite bowling ball + bowling shoes + single ball bag + ball polisher @ S$255</p>"
        },
        // Paste new promotion here
    ]

};