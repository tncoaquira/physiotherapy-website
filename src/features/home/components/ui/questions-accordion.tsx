import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/common/components/ui/accordion";
import { TypographyP, TypographyH2 } from "~/common/components/ui/typography";
import { QUESTIONS } from "~/common/constants";

export function QuestionAccordion() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <TypographyH2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary">Preguntas</span> Frecuentes
          </TypographyH2>
          <TypographyP className="text-muted-foreground mt-4 text-lg">
            Resolvemos tus dudas más comunes para que te sientas seguro y confiado
            en tu proceso de recuperación.
          </TypographyP>
        </div>
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto rounded-xl border bg-card shadow-sm"
          defaultValue={QUESTIONS[0]?.value}
        >
          {QUESTIONS.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b last:border-b-0 px-6 transition-colors hover:bg-muted/20"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors py-5">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}