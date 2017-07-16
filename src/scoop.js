/**
 * Escape special characters in the given string of html.
 */

$coop = {

  /*
  --  ### MISC
  */

  /*
  --  Find a DOM ellement.
  */
  find: function( selector , context = null )
  {
	    return ( context || document ).querySelector( selector );
	},

  /*
  --  Find multiple DOM ellement.
  */
  findAll: function( selector , context = null )
  {
	    return ( context || document ).querySelectorAll( selector );
	},

  /*
  --  Wrap an ellement around another.
  */
  wrap: function( ellement , wrapper )
  {
	    ellement.parentNode.insertBefore( wrapper , ellement )
	    wrapper.appendChild( ellement )
	},

  /*
  --  Parse a value to a bool.
  */
  parseBool: function( value )
  {
    return value == "true" || value == true || value == 1 ? true : false;
  },

  /*
  --  ### ARRAYS
  */

  /*
  --  Is a value in an array?
  */
  inArray: function( needle , haystack )
  {
	    for( var i = 0 ; i < haystack.length ; i++ )
      {
	        if( haystack[i] == needle ) return i;
	    }
	    return -1;
	},

  /*
  --  Loop throu an array/list
  */
  loop: function( list , callback )
  {
    for ( var i = 0 ; i < list.length ; i++ )
    {
      callback( list[i] );
    }
  },

  /*
  --  ### COOKIES
  */

  /*
  --  Set cookie value.
  */
  getCookie: function( name )
  {
	    var v = document.cookie.match( '(^|;) ?' + name + '=([^;]*)(;|$)' );
	    return v ? v[2] : null;
	},

  /*
  --  Get cookie value.
  */
  setCookie: function( name , value , days )
  {
	    var d = new Date;
	    d.setTime( d.getTime() + 24 * 60 * 60 * 1000 * days );
	    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
	},

  /*
  --  Delete cookie value.
  */
  deleteCookie: function( name )
  {
    setCookie( name, '' , -1 );
  },

  /*
  --  ### EVENTS
  */

  /*
  --  Add event listner.
  */
  addEvent: function( ellement , type , callback )
  {
    if ( ellement.attachEvent )
    {
      ellement.attachEvent( 'on' + type , callback );
    }
    else
    {
      ellement.addEventListener( type , callback );
    }
	},

  /*
  --  Remove event listner.
  */
  removeEvent: function( ellement , type , callback )
  {
    if ( ellement.detachEvent )
    {
      ellement.detachEvent( 'on' + type , callback );
    }
    else
    {
      ellement.removeEventListener( type , callback );
    }
	},

  /*
  --  Trigger events.
  */
  triggerEvent: function( ellement , type )
  {
    if ( 'createEvent' in document )
    {
      var e = document.createEvent( 'HTMLEvents' );
      e.initEvent( type , false , true );
      ellement.dispatchEvent( e );
    }
    else
    {
      var e = document.createEventObject();
      e.eventType = type;
      ellement.fireEvent( 'on' + e.eventType , e );
    }
	},

  /*
  --  Fire on document ready.
  */
  domReady: function( fn )
  {
    if ( document.readyState != 'loading' )
    {
      fn();
    }
    else if ( document.addEventListener )
    {
      this.addEvent( document , 'DOMContentLoaded' , fn );
    }
    else
    {
      this.addEvent( document , 'onreadystatechange' , function(){
        if ( document.readyState != 'loading' )
        {
          fn();
        }
      })
    }
  },

  /*
  --  trim leading and trailing whitespace
  */
  trim: function( string )
  {
    if ( typeof string === "string" )
    {
      return string.replace( /^\s+|\s+$/g , '' );
    }
    else
    {
      return string;
    }

  },

  /*
  --  ### Ajax
  */

  /*
  --  Track dependancy.
  */
  dependancies: [],

  /*
  --  Attach dependancy and run code.
  */
  depend: function( url , callback )
  {
    if( ! this.inArray( url , this.dependancies ) )
    {
      var script = document.createElement( 'script' );
    	var scripts = document.getElementsByTagName( 'script' )[0];
      script.async = true;
      script.onload = function()
      {
        script.onload = null;
        callback();
      }
    	script.src = url;
    	( document.getElementsByTagName( "head" )[ 0 ] ).appendChild( script );
    }
    else
    {
      callback();
    }
  },

  /*
  --  ### Log
  */
  log: function( msg )
  {
    if( typeof console !== "undefined" )
    {
      console.log( msg )
    }
  }

  /*
  --  -----
  */
};

module.exports = $coop
