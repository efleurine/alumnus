/**
 * A logger service -TO BE update to use a more reliable solution like morgan or other
 * this should only be use on the server side and not in the browser
 * 
 */


export default function Logger(msg) {
  // eslint-disable-next-line
  console.log(msg)
}
