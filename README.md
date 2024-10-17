# MovieTvApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Functional requirements

- ✅ Think of the user experience from the start; responsive design is a must, but consider how you would use the app and make the UX easy to use.
- ✅ When the app loads, the **TV SHOWS** tab should be selected.
- ✅ Clicking on a tab loads the top ~~10~~ MOVIES/TV SHOWS depending on the selected tab. (20 are loaded, since that is the API's number of items per page.)
- ~~The search is performed only when there are 3 or more characters in the search bar, and it should be triggered only one second after the user has stopped typing.~~ (HAD NO TIME TO IMPLEMENT SEARCH FUNCTIONALITY!)
- ~~The search field should be live and react to any change in the input field.~~
- ~~The search should use the search endpoint from **TMDB**.~~
- ~~When the search is performed, results should appear under the search box.~~
- ~~Switching between tabs while searching should trigger the search again with the same search term for the selected tab and update the results.~~
- ✅ **Bonus**: Make the screen infinitely scrollable by loading new items as the user reaches the bottom of the page, keeping the sorting order while new items are loaded.
- **Bonus**: ~~Make any default choices/numbers configurable.~~

## Technical requirements

- ✅ Use the latest stable version of **Angular**.
- ✅ Use **SCSS** with **BEM syntax** when writing style classes.
- ✅ The application should be easily themed.
- ✅ For state management, use Angular services with **RxJS** or **NgRx store**.
- ✅ Each page should have its own route.
- ✅ Make use of **RxJS operators**, **Angular Signals** (Input and Output signals with computed variables), and the new syntax.
- ~~Make components reusable with input and output parameters.~~ (I could have created one reusable component for both TV shows and movies.)
- ✅ Use **Angular animations**.
- **Bonus**: ~~Use the **Angular container-presenter pattern**.~~ (I usually implement this pattern, where there are components that handle logic, and then presenter components that are dumb, just displaying content.)
