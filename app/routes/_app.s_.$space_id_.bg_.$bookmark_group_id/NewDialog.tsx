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
import { isValidURL } from "~/utils/url";

export function NewDialog({spaceId, bookmarkGroupId}: {spaceId: string, bookmarkGroupId: string}) {
  const [ isOpen, setIsOpen ] = useState(false);
  const [formData, setFormData] = useState({ url: "", title: "" });
  const [ urlError, setUrlError ] = useState("");
  const [ titleError, setTitleError ] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openChange = (b: boolean) => {
    setIsOpen(b);
    if (!b) {
      setFormData({ url: "", title: "" });
      setUrlError("");
      setTitleError("");
    }
  }

  const handleSubmit = async () => {
    const bookmark: BookmarkInput = {
      url: formData.url,
      title: formData.title,
      space_id: spaceId,
      bookmark_group_id: bookmarkGroupId,
    }

    let ok = true;

    if (!isValidURL(bookmark.url)) {
      setUrlError("有効なURLを入力してください");
      ok = false;
    }
    if (!bookmark.title || bookmark.title === "") {
      setTitleError("入力は必須です");
      ok = false;
    }

    // TODO: モーダルダイアログが閉じてしまう
    if(!ok) return;

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
    openChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={openChange}>
      <DialogTrigger asChild>
        <Button><Plus />追加</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>新しいブックマーク</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div >
            <Label htmlFor="url" className="text-right">
              URL
            </Label>
            <Input 
              id="link" 
              name="url"
              value={formData.url}
              onChange={handleChange} />
              {urlError && (
                <p className="mt-2 text-sm text-red-500">{urlError}</p>
              )}
          </div>
          <div >
            <Label htmlFor="title" className="text-right">
              タイトル
            </Label>
            <Input 
              id="title" 
              name="title"
              value={formData.title}
              onChange={handleChange} />
              {titleError && (
                <p className="mt-2 text-sm text-red-500">{titleError}</p>
              )}
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <div className="flex gap-2 ">
            <Button 
              className="flex-1" 
              onClick={handleSubmit} 
              type="button" >登録</Button>
            <DialogClose>
              <Button type="button" variant="outline">キャンセル</Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
