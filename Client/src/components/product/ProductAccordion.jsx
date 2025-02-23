import React from 'react'
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"

const ProductAccordion = ({ content, title }) => {
    return (
        <div>
            <AccordionRoot collapsible>
                <AccordionItem className='w-full border-t p-4 focus:border'>
                    <AccordionItemTrigger className="font-semibold text-2xl">{title}</AccordionItemTrigger>
                    <AccordionItemContent className="font-semibold pt-4">{content}</AccordionItemContent>
                </AccordionItem>
            </AccordionRoot>
        </div>
    )
}

export default ProductAccordion