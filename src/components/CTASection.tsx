
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#ff002a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Start Trading?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join hundreds of successful businesses that trust Delta Trade for their petroleum trading needs. Get started today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#ff002a] hover:bg-gray-100 px-8 py-3">
            Open Trading Account
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#ff002a] px-8 py-3">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};
