import { DialogCardProps } from "@/lib/dialogCard.utils";
import { Button } from "@/components/ui/button";
import { PencilLine } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "@/lib/task.request";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
function EditTask({
  titleCard,
  descriptionCard = "",
  id,
  modele,
  onClose,
}: DialogCardProps) {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>(titleCard);
  const [description, setDescription] = useState<string>(descriptionCard);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const mutation = useMutation({
    mutationFn: (data: { title: string; description: string; id: number }) =>
      updateTask({ id, title: data.title, description: data.description }),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      setIsDialogOpen(false);
      if (onClose) onClose();
      queryClient.invalidateQueries({ queryKey: ["task"] });
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
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-start  px-2 py-1.5 rounded-sm h-8 w-full"
        >
          <PencilLine />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">
            Modifier le nom du {modele}
          </DialogTitle>
          <DialogDescription>Modifier le nom du {modele}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-start gap-4 mb-2 py-4">
          <Label htmlFor="name" className="text-right">
            Nom
          </Label>
          <Input
            id="name"
            defaultValue={titleCard}
            placeholder={"Nom du projet"}
            className="col-span-3 text-gray-500 mb-2"
            onChange={(e) => handleChangeTitle(e)}
          />
          <Label htmlFor="username" className="text-right">
            Description
          </Label>
          <Textarea
            defaultValue={descriptionCard}
            placeholder={"Description de la tâche"}
            className="col-span-3"
            onChange={(e) => {
              handleChangeDescription(e);
            }}
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              mutation.mutate({
                id: id,
                title: title,
                description: description,
              });
            }}
          >
            Ajouter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditTask;