var ci = this.getCmdbRecord();
var arr = [];

if ((ci.serial_number.indexOf('SIT') > 0) || (ci.serial_number.indexOf('SUP') > 0) || (ci.serial_number.indexOf('UAT') > 0)) {
    ci.name = "";
    arr = ci.serial_number.split('LZ_');
    ci.name = arr[1].toLowerCase();

} 

