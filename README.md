# Angular 3D Components

Howdy partners! Welcome to the Angular 3D Components library, where we've got some rootin' tootin' components that'll make your web applications come alive with that ol' Wild West charm. Saddle up and let's take a gander at what we've got so far.

## Installation

To rustle up the Odometer Input component, make sure you've got our library installed:

<sup>* Not uploaded/working yet</sup>
```bash
npm install angular-3d-components --save
```

## Odometer Input 🤠

![Odometer Input](/src/favicon.ico)

The **Odometer Input** component is like a fancy 3D combination lock digit, perfect for when you need to lasso up some numeric input from your users. With this here component, you can wrangle those digits with style and flair, just like a true cowboy ought to.

### Usage

Sling this here component into your Angular project:

```typescript
import { OdometerInputComponent } from 'angular-3d-components';

@NgModule({
  declarations: [
    OdometerInputComponent,
    // ...
  ],
  imports: [
    // ...
  ],
})
export class YourModule { }
```

And in your HTML, use the `<odometer-input>` tag to display the component:

```html
<odometer-input [min]="0" [max]="9" [(value)]="odometerValue"></odometer-input>
```

## Orbiting Text 🌵

![Orbiting Text](/src/favicon.ico)

Now ain't this just the darnedest thing you've ever seen? Introducing the **Orbiting Text** component, a sphere-dancin' marvel that'll have your text swirling and twirling 'round like tumbleweeds in the wind.

### Usage

Stake your claim on this component by declarin' it in your module:

```typescript
import { OrbitingTextComponent } from 'angular-3d-components';

@NgModule({
  declarations: [
    OrbitingTextComponent,
    // ...
  ],
  imports: [
    // ...
  ],
})
export class YourModule { }
```

Then in your HTML, use the `<orbiting-text>` tag to give your text that rodeo-worthy spin:

```html
<orbiting-text text="Howdy, partner!"></orbiting-text>
```

## More to Come! 🤠

Hold onto your Stetsons, 'cause we ain't done yet! We've got more smokin' hot components cookin' in the forge, including a Stepper component that'll guide your users down the dusty trail. So keep your eyes peeled and your spurs jinglin', 'cause the Angular 3D Components library is fixin' to wrangle up some more rootin' tootin' goodness.

If you've got any questions, saddle up and give us a holler at antimax@anticodes.net. Happy trailblazin', partners! 🐴🌵🌅

Yours in code,
Anticodes