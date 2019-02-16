export class DialogActionsButton {
  text?: string;
  color?: 'primary' | 'secondary' | 'default' | 'warning';
  variant?: 'flat' | 'raised' | 'ghost';
}

export class DialogActions {
  ok?: DialogActionsButton;
  cancel?: DialogActionsButton;
}
