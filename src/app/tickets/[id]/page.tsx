import { eq } from "drizzle-orm"
import { db } from "../../../../db"
import { tickets, users } from "../../../../db/schema"
import TicketIdRendering from "./ticket_id.rendering"
import { notFound } from "next/navigation"


export default async function SpecificTicket({params}: {params: Promise<{id: string}>}) {
  const { id } = await params
  const ticket_id = Number(id)
  let ticket
  // console.log(ticket_id)

  // const ticket = await db.select().from(tickets).leftJoin(users, eq(users.id, tickets.userId)).where(eq(tickets.id, ticket_id))
  // const ticket = await db.select().from(tickets).where(eq(tickets.id, ticket_id))

  if (ticket_id < 0) notFound()



  try {
    ticket = await db.query.tickets.findFirst({
      with: {
        user: true,
        categories: true,
      },
      where: eq(tickets.id, ticket_id),
    })
  }
  catch (e) {
    console.log("Issues?")
    console.log(e)
  }
  
  if (ticket == undefined) ticket = { error: true }
  // console.log(ticket)

  return (
    <div className="flex flex-col flex-1 items-center w-full">

      <div className="flex flex-col items-center w-full max-w-xl">
        <TicketIdRendering data={ticket} />
      </div>

    </div>
  )
}
