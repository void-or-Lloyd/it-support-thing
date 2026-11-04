import { db } from '../../../db'
import { users } from "../../../db/schema"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Field, FieldContent, FieldGroup, } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Input } from '@base-ui/react'
import { Separator } from '@/components/ui/separator'
import ComboboxBox from './combobox-box'
import Link from 'next/link'


export default async function Tickets() {
    const allUsers = await db.select().from(users)
    const adata = await db.query.tickets.findMany({
    with: {
      user: true,
      categories: true
    }
  })

  console.log(allUsers)


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
              {/* <Label>{}</Label> */}

            </CardContent>

          </Card>
            
        ))}

        <CardFooter className="justify-between">
          <Label>Didn't find your issue?</Label>

          <Dialog>
            <form>
              <DialogTrigger render ={<Button variant="outline">Issue a new ticket!</Button>} />

              <DialogContent className="md:max-w-md">
                <DialogHeader>
                  <DialogTitle>Hello</DialogTitle>
                  <DialogDescription>This is still a w.i.p</DialogDescription>
                </DialogHeader>
                <FieldGroup>

                  <Field>
                    <Label htmlFor="ticket-title" className="text-lg">Ticket title</Label>
                    <Input 
                      id="ticket-title" 
                      placeholder="e.g. Why is my pc not turning on?" 
                      className="p-1 bg-accent border-0 outline-1 outline-ring rounded-sm focus:outline-2" 
                    />
                  </Field>
                  
                  <Field>
                    <Label htmlFor="ticket-content" className="text-lg">The problem you're having</Label>
                    <Input 
                      id="ticket-content" 
                      placeholder="What happened?" 
                      className="p-1 bg-accent border-0 outline-1 outline-ring rounded-sm focus:outline-2" 
                    />
                  </Field>
                    <ComboboxBox value={allUsers} />
                  


                </FieldGroup>
              </DialogContent>
              
            </form>
          </Dialog>
          
        </CardFooter>
      </Card>
    </div>
  )
}
