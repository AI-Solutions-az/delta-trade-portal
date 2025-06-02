
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/office@delta-trd.ru", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          _subject: "Новая заявка с сайта Delta Trade"
        })
      });

      if (response.ok) {
        toast({
          title: "Успешно!",
          description: "Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
        });
        onOpenChange(false);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Свяжитесь с нами</DialogTitle>
          <DialogDescription>
            Заполните форму и мы свяжемся с вами в ближайшее время.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              name="name"
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+7 (xxx) xxx-xx-xx"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#ff002a] hover:bg-[#cc0022] text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
