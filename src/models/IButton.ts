import { MouseEventHandler } from "react";

export interface IButton {
  name: string;
  id: string;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>
}