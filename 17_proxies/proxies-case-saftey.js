/**
 * The Proxy object is used to define custom behavior for fundamental operations
 *
 * MDN reference: 
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 *
 * Safe handler check if users are setting properties with names that are similar 
 * to existing property names. If yes, throw Error to notify users.
 */
const safeHandler = {
  set (target, name, value) {
    const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase());
    
    if (!(name in target) && likeKey) 
      throw new Error(`Oops! Looks like we already have a(n) ${name} property but with case of ${likeKey}.`)
    
    // if no similar name
    target[name] = value
}

const saftey = new Proxy({ id: 100 }, safeHandler);

saftey.ID = 200; // Error: Opps!...
