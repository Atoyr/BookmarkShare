import { Plus } from "lucide-react"

import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function NewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><Plus />追加</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>新しいブックマーク</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div >
            <Label htmlFor="username" className="text-right">
              URL
            </Label>
            <Input id="link" />
          </div>
          <div >
            <Label htmlFor="username" className="text-right">
              タイトル
            </Label>
            <Input id="title" />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <div className="flex gap-2 ">
              <Button className="flex-1" type="button" >登録</Button>
              <Button type="button" variant="secondary">キャンセル</Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
