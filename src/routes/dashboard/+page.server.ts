import { error, redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
 
export async function load(event) {
  const session = await event.locals.auth()
 
  if (!session?.user?.userId) {
    return error(401, "Unathorized")
  }
 
  return {
    session,
  }
}