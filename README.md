# Fullscreen Dialog using Angular (Material)

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
To achieve goals:
1. Create a Dialog Component
2. Add stying for the component to be take the fullscreen
3. Override any styling by Angular Material preventing our component to appear to be fullscreen

Creating the component and styling it to be fullscreen is straightfoward. When the Angular Material dialog service open's the component, it adds an inline style of max-width:80vw to the cdk-overlay-panel which wraps the component. Also the mat-dialog-container which also wraps the component is styled with a border-radius. Both of these styles need to be overriden in order to give the component a fullscreen appearance.

The following code works:
```scss
  max-width: 100vw !important;
  mat-dialog-container.mat-dialog-container {
    border-radius: 0;
  }
````

There are two options for adding the styles:
1. Add a panel class and pass it as a parameter to the open method when using the Angular Material dialog class to open the dialog
2. Inside the scss of the dialog component, styles using ::ng-deep can be added

```scss
::ng-deep .cdk-overlay-pane {
  max-width: 100vw !important;
  mat-dialog-container.mat-dialog-container {
    border-radius: 0;
  }
}
````

Option 1 is more expressive for developers mataining the code after the initial development. A Developer can see that there is a panel class add to override the initial panel styles. Option 2 is cleaner and preferred if the convention is known amongst the team.


## Conclusion
With not too much effort, the goal of a fullscreen dialog using Angular Material can be achieved, but like with everyhting, it depends when it comes to how to design the solution. More spefically, it depends on where the team expects for overrides of the container elements to be; in scss with the component or with the dialog open method call.

Recommendation: keep the styling related to the dialog with the component scss and also protect it with a panel class.

```scss
::ng-deep .hello-world-dialog-panel.cdk-overlay-pane {
  max-width: 100vw !important;
  mat-dialog-container.mat-dialog-container {
    border-radius: 0;
  }
}
````

## Give a Star! :star:

If you like or are using this project to learn, please give it a star. Thanks!

