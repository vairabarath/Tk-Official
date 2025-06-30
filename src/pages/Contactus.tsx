import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/inputAnimation";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { socialMedia } from "@/data/socialmedia";

export const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent  bg-gradient-to-r from-[#3b82f6]/80 to-primary">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to discuss your next IT project? Our team is
            ready to help you transform your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-input border border-border focus:ring-ring focus:border-ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="bg-input border border-border focus:ring-ring focus:border-ring"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="bg-input border border-border focus:ring-ring focus:border-ring"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  className="bg-input border border-border focus:ring-ring focus:border-ring"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:brightness-110 py-3 px-4 rounded-lg transition duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-primary">
                Contact Information
              </h2>
              <div className="space-y-6">
                {[
                  {
                    Icon: Mail,
                    label: "Email",
                    lines: ["contact@tktech.com"],
                  },
                  {
                    Icon: Phone,
                    label: "Phone",
                    lines: ["+91 123 456 7890"],
                  },
                  {
                    Icon: MapPin,
                    label: "Headquarters",
                    lines: [
                      "123 Tech Park Avenue",
                      "San Francisco, CA 94107",
                      "United States",
                    ],
                  },
                ].map(({ Icon, label, lines }) => (
                  <div className="flex items-start" key={label}>
                    <div className="flex-shrink-0 bg-secondary p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{label}</h3>
                      {lines.map((line, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-primary">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                {socialMedia.map((platform, _idx) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.name}
                  >
                    <Button
                      variant="outline"
                      className="bg-muted text-muted-foreground hover:bg-accent hover:text-blue-800 border border-border p-3"
                    >
                      <platform.icon className="w-5 h-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 bg-[color:var(--card)] text-[color:var(--card-foreground)] rounded-xl border border-[color:var(--border)] shadow-lg overflow-hidden backdrop-blur-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860.330018729069!2d78.13525027103402!3d9.920211809454551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5af176675cf%3A0xf8a1d8ad514524b8!2sAnna%20Nagar%2C%20Sathamangalam%2C%20Madurai%2C%20Tamil%20Nadu%20625020!5e0!3m2!1sen!2sin!4v1750728615154!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
