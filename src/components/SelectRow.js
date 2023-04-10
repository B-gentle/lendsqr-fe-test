import React, { useRef, forwardRef, useEffect } from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const SelectRow = forwardRef(({id, popover, origin, indeterminate, ...rest}, ref) => {
            const defaultRef = useRef()
            const resolvedRef = ref || defaultRef

            useEffect(() => {
                resolvedRef.current.indeterminate = indeterminate
            }, [resolvedRef, indeterminate])
            
            return (
                <>
                <OverlayTrigger trigger="click" placement="left" overlay={popover}>    
                <label htmlFor={id}><BiDotsVerticalRounded /></label>
                </OverlayTrigger>
                    <input id={id} type="checkbox" name='check' ref={resolvedRef} {...rest} style={{display: 'none'}}  />
                </>
            )
            })
export default SelectRow