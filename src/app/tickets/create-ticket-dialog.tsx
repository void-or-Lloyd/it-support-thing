"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ComboboxBox from './combobox-box'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import { createTicket } from './server-side'
import { useState } from 'react'


const initialState={
  
}



export default function CreateTicketDialog({allUsers, allCategories}: any) {
  const [state, formAction, pending] = useActionState(createTicket, initialState as any)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  // console.log(state)

  return (
    <Dialog>
      <DialogTrigger render ={<Button onClick={() => (setTitle(""), setContent(""))} variant="outline">Issue a new ticket!</Button>} />

      <DialogContent className="md:max-w-md">
        <form action={formAction} className="w-full">

          <DialogHeader>
            <DialogTitle className="text-lg">Create a support ticket!</DialogTitle>
            <DialogDescription>Fill in the required (all of them) info below and create a new ticket!</DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <FieldSet>

              <Field data-invalid={!!state.errors?.title}>
                <FieldLabel htmlFor="ticket-title" className="text-lg">Ticket title</FieldLabel>
                <Input 
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  id="ticket-title" 
                  name="ticket-title"
                  placeholder="e.g. Why is my pc not turning on?" 
                  // className="p-1 border-0 outline-1 outline-accent rounded-sm focus:outline-2" 
                  // required
                  aria-invalid={!!state.errors?.title}
                />
              </Field>
                
              <Field data-invalid={!!state.errors?.content}>
                <Label htmlFor="ticket-content" className="text-lg">The problem you're having</Label>
                <Input 
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  id="ticket-content"
                  name="ticket-content" 
                  placeholder="What happened?" 
                  // className="p-1 bg-accent border-0 outline-1 outline-ring rounded-sm focus:outline-2" 
                  // required
                  aria-invalid={!!state.errors?.content}
                />
              </Field>

            </FieldSet>

            <FieldSet>

              <Field data-invalid={!!state.errors?.user}>
                <ComboboxBox 
                  id="which-user" 
                  name="ticket-user"
                  value={allUsers} 
                  title="User" 
                  placeholder="Select a user" 
                />
              </Field>

              <Field data-invalid={!!state.errors?.category}>
                <ComboboxBox 
                  id="which-category" 
                  name="ticket-category"
                  value={allCategories} 
                  title="Category" 
                  placeholder="Select a category" 
                />
              </Field>

            </FieldSet>

          </FieldGroup>

          <Separator />

          <Button id="submit-button" type="submit">Create new ticket</Button>

        </form>
      </DialogContent>
        
    </Dialog>
  )
}