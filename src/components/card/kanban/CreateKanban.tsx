import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import { KanbanProps } from "@/lib/cards.utils";
import { createKanban } from "@/lib/kanban.request";
import { useParams } from "react-router-dom";

function CreateKanban({ titleTypeCard }: { titleTypeCard: string }) {
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const workspaceId = Number(id);
  const mutation = useMutation({
    mutationFn: (data: KanbanProps) => createKanban(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["kanban", workspaceId],
      });
      setIsDialogOpen(false);
    },
  });

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>
          <span>Création du {titleTypeCard}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">
            Créer un {titleTypeCard}
          </DialogTitle>
          <DialogDescription>
            Ajouter un nouveau {titleTypeCard}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-4 mb-2">
            <Label htmlFor="name" className="text-right">
              Titre
            </Label>
            <Input
              id="name"
              placeholder={`Nom du ${titleTypeCard}`}
              className="col-span-3 text-gray-500"
              onChange={(e) => handleChangeTitle(e)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              mutation.mutate({ title, workspaceId });
            }}
          >
            Ajouter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateKanban;
