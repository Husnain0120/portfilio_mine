"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-lg text-gray-400 mb-8">
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
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{contact.label}</div>
                    <a
                      href={contact.href}
                      className="text-lg font-medium hover:text-purple-400 transition-colors text-white"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-zinc-800 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <Input placeholder="John" className="bg-zinc-900 border-zinc-600 text-white placeholder-gray-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <Input placeholder="Doe" className="bg-zinc-900 border-zinc-600 text-white placeholder-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-zinc-900 border-zinc-600 text-white placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <Input
                  placeholder="Project Discussion"
                  className="bg-zinc-900 border-zinc-600 text-white placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-zinc-900 border-zinc-600 text-white placeholder-gray-500"
                />
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
