export interface DialogCardProps {
  dialogTitle: string;
  dialogDescription: string;
  labelName: string;
  labelDescription: string;
  id?: number;
  onClose: () => void;
}

export interface DialogCardDeleteProps {
  dialogTitle: string;
  label: string;
  id: number;
  onClose: () => void;
}
