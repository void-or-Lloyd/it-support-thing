"use client"

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldContent, FieldLabel, FieldGroup, FieldDescription } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { notFound } from "next/navigation"


export default function TicketIdRendering({data}: any) {
  let modSecond
  let modMinute
  let modHour


  // console.log(data.createdAt.toLocaleDateString())
  
  if (data.error) notFound()





    
    
  function timeAdjust(timeToBeAdjusted: number) {
    if (timeToBeAdjusted < 10) return "0" + timeToBeAdjusted
    else return timeToBeAdjusted
  }

  


  const date = timeAdjust(data.createdAt.getDate()) + "/" + timeAdjust(data.createdAt.getMonth())  + "/" + data.createdAt.getFullYear()
  const time = "@" + timeAdjust(data.createdAt.getHours()) + "-" + timeAdjust(data.createdAt.getMinutes()) + "-" + timeAdjust(data.createdAt.getSeconds())
    
    
  return (
    <>
      <Card className="flex flex-row w-full pt-0">
        
        <div className="flex flex-col gap-4 w-full pt-4 pb-4">

          <CardHeader>
            <CardTitle className="text-2xl">{data.title}</CardTitle>
            <CardDescription className="text-lg">{"Status: " + data.status}</CardDescription>
            <CardDescription className="text-lg">{"Category: " + data.categories.name}</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-row w-full">
            <p className="text-xl">{data.description}</p>
          </CardContent>

        </div>
      
        <CardFooter className="flex flex-col gap-3 rounded-none rounded-l-sm rounded-r-xl">
          <CardDescription className="text-lg text-center">Issue posted by: </CardDescription>
          <div>
            <p className="text-2xl text-center">{data.user.name}</p>
            <p className="text-xl text-center text-muted-foreground">{data.user.email}</p>
          </div>
 
          <div>        
            <p className="text-lg text-center text-muted-foreground">{data.createdAt.getDate()+ "/" + (data.createdAt.getMonth() + 1) + "/" + data.createdAt.getFullYear()}</p>   
            <p className="text-lg text-center text-muted-foreground">{time}</p> 
          </div>


          
        </CardFooter>

      </Card>
    </>
  )
}


// data types

// {
//   id: number,
//   title: string,
//   description: string, 
//   status: string,
//   userId: number,
//   categoryId: number, 
//   createdAt: Date,
//   users: {
//     id: number,
//     name: string,
//     email: string
//   },
//   categories: {
//     id: number,
//     name: string
//   } | undefined
// }



// Not found return

// return (
  //   <div className="w-full">
  //     <Card className="w-full">
  
  //       <CardHeader>
  //         <CardTitle className="text-3xl text-center text-red-600">Failure to load</CardTitle>
  //         <CardDescription className="text-center">Hmm, well that's an issue. Try reloading.</CardDescription>
  //         <CardDescription className="text-center">Didn't work?</CardDescription>
  //         <CardDescription className="text-center">Either wait, try again later, or report the issue.</CardDescription>
  //         <CardDescription className="text-center">Wait...but this is the support page...</CardDescription>
  //       </CardHeader>
    
//     </Card>
//   </div>
// )