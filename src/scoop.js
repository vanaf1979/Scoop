/**
 * Escape special characters in the given string of html.
 */

$coop = {

  /*
  --  ### MISC
  */

  /**
  * Find a single dom ellement
  *
  * @param  string  selector
  * @param  string  context
  * @return dom ellement
  */
  find: function( selector , context = null )
  {
    return ( context || document ).querySelector( selector );
  },

  /**
  * Find multiple dom ellements
  *
  * @param  string  selector
  * @param  string  context
  * @return list of dom ellements
  */
  findAll: function( selector , context = null )
  {
    return ( context || document ).querySelectorAll( selector );
  },

  /**
  * Wrap an ellement around another.
  *
  * @param  string  ellement
  * @param  string  wrapper
  */
  wrap: function( ellement , wrapper )
  {
    ellement.parentNode.insertBefore( wrapper , ellement )
    wrapper.appendChild( ellement )
  },

  /**
  * Parse a value to a bool.
  *
  * @param  string  value
  * @return bollean
  */
  parseBool: function( value )
  {
    return value == "true" || value == true || value == 1 ? true : false;
  },

  /*
  --  ### ARRAYS
  */

  /**
  * Is a value present in an array?
  *
  * @param  string  needle
  * @param  array  haystack
  * @return int
  */
  inArray: function( needle , haystack )
  {
    for( var i = 0 ; i < haystack.length ; i++ )
    {
      if( haystack[i] == needle ) return i;
    }
    return -1;
  },

  /**
  * Loop through an array/list.
  *
  * @param  array  list
  * @param  function  callback
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

  /**
  * Get cookie value.
  *
  * @param  string  name
  * @return any
  */
  getCookie: function( name )
  {
    var v = document.cookie.match( '(^|;) ?' + name + '=([^;]*)(;|$)' );
    return v ? v[2] : null;
  },

  /**
  * Set cookie value.
  *
  * @param  string  name
  * @param  string  any
  * @param  int  days
  */
  setCookie: function( name , value , days )
  {
    var d = new Date;
    d.setTime( d.getTime() + 24 * 60 * 60 * 1000 * days );
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  },

  /**
  * Delete cookie value.
  *
  * @param  string  name
  */
  deleteCookie: function( name )
  {
    setCookie( name, '' , -1 );
  },

  /*
  --  ### EVENTS
  */

  /**
  * Add event listner.
  *
  * @param  object  ellement
  * @param  string  type
  * @param  function  callback
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

  /**
  * Remove event listner.
  *
  * @param  object  ellement
  * @param  string  type
  * @param  function  callback
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

  /**
  * Trigger events.
  *
  * @param  object  ellement
  * @param  string  type
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

  /**
  * Fire on document ready.
  *
  * @param  function  callback
  */
  domReady: function( callback )
  {
    if ( document.readyState != 'loading' )
    {
      callback();
    }
    else if ( document.addEventListener )
    {
      this.addEvent( document , 'DOMContentLoaded' , callback );
    }
    else
    {
      this.addEvent( document , 'onreadystatechange' , function(){
        if ( document.readyState != 'loading' )
        {
          callback();
        }
      })
    }
  },

  /**
  * trim leading and trailing whitespace
  *
  * @param  string  string
  * @return  string
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

  /**
  * Attach dependancy and run code.
  *
  * @param  string  url
  * @param  function  callback
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

  /**
  * Log to consoleif present
  *
  * @param  string  message
  */
  log: function( message )
  {
    if( typeof console !== "undefined" )
    {
      console.log( message )
    }
  }
};

module.exports = $coop
