import { Injectable } from '@angular/core';

@Injectable()
export class PostfilterService {

  constructor(
  ){}

  // Default Variables
  //===========================================//
  public config: any = {
    //orderBy: "'email', 'id'",
    orderBy: 'email',
    filterBy: {
      keys: 'name',
      value: ''
    }
  };

  // Service Functions
  //===========================================//

  /**
  * Init pag
  */
  setConfig(object: any = {}) {
    let merged = Object.assign({}, this.config, object);
    return merged;
  }

  /**
  * Converts config to string to append to component pipe
  */
  toQueryString(obj) {
    var str = [], k, v;
    for(var key in obj) {
      // skip things from the prototype
      if (!obj.hasOwnProperty(key)) continue;

      // turns array into pretty string
      if ( obj[key] instanceof Array ) {
        obj[key] = "[ " + this.arrayToString(obj[key]) + " ]: ";
      }
      // turns object into pretty string
      else if ( typeof obj[key] === 'object' ) {
        let tempString = '';
        for (var item in obj[key]) {
          let tempObj = obj[key];
          if ( tempObj[item] instanceof Array ) {
            tempString += "[ " + this.arrayToString(tempObj[item]) + " ]: ";
          } else {
            tempString += '\'' + tempObj[item] + '\'';
          }
        }
        obj[key] = tempString
      };

      v = obj[key];
      str.push( key + ": " + v );
    }
    console.log(str.join(" | "));
    return str.join(" | ");
  }

  /**
  * Converts array to pretty string
  */
  arrayToString(array) {
    return array = "'" + Array.prototype.join.call(array, "' , '") + "'";
  }


}
