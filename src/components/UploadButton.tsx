"use client"
import React, { useState } from 'react'
import { Dialog } from './ui/dialog'
import { DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from './ui/button'

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  
    return (
      <Dialog
        open={isOpen}
        onOpenChange={(v) => {
          if (!v) {
            setIsOpen(v)
          }
        }}>
        <DialogTrigger
          onClick={() => setIsOpen(true)}
          asChild>
          <Button>Upload PDF</Button>
        </DialogTrigger>
{/*   
        <DialogContent>
          <UploadDropzone isSubscribed={isSubscribed} />
        </DialogContent> */}
      </Dialog>
    )
  }

export default UploadButton
