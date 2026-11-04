import { db } from '../../../db'
import { users } from "../../../db/schema"
import { categories } from '../../../db/schema'
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Field, FieldContent, FieldGroup, FieldSet, } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input"
import { Separator } from '@/components/ui/separator'
import ComboboxBox from './combobox-box'
import Link from 'next/link'


export default async function Tickets() {
    const allUsers = await db.select().from(users)
    const allCategories = await db.select().from(categories)
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
                  <DialogTitle className="text-lg">Create a support ticket!</DialogTitle>
                  <DialogDescription>Fill in the required (all of them) info below and create a new ticket!</DialogDescription>
                </DialogHeader>
                <FieldGroup>
                  <FieldSet>
                    <Field>
                    <Label htmlFor="ticket-title" className="text-lg">Ticket title</Label>
                      <Input 
                        id="ticket-title" 
                        placeholder="e.g. Why is my pc not turning on?" 
                        // className="p-1 border-0 outline-1 outline-accent rounded-sm focus:outline-2" 
                        required
                      />
                    </Field>
                    
                    <Field>
                      <Label htmlFor="ticket-content" className="text-lg">The problem you're having</Label>
                      <Input 
                        id="ticket-content" 
                        placeholder="What happened?" 
                        // className="p-1 bg-accent border-0 outline-1 outline-ring rounded-sm focus:outline-2" 
                        required
                      />
                    </Field>
                  </FieldSet>
                  <FieldSet>
                    <Field>
                      <ComboboxBox value={allUsers} title="User" placeholder="Select a user" />
                    </Field>
                    <Field>
                      <ComboboxBox value={allCategories} title="Category" placeholder="Select a category" />
                    </Field>
                  </FieldSet>

                </FieldGroup>
                <Separator />
                <Button id="submit-button" type="submit">Create new ticket</Button>

              </DialogContent>
              
            </form>
          </Dialog>
          
        </CardFooter>
      </Card>
    </div>
  )
}
