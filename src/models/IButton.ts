import { MouseEventHandler } from "react";

export interface IButton {
  name: string;
  id: string;
  style: object;
  onClick: MouseEventHandler<HTMLButtonElement>
}