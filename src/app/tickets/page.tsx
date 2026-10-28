import { db } from '../../../db'
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import Link from 'next/link'


export default async function Tickets() {
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
              {/* <Label>{}</Label> */}

            </CardContent>

          </Card>
            
        ))}
      </Card>
    </div>
  )
}
