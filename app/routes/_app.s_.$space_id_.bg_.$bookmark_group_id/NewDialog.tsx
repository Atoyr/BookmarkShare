import { useState } from "react"

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
import type { BookmarkInput } from "~/models";

export function NewDialog({spaceId, bookmarkGroupId}: {spaceId: string, bookmarkGroupId: string}) {
  const [formData, setFormData] = useState({ url: "", title: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const bookmark: BookmarkInput = {
      url: formData.url,
      title: formData.title,
      space_id: spaceId,
      bookmark_group_id: bookmarkGroupId,
    }
    try {
      const response = await fetch("/api/bookmark", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookmark),
      });
      if (!response.ok) throw new Error("Failed to register");
      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
    setFormData({ url: "", title: "" });
  };

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
            <Input 
              id="link" 
              name="url"
              value={formData.url}
              onChange={handleChange} />
          </div>
          <div >
            <Label htmlFor="username" className="text-right">
              タイトル
            </Label>
            <Input 
              id="title" 
              name="title"
              value={formData.title}
              onChange={handleChange} />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <div className="flex gap-2 ">
              <Button 
                className="flex-1" 
                onClick={handleSubmit} 
                type="button" >登録</Button>
              <Button type="button" variant="outline">キャンセル</Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
