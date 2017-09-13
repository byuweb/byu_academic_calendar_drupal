# Academic Calendar Module For Drupal 8

This module generates a block that you can display on your websites. The module displays all academic calendar information and it can't be customized or limited to only certain academic calendar items.

## To Use
Git clone or Download the module. If you download it, make sure to remove '-master' from the module folder name.
Enable the module. It will generate the block.
To place the block, go to the Blocks page and place it in a region and set it on whichever page(s) you would like.

## Screenshots
This module is in use on the new BYU homepage (coming soon!).

## Behind the Scenes
The html is dynamically loaded from the api Michael Kemp built based off the registrar's data. The css and javascript are not dynamically loaded.

Navigating between the 6 months at a time using the < > buttons changes immediately without delay because the data is loaded when the page loads.
