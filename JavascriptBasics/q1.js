//using object literal
var person = {firstName:"Sai Siva" ,lastName:"Nimmadala", Age:"24"};

//using function constructor
function MetaDataParser(version, channel, keyField) {
    this._version = version;
    this._channel = channel;
	this._keyField = keyField;
}
Object.defineProperty(MetaDataParser.prototype, 'version', {
    get: function() {
        return this._version;
    },
    set: function(version) {
        this._version = version;
    }
});
Object.defineProperty(MetaDataParser.prototype, 'channel', {
    get: function() {
        return this._channel;
    },
    set: function(channel) {
        this._channel = channel;
    }
});
Object.defineProperty(MetaDataParser.prototype, 'keyField', {
    get: function() {
        return this._keyField;
    },
    set: function(keyField) {
        this._keyField = keyField;
    }
});

var metaDataParser = new MetaDataParser(3,2,"orderid");
console.log(Object.keys(metaDataParser))