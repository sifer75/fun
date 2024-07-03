import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createWorkspace } from "@/lib/workspace.request";
import { useState } from "react";
import { DialogCardProps } from "@/lib/dialogCard.utils";
import { WorkspaceProps } from "@/lib/workspace.utils";

function DialogCardCreate({
  dialogTitle,
  dialogDescription,
  labelName,
  labelDescription,
}: DialogCardProps) {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const mutation = useMutation({
    mutationFn: (data: WorkspaceProps) =>
      createWorkspace(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
    },
  });

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span>Création du workspace</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-4 mb-2">
            <Label htmlFor="name" className="text-right">
              Titre
            </Label>
            <Input
              id="name"
              placeholder={labelName}
              className="col-span-3 text-gray-500"
              onChange={(e) => handleChangeTitle(e)}
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea
              placeholder={labelDescription}
              className="col-span-3"
              onChange={(e) => handleChangeDescription(e)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              mutation.mutate({ title: title, description: description });
            }}
          >
            Ajouter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogCardCreate;
