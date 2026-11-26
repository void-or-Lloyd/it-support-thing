"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'


export default function TicketRendering({tickets}: any) {
  const router = useRouter()

  return (
    <>
      {tickets.map((index: any) => (
        <Card onClick={() => router.push("/tickets/" + index.id)} className="hover:cursor-pointer" key={index.id}>

          <CardHeader>
            <CardTitle>{index.title}</CardTitle>
              
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
    </>
  )
}