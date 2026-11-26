import { db } from '../../../db'
import { users, categories } from "../../../db/schema" 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import CreateTicketDialog from './create-ticket-dialog'
import TicketRendering from './ticket.rendering'


export default async function Tickets() {
    const allUsers = await db.select().from(users)
    const allCategories = await db.select().from(categories)
    const adata = await db.query.tickets.findMany({
      with: {
        user: true,
        categories: true
      }
    })


  return (
    <div className="flex flex-col flex-1 items-center justify-center">

      <Card className="w-full max-w-lg">

        <CardHeader>
          <CardTitle>Tickets</CardTitle>
        </CardHeader>
        
        <div className="flex flex-col gap-3 w-full pl-3 pr-3">
          <TicketRendering tickets={adata}/>
        </div>

        <CardFooter className="justify-between">
          <Label>Didn't find your issue?</Label>
          <CreateTicketDialog allUsers={allUsers} allCategories={allCategories} />
        </CardFooter>

      </Card>

    </div>
  )
}
