import {
  CircleIcon,
  CheckCircleIcon,
  SquareIcon,
  CheckSquareIcon,
  TrashIcon,
  PencilSimpleIcon,
  PlusIcon,
  CheckIcon,
  XIcon,
  ClipboardTextIcon,
} from "@phosphor-icons/react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | "circle"
    | "check-circle"
    | "square"
    | "check-square"
    | "trash"
    | "pencil-simple"
    | "plus"
    | "check"
    | "x"
    | "clipboard-text";
  size?: number;
  color?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

const iconMap = {
  "circle": CircleIcon,
  "check-circle": CheckCircleIcon,
  "square": SquareIcon,
  "check-square": CheckSquareIcon,
  "trash": TrashIcon,
  "pencil-simple": PencilSimpleIcon,
  "plus": PlusIcon,
  "check": CheckIcon,
  "x": XIcon,
  "clipboard-text": ClipboardTextIcon,
};

export function Icon({
  name,
  size = 24,
  color = "black",
  weight = "regular",
  className,
  ...rest
}: IconProps) {
  const IconComponent = iconMap[name];

  return (
    <IconComponent
      size={size}
      color={color}
      weight={weight}
      className={className}
      {...rest}
    />
  );
}
