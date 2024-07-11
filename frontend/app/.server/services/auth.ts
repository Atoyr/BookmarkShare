import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/.server/services/session";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
// TODO: replace `string` with the type that your strategy returns
export let authenticator = new Authenticator<string>(sessionStorage);
