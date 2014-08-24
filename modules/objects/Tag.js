define( function( require ) {
	'use strict';
	
	// Variables.
	var defaultColors = {
		default: '#555',
		fixme: '#c95353',
		future: '#5a99c3',
		note: '#696',
		todo: '#d95',
	};
	
	// Define tag object.
	function Tag( tag ) {
		// Set default color.
		this._color = defaultColors.default;
		
		// Use object properties if one was supplied.
		if ( typeof( tag ) === 'object' ) {
			this.tag( tag.tag );
			this.name( tag.name );
			this.count( tag.count );
			this.isVisible( tag.visible );
		} else {
			this._tag = '';
			this._name = '';
			this._count = 0;
			this._visibility = true;
		}
	}
	
	// Methods handling tag.
	Tag.prototype.tag = function( tag ) {
		var parts;
		
		// Return tag if no new tag is supplied.
		if ( tag === undefined ) {
			return this._tag;
		}
		
		// Check if tag contains color.
		parts = tag.split( ':', 2 );
		
		// Set color if one was found.
		if ( parts.length > 1 ) {
			this.color( parts[ 1 ] );
		}
		
		// Set tag if one is supplied.
		this._tag = parts[ 0 ].replace( /[^a-zA-Z]/g, '' ).toLowerCase();
	}
	
	// Methods handling name.
	Tag.prototype.name = function( name ) {
		// Return name if no new tag is supplied.
		if ( name === undefined ) {
			return this._name;
		}
		
		// Set tag if one is supplied.
		this._name = name.replace( /[^a-zA-Z]/g, '' );
	}
	
	// Methods handling count.
	Tag.prototype.count = function( count ) {
		// Return count if no count is supplied.
		if ( count === undefined ) {
			return this._count;
		}
		
		// Set count if one is supplied.
		this._count = count;
	}
	
	// Methods handling color.
	Tag.prototype.color = function( color ) {
		// Return color if no color is supplied.
		if ( color === undefined ) {
			return this._color;
		}
		
		// Set color if one is supplied and valid.
		if ( /(^#?[0-9A-F]{6}$)|(^#?[0-9A-F]{3}$)/i.test( color ) ) {
			this._color = color;
		}
	}
	
	// Methods handling visibility.
	Tag.prototype.isVisible = function( visibility ) {
		// Return count if no new tag is supplied.
		if ( visibility === undefined ) {
			return this._visibility;
		}
		
		// Set tag if one is supplied.
		this._visibility = visibility;
	}
	
	// Return object.
	return Tag;
} );