# lainchanjsbanner
makes a ad-banner style box for showing a random webring banner as a clickable link
It's heavily based on this tutorial here, in fact it's a nearly identical fork, just converted to be 
actually useful
https://blog.kritikapattalam.com/build-a-random-quote-generator-using-javascript

Place the lainchan.js file where you put your site scripts, then call it in your webpage document with this tag.

Open lainchan.js up with your text editor of choice, select the path i have in it and do a replace all with the
path where you story your webring banners. It's super easy in notepad++, it's how i parsed this script out.

Once you hace that done, open the webpage you want the banner to show on and paste tje following script tag in
your header:
```<script src="/engine/banners/lainchan.js"></script>```

Then, move to where you want the banner to show up and paste this in:

```
<div id="lainchan-banner" style ="background-color: black; border: 1px solid white;">
    <h4 style ="background-color: black; border: 2px ridge;">Random Webring Site</h4>
    <p id="quotes" style ="background-color: black;text-align: center;"></p>
    <p id="author" style ="background-color: black; border: 1px ridge;"></p>
    <p>Hint: if using ff, hold ctrl to open in a new tab</p>
</div>
```

That's it! it should work!

You can add or remove as you want by deleting the line in the js document or adding a line and copying the
syntax. It's dumbtardedly easy.

Godspeed anon.
