import { db } from '../../../db'
import { users, categories, tickets } from "../../../db/schema" 
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import CreateTicketDialog from './create-ticket-dialog'


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
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Tickets</CardTitle>
        </CardHeader>

        {adata.map((index) => (
          <Card className="" key={index.id}>
            <CardHeader>
              <Button variant='link' className="w-max p-0">
                <Link href={"/tickets/" + index.id}>
                  <CardTitle>{index.title}</CardTitle>
                </Link>
              </Button>
              <div className="flex flex-row justify-between">

                <CardDescription>{"Status: " + index.status}</CardDescription>
                <CardDescription>{"Issued by: " + index.user.name}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <Label className="leading-6">{index.description}</Label>
            </CardContent>
          </Card>
            
        ))}

        <CardFooter className="justify-between">
          <Label>Didn't find your issue?</Label>
          <CreateTicketDialog allUsers={allUsers} allCategories={allCategories} />
            
          
        </CardFooter>
      </Card>
    </div>
  )
}
