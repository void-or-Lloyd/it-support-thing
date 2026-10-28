import { db } from '../../db'
import { users } from "../../db/schema"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import Link from 'next/link'


export default async function Home() {
  
  const allUsers = await db.select().from(users)

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>Yes? Send a ticket to our support team.</CardDescription>
        </CardHeader>
        
        <CardFooter>
          <Button><Link href="/tickets">Help</Link></Button>
        </CardFooter>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          {allUsers.map((index) => (
            <div className="p-2" key={index.id}>
              <Label>{index.name}</Label>
              <Label>{index.email}</Label>
            </div>
          ))}
        </CardContent>
      </Card>

      
    </div>
  );
}
