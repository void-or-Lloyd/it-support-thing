import { db } from '../../db'
import { users } from "../../db/schema"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default async function Home() {
  const allUsers = await db.select().from(users)




  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>Yes? Send a ticket to our support team.</CardDescription>
        </CardHeader>
        
        <CardContent>
          <Button>Help</Button>
        </CardContent>
      </Card>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
          {allUsers.map((index) => (
            <CardContent key={index.id}>
              <CardDescription>{index.name}</CardDescription>
              <CardDescription>{index.email}</CardDescription>
            </CardContent>
            
          ))}
      </Card>
    </div>
  );
}
