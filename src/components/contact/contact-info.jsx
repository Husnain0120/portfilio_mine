import { Mail, Phone, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="text-lg text-muted-foreground mb-8">
          I'm always open to discussing new opportunities and interesting projects. Let's create something amazing
          together.
        </p>
      </div>

      <div className="space-y-6">
        {[
          {
            icon: Mail,
            label: "Email",
            value: "husnain@example.com",
            href: "mailto:husnain@example.com",
          },
          {
            icon: Phone,
            label: "Phone",
            value: "+92 300 1234567",
            href: "tel:+923001234567",
          },
          {
            icon: MapPin,
            label: "Location",
            value: "Pakistan",
            href: "#",
          },
        ].map((contact) => (
          <div key={contact.label} className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <contact.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">{contact.label}</div>
              <a href={contact.href} className="text-lg font-medium hover:text-primary transition-colors">
                {contact.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
