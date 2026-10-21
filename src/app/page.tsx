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


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>Yes? Send a ticket to our support team.</CardDescription>
        </CardHeader>
        
        <CardContent>
          <Button>Help</Button>
        </CardContent>
      </Card>
    </div>
  );
}
