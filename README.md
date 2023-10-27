# aznoqmous/parallax

## Get started

Bind your element using the `Parallax.bind(selector, options={})` method

```js
Parallax.bind('.element-to-bind', {
    pivot: "center" // top, center (default) or bottom
})
```

`Parallax` will update the `--parallax` css variable of bound element, making it easy to apply some css styling on the element or its children.

```html
<div class="element-to-bind" style="--parallax: 0.156">
    <!-- lorem ipsum -->
</div>
```