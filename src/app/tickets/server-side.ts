"use server"

import { db } from '../../../db'
import { users, categories, tickets } from "../../../db/schema" 
import { redirect } from 'next/navigation'



export async function createTicket(initialState: any, formData: FormData) {
    const title = formData.get("ticket-title")
    const content = formData.get("ticket-content")
    const user = formData.get("ticket-user")
    const category = formData.get("ticket-category")

    // console.log(title as string)
    // console.log(content as string)
    // console.log(Number(user))
    // console.log(Number(category))
    let hasErrors = false
    let errors: {
        title?: string,
        content?: string,
        user?: string, 
        category?: string 
    } = {}

    if (!title) {
        errors.title = "Missing title"
        hasErrors = true
    }

    if (!content) {
        errors.content = "Missing content"
        hasErrors = true
    }

    if (!user) {
        errors.user = "Missing user"
        hasErrors = true
    }

    if (!category) {
        errors.category = "Missing category"
        hasErrors = true
    }
    
    if (hasErrors) {
        console.log("Error")
        return { errors }
    }
    

    await db.insert(tickets).values({
      title: title as string,
      description: content as string,
      userId: Number(user),
      categoryId: Number(category)
    })

    console.log("Success")
    return {
        msg: "let me go home"
    }
}