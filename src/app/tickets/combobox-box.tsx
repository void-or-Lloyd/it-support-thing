'use client'

import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, } from "@/components/ui/combobox"
import { Label } from "@/components/ui/label"

export default function ComboboxBox(props: any) {

    // console.log(props.value)


  return (
    <>
        <Combobox  items={props.value}>
            <Label htmlFor="combobox-input" className="text-lg">{props.title}</Label>
            <ComboboxInput id="combobox-input" name={props.name} placeholder={props.placeholder} required />
            <ComboboxContent>
                <ComboboxEmpty>???</ComboboxEmpty>
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