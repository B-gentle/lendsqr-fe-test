import React, { useRef, forwardRef, useEffect } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const SelectRow = forwardRef(({id, indeterminate, ...rest}, ref) => {
            const defaultRef = useRef()
            const resolvedRef = ref || defaultRef

            useEffect(() => {
                resolvedRef.current.indeterminate = indeterminate
            }, [resolvedRef, indeterminate])
            
            return (
                <>
                <label htmlFor={id}><BiDotsVerticalRounded /></label>
                    <input id={id} type="checkbox" name='check' ref={resolvedRef} {...rest} style={{display: 'none'}}  />
                </>
            )
            })
export default SelectRow