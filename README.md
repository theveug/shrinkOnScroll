# shrinkOnScroll
Small jQuery plugin for making items shrink on scroll.

**INSTALLATION:**

Include `jquery.shrinkOnScroll.js` after you include jQueries library
**HTML**
```html
<script type="text/javascript" src="jquery.shrinkOnScroll.js"></script>
```
**CSS**
```css
.tpt-shrinkOnScroll
{
  padding: 30px 0;
  transition: padding 0.3s;
}
.tpt-shrinkOnScroll.tpt-shrinkOnScrollShrink
{
  padding: 10px 0;
}
```

**USAGE:**

```javascript
$(document).shrinkOnScroll({
  selector: '.tpt-shrinkOnScroll',
  shrinkClass: 'tpt-shrinkOnScrollShrink',
  distance: 50
});
```

**OPTIONS:**

Option | Default
--- | ---
selector | .tpt-shrinkOnScroll
shrinkClass | tpt-shrinkOnScrollShrink
distance | 50
