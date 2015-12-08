A javascript plugin that detects if an element is portrait or landscape.

Default Settings:

```
settings = {
    classPrefix: '', // optional prefix for classes
    verticalClass: 'landscape',
    horizontalClass: 'portrait',
    layoutType: 'client' // can be 'client' (clientWidth/clientHeight) or 'offset' (offsetWidth/offsetHeight)
};
```

Pure Javascript Example:

```
<script>
    Orientation(document.querySelector('.wrapper')).getOrientation({
        classPrefix: 'jon-',
        layoutType: 'offset',
        verticalClass: 'vert'
    });

    Orientation(document.querySelector('.wrapper')).getOrientation();
</script>
```

With jquery:

```
$('img').getOrientation({
    classPrefix: 'img-',
});
```
