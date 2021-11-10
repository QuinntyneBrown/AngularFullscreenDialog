# Fullscreen Dialog using Angular Material

## Overview

Dialogs are panels that are overlayed in a UI in order to present the user some information or ask for a relatively small action. The panel shouldn't be as involved as the routable views of the applications. Although, on occassion, the design may ask for a fullscreen dialog, essentially having the appearance of a routable view.

## Goals
- Open an Angular Material dialog as a fullscreen view

## Non Goals
- Not Applicable

## Why
- Design requires a dialog to be fullscreen

## Risks
- None

## Design
To achieve our goals, we have to:
1. Create a Dialog Component
2. Add stying for the component to be take the fullscreen
3. Override any styling by Angular Material preventing our component to appear to be fullscreen

Creating the component and styling it to be fullscreen is straightfoward. When the Angular Material dialog service open's the component, it adds an inline style of max-width:80vw to the cdk-overlay-panel which wraps our component. Also the mat-dialog-container which also wraps our component is styled with a border-radius. Both of these styles need to be overriden in order to give our component a fullscreen appearance.

The following code should do the trick:
```scss
  max-width: 100vw !important;
  mat-dialog-container.mat-dialog-container {
    border-radius: 0;
  }
````

At this point we have two options for adding the styles:
1. Add a panel class and pass it as a parameter to the open method when using the Angular Material dialog class to open the dialog
2. Inside the scss of our dialog component we can add the styles, using ::ng-deep

```scss
::ng-deep .cdk-overlay-pane {
  max-width: 100vw !important;
  mat-dialog-container.mat-dialog-container {
    border-radius: 0;
  }
}
````

Option 1 is a little more expressive for developers mataining the code after the initial development. That can see that there is a panel class add to override the initial panel styles. Option 2 is a little cleaner and preferred if the convention is known amongst the team.


## Conclusion
With not too much effort we can achieve the goal of a fullscreen dialog using Angular Material, but like with everyhting, it depends when it comes to how to design the solution. More spefically, it depends on where the team expects for overrides of the container elements to be in scss with the component or with the dialog open method call.

## Give a Star! :star:

If you like or are using this project to learn, please give it a star. Thanks!

