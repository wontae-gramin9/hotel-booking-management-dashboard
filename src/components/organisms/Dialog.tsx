"use client"
import { useEffect, useRef, useState } from "react"

type DialogProps = {
  trigger: React.ReactNode
  title: string
  content: React.ReactNode
  actions?: React.ReactNode
}

export const Dialog = (props: DialogProps) => {
  const { trigger, title, content, actions } = props
  const [showDialog, setShowDialog] = useState(false)
  const handleTriggerClicked = () => {
    setShowDialog(!showDialog)
  }
  const handleCloseClicked = () => {
    setShowDialog(!showDialog)
  }
  const dialogRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const closeDialog = (e: MouseEvent) => {
      if (showDialog && dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        // 이벤트가 발생한 노드가 모달 컴포넌트 내부에 존재하지 않는다면 close
        setShowDialog(false)
      }
    }

    document.addEventListener("mousedown", closeDialog)

    return () => {
      document.removeEventListener("mousedown", closeDialog)
    }
  }, [showDialog])

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={handleTriggerClicked}>
        {trigger}
      </div>

      {showDialog && (
        <div
          ref={dialogRef}
          aria-hidden="true"
          className="fixed left-1/2 top-1/2 z-10 flex size-full h-80  max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg border border-black-100  bg-white-300 "
        >
          <div className="relative flex flex-row justify-center bg-white-500 py-2">
            <h2 className="font-bold">{title}</h2>
            <div
              onClick={handleCloseClicked}
              className=" absolute  bottom-1.5 right-5 rounded-lg border border-red-700 bg-white-100 px-2  py-1 text-sm font-medium text-red-700 hover:bg-red-300 hover:text-white-100 "
            >
              ✖
            </div>
          </div>
          <div className="flex size-full flex-col p-4">
            <div className="overflow-y-auto">{content}</div>
            <div className="grow"></div>
            <div className="flex flex-row justify-center gap-2">{actions}</div>
          </div>
        </div>
      )}
    </div>
  )
}
