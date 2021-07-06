# Ewokr

- This is my hot new business idea - a dating app for Ewoks!
- I can't code very well though, so I need some hotshot devs to tidy this up, and add some TypeScript, which I hear is the new cool thing.
- I've only just starting listing all the different fur types, I'd like this to be a list of unique references, so it doesn't get messy as the list grows.

### The rules of Ewok dating
- Patterned Ewoks are very fussy, they only ever like other patterned Ewoks.
- Otherwise each ewok can have a fur preference.
- Some open minded Ewoks like to date Wookies, but only if they share the same favourite food.
- Sometimes droids like to dress up as Ewoks to go on dates as Ewoks. I know that sounds wierd, but for the sake of TypeScript, just run with it.

### THE CHALLENGE
1) Check your VS Code is set up for TypeScript - you should see an error on test.ts
2) Rename star-wars-dating.js to .ts
3) Create an `Ewok` type and a `Wookie` type based on the data examples
4) Use these to type both `ewokList` and `wookieList` - you wouldn't normally do this, but it's a way to check your types are correct
5) Use both `in` and `is` to create an isWookie helper function that will help TypeScript understand if the potential date is a Wookie
6) Type the params of both pre-existing functions and investigate / fix any errors
7) Change the fur types object into an enum, as use the enum name as a type
8) Create an `EwokDroid` type; type the `droidsDisguisedAsEwoks` list to check your type is correct
9) Allow `EwokDroid` as an option for the ewok param in the `ewokCompatibilityChecker` function
10) Use the `as` keyword to deal with any errors that arise from this

