import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <section className="bg-zinc-900 text-white pt-20 pb-32 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Whether you are looking to buy, sell, or simply explore options, 
            our advisors are here to assist you.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl -mt-16 relative z-10 pb-24">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Form */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="font-serif text-3xl font-bold mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} />
                </div>
                <Button size="lg" className="w-full text-lg h-14">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info blocks */}
            <div className="bg-zinc-900 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Headquarters</h4>
                    <p className="text-zinc-400">Infinity Tower, Level 42<br />Bandra Kurla Complex<br />Mumbai, Maharashtra 400051</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-zinc-400">+91 98765 43210<br />+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Address</h4>
                    <p className="text-zinc-400">hello@infinityrealtors.in<br />sales@infinityrealtors.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                    <p className="text-zinc-400">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
