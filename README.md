Form-Data Binder
===================

Bind parsed form and input data to Session variables

Installation
------------

Install using Meteorite. When in a Meteorite-managed app directory, enter:

``` sh

$ mrt add form-data-binder
```

See it in action
----------------

Demo: [http://form-data-binder-demo.meteor.com](http://form-data-binder-demo.meteor.com)

Code: [https://github.com/Gwendall/meteor-form-data-binder-demo](https://github.com/Gwendall/meteor-form-data-binder-demo)

Usage
-----

Declare any form or input DOM element with a session-bind attribute, with the Session variable name to attach it to.

``` sh

<form session-bind="someSessionProperty">

	<input type="text" name="someField">
	<input type="text" name="someOtherField">

</form>
```

Any change in one of the inputs of the form will store its data as a JSON object in the "someSessionProperty" property of the Session variable.

``` sh
Session.get("someSessionProperty")

>>  {
		someField: "typedText",
		someOtherField: "otherTypedText"
	}
```
