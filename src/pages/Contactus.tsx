import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/inputAnimation";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
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
        </div>
      </div>
    </div>
  );
};
