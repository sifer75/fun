export interface DialogCardProps {
  titleCard: string;
  modele: string;
  descriptionCard?: string;
  id: number;
  onClose?: () => void;
}

export interface DialogCardDeleteProps {
  title: string;
  dialogTitle: string;
  id: number;
}
