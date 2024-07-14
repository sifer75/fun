import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "@/lib/user.request";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
function ButtonUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logout,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-start px-2 py-1.5 rounded-sm h-8 w-full"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Supprimer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Souhaitez vous vous déconnecter?
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col items-start py-8">
          <Label htmlFor="username" className="text-right">
            Cette action est irréversible !
          </Label>
        </DialogDescription>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={() => {
              mutation.mutate();
            }}
            disabled={mutation.isPending}
          >
            Supprimer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonUser;
