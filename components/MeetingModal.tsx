import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

interface MeetingMOdalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  handleClick?: () => void;
  buttonText?: string;
  buttonIcon?: string;
  children?: React.ReactNode;
  image?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  handleClick,
  buttonText,
  buttonIcon,
  children,
  image,
}: MeetingMOdalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none text-white bg-dark-1 px-6 py-9">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="image" width={72} height={72} />
            </div>
          )}
          <h1 className={cn(`text-3xl font-bold leading-[42px]`, className)}>
            {title}
          </h1>
          {children}

          <Button
            className="bg-blue-1 focus-visible:right-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {" "}
            {buttonIcon && (
              <Image src={buttonIcon} width={13} height={13} alt="icon" />
            )}{" "}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
