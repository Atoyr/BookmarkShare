import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from 'remix-auth-form'

import { sessionStorage } from "~/services.server/auth/session";


// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
// TODO: replace `string` with the type that your strategy returns
const authenticator = new Authenticator<string>(sessionStorage);

const formStrategy = new FormStrategy(async ({ form }) => {
  const email = form.get('email')
  const password = form.get('password')

  if (!(email && password)) {
    throw new Error('Invalid Request')
  }

  // TODO GET USER
  //const user = await prisma.user.findUnique({ where: { email: String(email) } })

  if (!user) {
    throw new AuthorizationError()
  }

  // TODO PASSWORD MATCH
  //const passwordsMatch = await bcrypt.compare(String(password), user.password)

  if (!passwordsMatch) {
    throw new AuthorizationError()
  }

  const { password: _, ...userWithoutPassword } = user

  return userWithoutPassword
})

authenticator.use(formStrategy, 'user-pass')

export { authenticator }
