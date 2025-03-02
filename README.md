# Group 2: Marimar, Alexis, Dominick, Nicholas

# Tender/CookMe?
  - An app designed to incentivize people to cook meals instead of eating out, specifically for the younger generation. The app allows people to go through recipes and save what they like. Eliminates the pressure of not knowing what to cook.

## Goals
TODO: add a high-level description of what you will deliver in this class
  - Produce a mobile application(iOS/Android) that users can create an account, sign-in, and be able to swipe through images of Food/Recipes, in which they may or may not like. The liked recipes will be saved for the user to go back to.  

## Non-goals
TODO: call out any specific items as non-goals to reduce ambiguity
  - This is not a social media application.
    - No Messaging friends
    - No Profile Pictures

## Features
### p0:
TODO: 3 or more top-priority features
  - Recipe Card Clickable:
    - Displayed with image of Food/Recipe.
    - When clicked the card flips between image of Food and Recipe. 
  - Swipe System:
    - When user swipes right image is saved.
    - When user swipes left image is discarded.
  - Cookbook:
    - This acts as way for users to save recipes.
    - When in the cookbook users can see list of items they liked.
    - Allows users to scroll through and click for recipes just as before.

### p1:
TODO: 3 or more mid-priority features
  - Bottom Bar using React Navigation Router:
    - Option to for Cookbook.
    - Option for Categories. 
  - Categories:
    - Allow for users to specify the types of food they want.
    - Clicking a specific category would prompt user to swipe through related types.
  - Undo Button:
    - Allow for users to undo a swiping action.
    - Brings Recipe Card back and allows user to make decision again.

### p2:
TODO: 3 or more low priority features
  - Sign-in:
    - E-Mail sign-up
  - Sharing Cookbook:
    - Click a specific Recipe Card with share button.
    - Share button can send via message, email, ect.
  - Shopping List:
    - Puts items in recipe into list of ingredients needed.
  - AI Suggestions:
    - Have AI give suggestions on similar recipes that the user may like.
    - The suggestions are tied to what the users like, possibly via the cookbook.

## Engineering details
### Stack
#### Option 1 (preferred): React Native for FE, MongoDB with this framework Node.js for BE.
TODO: describe your preferred stack choices
  - React Native for FE, component-based using JS.
  - MongoDB for user information.
  - Node.js for BE(event-driven servers) 
TODO: add Pros for this stack
  - React Native is well-proven and popular.
  - We all some kind of experience with React Native.
  - Node.js also popular framework and can be used for FE and BE.
  - We have experience using MongoDB.

TODO: add Cons for this stack
  - Not that experienced as a whole using Node.js framework.

#### Option 2: Flutter for FE, Firebase for BE.
TODO: add another stack you considered
  - Flutter and Firebase are both by Google and well-proven. 
TODO: add Pros for this stack
  - Popularity and has bunch of tools to work with.
  - Learn different tools.
TODO: add Cons for this stack
  - No experience working with Flutter or Firebase.
  - Not sure how difficult would be to implement.

## Other details
TODO: add any descriptions, definitions required to grok the design doc
#### Sign-Up View.
Users are prompted to put in email and password to make account.
#### Recipe Card View.
Users can see Recipe/Food card and immediately get into the functionality of swiping left/right in order to save/discard items.
#### Tab View.
Clicking the tab icon will shift screen to the right and showcase options for the user to click on, whether it be Categories, sign-out, etc.
#### Cookbook View.
Clicking the Cookbook will bring to screen that has all of the saved Recipe Cards in which the user can click on for details.
#### Categories View.
Clicking this will bring down sub categories(Specified for specific foods), in which clicking will change the Recipe Cards to fit that niche.
#### Miscellaneous
Each Page will have tab icon, giving the user the chance to go back to specific points in app; i.e. Home, Categories, etc.

#### Note
Some files containing sensitive data were removed, namely: GenerateRecipes.js, SwipeCard.js, and HomeScreen.js.
