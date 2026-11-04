'use client'

import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, } from "@/components/ui/combobox"
import { Label } from "@/components/ui/label"

export default function ComboboxBox(props: any) {

    console.log(props.value)


  return (
    <>
        <Combobox  items={props.value}>
            <Label htmlFor="user-combobox" className="text-lg">Name of affected</Label>
            <ComboboxInput id="user-combobox" placeholder="Who are you?" required />
            <ComboboxContent>
                <ComboboxEmpty>No one found</ComboboxEmpty>
                <ComboboxList>
                    {(item) => (
                        <ComboboxItem key={item.id} value={item.id}>{item.name + " - id: " + item.id}</ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    </>
  )
}