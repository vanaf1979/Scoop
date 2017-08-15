## $coop

Vanilla javascript utilities


### find

```javascript
/**
* Find a single dom ellement
*
* @param  string  selector
* @param  string  context
* @return dom ellement
*/
$scoop.find( selector , context = null )
```
Plain js function: https://gist.github.com/vanaf1979/5532d76e2e746d99b577f2fb33344b4d


### findAll

```javascript
/**
* Find multiple dom ellements
*
* @param  string  selector
* @param  string  context
* @return list of dom ellements
*/
$scoop.findAll( selector , context = null )
```
Plain js function: https://gist.github.com/vanaf1979/c998b2cd38ccca26259ebc07169a2346


### wrap

```javascript
/**
* Wrap an ellement around another.
*
* @param  string  ellement
* @param  string  wrapper
*/
$scoop.wrap( ellement , wrapper )
```
Plain js function: https://gist.github.com/vanaf1979/19cc0048b802fa40ec84c263124acd9e


### parseBool

```javascript
/**
* Parse a value to a bool.
*
* @param  string  value
* @return bollean
*/
$scoop.parseBool( value )
```
Plain js function: https://gist.github.com/vanaf1979/e1f394b3fdd7ece80efdcedc2ce8cb19


### inArray

```javascript
/**
* Is a value present in an array?
*
* @param  string  needle
* @param  array  haystack
* @return int
*/
$scoop.inArray( needle , haystack )
```
Plain js function: https://gist.github.com/vanaf1979/450ac5e493b3b5e06a5c41959d7a8423


### loop

```javascript
/**
* Loop through an array/list.
*
* @param  array  list
* @param  function  callback
*/
$coop.loop( list , callback )
```
Plain js function: https://gist.github.com/vanaf1979/da72f009eaeac4a11ecf83b4d2aa8653


### getCookie

```javascript
/**
* Get cookie value.
*
* @param  string  name
* @return any
*/
$coop.getCookie( name )
```
Plain js function: https://gist.github.com/vanaf1979/2ee9482bb20886c7519f3e6d4d2b044a


### setCookie

```javascript
/**
* Set cookie value.
*
* @param  string  name
* @param  string  any
* @param  int  days
*/
$coop.setCookie( name , value , days )
```
Plain js function: https://gist.github.com/vanaf1979/e489eec14f6ccf6866d01d5b91b001b1


### deleteCookie

```javascript
/**
* Delete cookie value.
*
* @param  string  name
*/
$coop.deleteCookie( name )
```
Plain js function: https://gist.github.com/vanaf1979/be86d522f1cf4ddf692d60743ceaa7ce


### addEvent

```javascript
/**
* Add event listner.
*
* @param  object  ellement
* @param  string  type
* @param  function  callback
*/
$coop.addEvent( ellement , type , callback )
```
Plain js function: https://gist.github.com/vanaf1979/8fc51bc782b3c65696d43a59aa20c98d


### removeEvent

```javascript
/**
* Remove event listner.
*
* @param  object  ellement
* @param  string  type
* @param  function  callback
*/
$coop.removeEvent( ellement , type , callback )
```
Plain js function: https://gist.github.com/vanaf1979/5ab09a29d8520b7bc8a31d7db3420531


### triggerEvent

```javascript
/**
* Trigger events.
*
* @param  object  ellement
* @param  string  type
*/
$coop.triggerEvent( ellement , type )
```
Plain js function: https://gist.github.com/vanaf1979/91a96e6e4da71cd6f5a835aa7f2f9572


### depend

```javascript
/**
* Attach dependancy and run code.
*
* @param  string  url
* @param  function  callback
*/
$coop.depend( url , callback )
```
Plain js function: https://gist.github.com/vanaf1979/bb57f6d6bebfdd2f9a426381a360ac8d


### trim

```javascript
/**
* trim leading and trailing whitespace
*
* @param  string  string
* @return  string
*/
$coop.trim( string )
```


### domReady

```javascript
/**
* Fire on document ready.
*
* @param  function  callback
*/
$scoop.domReady( callback )
```


### log

```javascript
/**
* Log to console if present
*
* @param  string  message
*/
$scoop.log( message )
```

vanaf1979.nl / About
--------
While learning new programming languages and frameworks i like to come up with small experiments like this one. I could throw them in the bin, but why not shere for others, and maybe get some sugestions for improvements. http://vanaf1979.nl
