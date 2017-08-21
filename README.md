## PUSH
*Space around an element*
```css
.push{-direction}{-viewport}{-size}
.no-push{-direction}{-viewport}
```

## PAD
*Space between the element's edge and its contents*
```css
.pad{-direction}{-viewport}{-size}
.no-pad{-direction}{-viewport}
```

----------
### DIRECTIONALITY

 - `top`
 - `right`
 - `bottom`
 - `left`

#### Directionality rules:
 - *If no **DIRECTION** is specified, white-space is added to **all sides***

----------
### VIEWPORTS
 - `xs`
 - `sm`
 - `md`
 - `lg`

#### Viewport rules:
 - *If no size is specified, **`xs` is the default***
 - **VIEWPORT** comes before **SIZE**.
 - If **VIEWPORT** is specified, **SIZE is required**.

----------
### SIZES
 - `xs` => 5px
 - `sm` => 10px
 - `md` => 20px
 - `lg` => 40px
 - `xl` => 80px

#### Size rules:
 - *If no size is specified, **`md` is the default***
 - If both **DIRECTION** and **SIZE** are included, **DIRECTION must be first**.
 - If **VIEWPORT** is specified, **SIZE is required**.
 - **SIZE** comes after **VIEWPORT**

----------
### EXAMPLES
    .push
    .push-sm
    .push-right
    .push-top-lg
    .no-push
    .no-push-left
    .no-push-sm
    .no-push-left-xs
    .pad
    .pad-xs
    .pad-bottom
    .pad-left-sm
    .no-pad
    .no-pad-right
    .no-pad-top
    .no-pad-bottom-lg

Just a silly example:

    <div class="push
                push-bottom-lg
                push-left-lg-sm
                push-right-lg-sm
                no-push-bottom-md
                pad-sm
                pad-md-md
                no-pad-lg">
        This div has a default margin of 20px on all sides.
        The bottom margin is overridden with a 40px setting.
        On large desktops, the left and right margins are 
            set to 10px.
        On small and large desktops, there is no bottom 
            margin.
        This div has a default padding of 10px on all sides.
        On small desktops, the padding is 20px;
        On large desktops, the padding is removed.
    </div>
